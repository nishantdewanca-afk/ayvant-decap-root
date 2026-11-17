import { SITE_URL, INDEXABLE } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots() {
  // Crawling stays allowed before launch so search engines can read the noindex tag on every page.
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin/"] },
    sitemap: INDEXABLE ? `${SITE_URL}/sitemap.xml` : undefined,
  };
}
