// Policy pages: markdown in content/legal, rendered at build time.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { IS_CA } from "./site";

// ayvant.ca has its own policies, written for British Columbia and Canadian law.
const DIR = path.join(process.cwd(), "..", "content", "legal", IS_CA ? "ca" : "");

export function getLegal(slug) {
  const { data, content } = matter(fs.readFileSync(path.join(DIR, `${slug}.md`), "utf8"));
  const updated = data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : String(data.updated);
  return { title: data.title, description: data.description, updated, body: content };
}

export const slugify = (s) => String(s).toLowerCase().replace(/&[a-z]+;/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
