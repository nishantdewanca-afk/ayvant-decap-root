// ayvant.ca pages carried over from the original site (content/ca/pages/*.html).
// The wording and structure are kept exactly; only the look changes. restyle() swaps the old inline
// colours, rounded corners and shadows for the ayvant.com design (see components/ca/legacy.css).
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DIR = path.join(process.cwd(), "..", "content", "ca", "pages");

// Inline style properties that set the old look. Layout properties (display, gap, grid, margin, padding...) stay.
const DROP = new Set([
  "color", "background", "background-color", "background-image", "border", "border-color", "border-radius", "border-bottom",
  "border-top", "box-shadow", "transition", "font-size", "font-weight", "font-family", "line-height", "opacity",
  "text-decoration", "letter-spacing",
]);

const isRed = (v) => /ayvant-red|227\s*,\s*24\s*,\s*55|#e31837/i.test(v);
const isDark = (v) => /zinc-(7|8|9)00|#18181b|#27272a|black/i.test(v);
const isLight = (v) => /\bwhite\b|#fff|zinc-(50|100|200)\b/i.test(v);

function classesFor(tag, decls) {
  const out = [];
  const bg = decls.background || decls["background-color"];
  if (bg) {
    if (isRed(bg)) out.push(/rgba/.test(bg) ? "lg-tint" : "lg-red");
    else if (isDark(bg)) out.push("lg-box-dark");
    else if (isLight(bg)) out.push("lg-box-light");
    else if (/rgba\(0\s*,\s*0\s*,\s*0/.test(bg)) out.push("lg-shade");
  }
  const color = decls.color;
  if (color && !bg) {
    if (isRed(color)) out.push("text-signal");
    else if (/zinc-(3|4|5|6|7)00/.test(color)) out.push("lg-muted");
  }
  if (decls["border-left"] && isRed(decls["border-left"])) out.push("lg-rule");
  const fs = decls["font-size"];
  if (fs && /^(1\.[7-9]|[2-9](\.\d+)?)rem$/.test(fs.trim()) && !/^h[1-6]$/.test(tag)) out.push("lg-num");
  if (decls["font-weight"] && /^(6|7|8|9)00$|bold/.test(decls["font-weight"].trim()) && /^(span|div|p|li|a|strong)$/.test(tag)) out.push("lg-strong");
  return out;
}

export function restyle(html) {
  return html.replace(/<([a-zA-Z][a-zA-Z0-9]*)(\s[^<>]*?)?(\/?)>/g, (all, tag, attrs = "", selfClose) => {
    if (!attrs || !/\sstyle="/.test(attrs) || tag === "svg" || tag === "path" || tag === "iframe") return all;
    const m = attrs.match(/\sstyle="([^"]*)"/);
    const decls = {};
    for (const part of m[1].split(";")) {
      const i = part.indexOf(":");
      if (i > 0) decls[part.slice(0, i).trim().toLowerCase()] = part.slice(i + 1).trim();
    }
    const add = classesFor(tag.toLowerCase(), decls);
    if (decls["border-left"]) delete decls["border-left"];
    const kept = Object.entries(decls).filter(([k]) => !DROP.has(k)).map(([k, v]) => `${k}: ${v}`).join("; ");
    let a = attrs.replace(/\sstyle="[^"]*"/, kept ? ` style="${kept}"` : "");
    if (add.length) {
      a = /\sclass="/.test(a) ? a.replace(/\sclass="([^"]*)"/, (_, c) => ` class="${c} ${add.join(" ")}"`) : `${a} class="${add.join(" ")}"`;
    }
    return `<${tag}${a}${selfClose}>`;
  });
}

let cache;
export function getLegacyPages() {
  if (cache) return cache;
  cache = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".html"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(DIR, f), "utf8"));
      return {
        route: data.route,
        title: data.title,
        metaTitle: data.metaTitle || data.title,
        description: data.metaDescription || "",
        html: restyle(content),
      };
    });
  return cache;
}

export const getLegacyPage = (route) => getLegacyPages().find((p) => p.route === route) || null;

// The city a location page is about, for its Service schema (as the original site did).
export const cityOf = (title) =>
  title.replace(/^IT Support (for (Law Firms|Accountants|Healthcare) )?in /, "").replace(/, BC$/, "").trim();
