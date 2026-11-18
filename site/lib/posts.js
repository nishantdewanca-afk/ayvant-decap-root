// Learning Hub posts: markdown files written in Decap CMS, read at build time.
// Publishing in Decap commits to GitHub, which triggers a rebuild on the host.
//
// Scheduling: a post goes live on its `date` (Pacific time). Future-dated posts are left out of
// the build, and a daily rebuild (.github/workflows/daily-publish.yml) picks them up on the day.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { IS_CA } from "./site";

// ayvant.ca keeps its own posts (content/ca/blog), written in Decap with the original site's fields.
const POSTS_DIR = path.join(process.cwd(), "..", "content", IS_CA ? "ca/blog" : "blog");

// Images uploaded through the old Emergent backend used /api/blog/media/; Decap now writes to /uploads/.
const fixImg = (src) => (typeof src === "string" ? src.replace(/^\/api\/blog\/media\//, "/uploads/") : "");

// A date-only value keeps its day; a date with a time is read as the Pacific-time day it falls on.
const toDate = (d) => {
  if (!(d instanceof Date)) return String(d || "").slice(0, 10);
  if (d.getUTCHours() === 0 && d.getUTCMinutes() === 0) return d.toISOString().slice(0, 10);
  return d.toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" });
};

// The ayvant.ca post fields, mapped onto the ones the views use.
const fromCa = (m) => ({
  ...m,
  cover: m.cover || m.featuredImage,
  read_time: m.read_time || (m.readTime ? `${m.readTime} min read` : ""),
  type: m.type || String((m.tags || [])[0] || "Blog").split("|")[0].trim(),
  published: m.published ?? !m.draft,
  metaTitle: m.metaTitle || m.seo?.metaTitle,
  metaDescription: m.metaDescription || m.seo?.metaDescription,
});

// Questions and answers written as a bold question followed by its answer, for FAQPage schema.
const plain = (s) => s.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/[*_`>#]/g, "").replace(/\s+/g, " ").trim();
export function faqsOf(body = "") {
  const blocks = body.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  const out = [];
  for (let i = 0; i < blocks.length; i++) {
    const q = blocks[i].match(/^\*\*(.+\?)\*\*$/);
    if (!q) continue;
    const ans = [];
    for (let j = i + 1; j < blocks.length && !/^(\*\*.+\?\*\*$|#)/.test(blocks[j]); j++) ans.push(plain(blocks[j]));
    if (ans.length) out.push([plain(q[1]), ans.join(" ")]);
  }
  return out;
}

// Today's date in Pacific time, as YYYY-MM-DD. PUBLISH_AS_OF overrides it to preview a future day.
export const today = () =>
  process.env.PUBLISH_AS_OF || new Date().toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" });

function readPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data: raw, content } = matter(fs.readFileSync(path.join(POSTS_DIR, f), "utf8"));
      const m = IS_CA ? fromCa(raw) : raw;
      return {
        slug: String(m.slug || f.slice(0, -3)),
        title: m.title || "",
        type: m.type || "Blog",
        date: toDate(m.date),
        excerpt: m.excerpt || "",
        cover: fixImg(m.cover),
        read_time: m.read_time || "",
        featured: Boolean(m.featured),
        published: m.published !== false,
        oldUrl: m.old_url || "",
        author: m.author || "",
        metaTitle: m.metaTitle || "",
        metaDescription: m.metaDescription || "",
        body: content.replace(/\]\(\/api\/blog\/media\//g, "](/uploads/"),
      };
    });
}

// A post is live when it is published and its date has arrived.
export const isLive = (p, asOf = today()) => p.published && (!p.date || p.date <= asOf);

// Every post file, live or not, for build tooling such as redirects.
export const getEveryPost = () => readPosts();

export function getAllPosts() {
  const asOf = today();
  return readPosts()
    .filter((p) => isLive(p, asOf))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)));
}

export const getPost = (slug) => getAllPosts().find((p) => p.slug === slug) || null;
export const getFeaturedPosts = () => getAllPosts().filter((p) => p.featured);
