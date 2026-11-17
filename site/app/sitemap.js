import { SERVICE_PAGES } from "@/lib/services";
import { INDUSTRY_PAGES } from "@/lib/industries";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/seo";
import { IS_CA } from "@/lib/site";
import { CA_PAGES, CA_LEGAL } from "@/lib/ca/meta";
import { getLegacyPages } from "@/lib/ca/pages";

export const dynamic = "force-static";

// Rebuilt on every deploy, so new pages and Learning Hub posts appear automatically.
export default function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const page = (path, lastModified = today) => ({ url: `${SITE_URL}${path}`, lastModified });
  if (IS_CA)
    return [
      ...Object.values(CA_PAGES).map((p) => page(p.path)),
      page("/security-check/"),
      ...getLegacyPages().map((p) => page(p.route)),
      ...Object.keys(CA_LEGAL).map((s) => page(`/pages/${s}/`)),
      ...getAllPosts().map((p) => page(`/blog/${p.slug}/`, p.date || today)),
    ];
  return [
    page("/"),
    ...Object.keys(SERVICE_PAGES).map((s) => page(`/services/${s}`)),
    ...Object.keys(INDUSTRY_PAGES).map((s) => page(`/industries/${s}`)),
    page("/about"),
    page("/contact"),
    page("/security-check"),
    ...["/privacy-policy", "/cookie-policy", "/terms-of-use", "/accessibility", "/privacy-choices"].map((p) => page(p)),
    page("/learning-hub"),
    ...getAllPosts().map((p) => page(`/learning-hub/${p.slug}`, p.date || today)),
  ];
}
