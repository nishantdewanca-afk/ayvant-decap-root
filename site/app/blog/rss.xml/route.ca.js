// RSS 2.0 feed of the ayvant.ca blog, built with the site.
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const rfc822 = (d) => new Date(`${d}T13:00:00Z`).toUTCString(); // 6 am Pacific, when scheduled posts go live
const abs = (u) => (u && u.startsWith("/") ? `${SITE_URL}${u}` : u);

export function GET() {
  const posts = getAllPosts().slice(0, 50);
  const feed = `${SITE_URL}/blog/rss.xml`;
  const items = posts
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.slug}/`;
      const img = abs(p.cover);
      const type = img && /\.png$/i.test(img) ? "image/png" : "image/jpeg";
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(p.date)}</pubDate>
      <category>${esc(p.type)}</category>
      <description>${esc(p.excerpt)}</description>${img ? `\n      <media:content url="${esc(img)}" medium="image" type="${type}" />` : ""}
    </item>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Ayvant IT &amp; Cybersecurity Blog</title>
    <link>${SITE_URL}/blog/</link>
    <atom:link href="${feed}" rel="self" type="application/rss+xml" />
    <description>Expert insights on cybersecurity, IT support, and technology solutions for law firms and accounting practices in Vancouver and the Lower Mainland.</description>
    <language>en-ca</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image><url>${SITE_URL}/ayvant-logo.png</url><title>Ayvant IT &amp; Cybersecurity Blog</title><link>${SITE_URL}/blog/</link></image>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
