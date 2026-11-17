// Branded 1200x630 share images, one per page, rendered to static PNGs at build time.
import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { SERVICE_PAGES } from "@/lib/services";
import { INDUSTRY_PAGES } from "@/lib/industries";
import { getAllPosts } from "@/lib/posts";
import { ogKey, stripTags } from "@/lib/seo";
import { IS_CA } from "@/lib/site";
import { CA_PAGES, CA_LEGAL } from "@/lib/ca/meta";
import { getLegacyPages } from "@/lib/ca/pages";
import { getLegal } from "@/lib/legal";

export const dynamic = "force-static";
export const dynamicParams = false;

const PAPER = "#f4f2ec", INK = "#141414", RED = "#cd1312";
const DEFAULT_TITLE = "Managed IT & cybersecurity for firms that keep secrets";

// ayvant.ca: its own pages, policies, original service and location pages, and blog posts.
function cardsCA() {
  const kind = (r) => (r.startsWith("/locations/") ? "IT Support" : r.startsWith("/pages/") ? "Services" : "Managed IT Services");
  return [
    ...Object.values(CA_PAGES).map((p) => ({ path: p.path, title: p.og[0], eyebrow: p.og[1] })),
    { path: "/security-check/", title: "How protected is your firm? Take the 2-minute check.", eyebrow: "Free security check" },
    ...Object.entries(CA_LEGAL).map(([slug, file]) => ({ path: `/pages/${slug}/`, title: getLegal(file).title, eyebrow: "Legal" })),
    ...getLegacyPages().map((p) => ({ path: p.route, title: p.title, eyebrow: kind(p.route) })),
    ...getAllPosts().map((p) => ({ path: `/blog/${p.slug}/`, title: p.title, eyebrow: p.type })),
  ].map((c) => ({ ...c, key: `${ogKey(c.path)}.png` }));
}

function cards() {
  if (IS_CA) return cardsCA();
  const heroTitle = (s) => stripTags(s.hero.lines.join(" "));
  return [
    { path: "/", title: DEFAULT_TITLE, eyebrow: "Ayvant IT Services" },
    { path: "/security-check", title: "How protected is your firm? Take the 2-minute check.", eyebrow: "Free security check" },
    { path: "/privacy-policy", title: "Privacy Policy", eyebrow: "Legal" },
    { path: "/cookie-policy", title: "Cookie Policy", eyebrow: "Legal" },
    { path: "/terms-of-use", title: "Terms of Use", eyebrow: "Legal" },
    { path: "/accessibility", title: "Accessibility Statement", eyebrow: "Legal" },
    { path: "/privacy-choices", title: "Do Not Sell or Share My Personal Information", eyebrow: "Legal" },
    { path: "/contact", title: "Talk to a real person. Call, email or book a time.", eyebrow: "Contact" },
    { path: "/about", title: "Four decades of looking after firms that keep secrets", eyebrow: "About Ayvant" },
    { path: "/learning-hub", title: "Straight answers on IT, security and compliance. No jargon.", eyebrow: "Learning Hub" },
    ...Object.values(SERVICE_PAGES).map((s) => ({ path: `/services/${s.slug}`, title: heroTitle(s), eyebrow: s.hero.eyebrow })),
    ...Object.values(INDUSTRY_PAGES).map((s) => ({ path: `/industries/${s.slug}`, title: heroTitle(s), eyebrow: s.hero.eyebrow })),
    ...getAllPosts().map((p) => ({ path: `/learning-hub/${p.slug}`, title: p.title, eyebrow: p.type })),
  ].map((c) => ({ ...c, key: `${ogKey(c.path)}.png` }));
}

export const generateStaticParams = () => cards().map((c) => ({ key: c.key }));

const file = (...p) => fs.readFileSync(path.join(process.cwd(), ...p));
const fonts = () => [
  { name: "Newsreader", data: file("node_modules/@fontsource/newsreader/files/newsreader-latin-500-normal.woff"), weight: 500 },
  { name: "Source Sans", data: file("node_modules/@fontsource/source-sans-3/files/source-sans-3-latin-600-normal.woff"), weight: 600 },
  { name: "Source Sans", data: file("node_modules/@fontsource/source-sans-3/files/source-sans-3-latin-700-normal.woff"), weight: 700 },
];

export async function GET(_req, { params }) {
  const { key } = await params;
  const c = cards().find((x) => x.key === key);
  const logo = `data:image/png;base64,${file("public/ayvant-wordmark.png").toString("base64")}`;
  const size = c.title.length < 60 ? 68 : 58;
  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, display: "flex", flexDirection: "column", background: PAPER, position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, width: 14, height: 630, background: RED }} />
        <img src={logo} width={200} style={{ position: "absolute", left: 80, top: 64 }} />
        <div style={{ position: "absolute", left: 80, top: 186, fontFamily: "Source Sans", fontWeight: 700, fontSize: 26, letterSpacing: 2, color: RED, textTransform: "uppercase" }}>{c.eyebrow}</div>
        <div style={{ position: "absolute", left: 80, top: 236, width: 1030, fontFamily: "Newsreader", fontWeight: 500, fontSize: size, lineHeight: 1.12, color: INK, display: "flex" }}>{c.title}</div>
        <div style={{ position: "absolute", left: 0, bottom: 0, width: 1200, height: 92, background: INK, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 80px", fontFamily: "Source Sans", fontWeight: 600, fontSize: 24, color: PAPER }}>
          <span>{IS_CA ? "Cybersecurity / IT Support / IT Consulting" : "AI Governance / Cybersecurity / Managed IT / Compliance"}</span>
          <span>{IS_CA ? "Langley & Surrey, BC" : "Since 1985"}</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts: fonts() }
  );
}
