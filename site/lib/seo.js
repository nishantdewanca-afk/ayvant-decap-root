import { SITE_URL, SITE_CONFIG, hreflang } from "./site";

export { SITE_URL };

// One share image per page, rendered at build time by app/og/[key]/route.js.
export const ogKey = (path) => (path === "/" ? "home" : path.replace(/^\/|\/$/g, "").replace(/\//g, "--"));
export const ogPath = (path) => `/og/${ogKey(path)}.png`;

// Until launch the whole site stays out of Google. Set NEXT_PUBLIC_INDEXABLE=true on the host to go live.
export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";

// Search results show about 160 characters of a description; longer ones are cut at a sentence (or word) end.
export const fitDescription = (d = "") => {
  if (d.length <= 160) return d;
  const cut = d.slice(0, 160);
  const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "), cut.lastIndexOf("! "));
  return end >= 70 ? cut.slice(0, end + 1) : `${cut.slice(0, cut.lastIndexOf(" ", 157)).replace(/[,;:\s]+$/, "")}…`;
};

export const pageMeta = ({ title, description: rawDescription, path, type = "website" }) => {
  const description = fitDescription(rawDescription);
  const url = `${SITE_URL}${path}`;
  const image = { url: `${SITE_URL}${ogPath(path)}`, width: 1200, height: 630, alt: title };
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: hreflang(path),
      types: { "application/rss+xml": [{ url: `${SITE_URL}${SITE_CONFIG.feed.url}`, title: SITE_CONFIG.feed.title }] },
    },
    openGraph: { type, url, title, description, siteName: SITE_CONFIG.name, locale: SITE_CONFIG.locale, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
};

export const faqJsonLd = (faqs) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

export const stripTags = (s) => s.replace(/<[^>]+>/g, "");
