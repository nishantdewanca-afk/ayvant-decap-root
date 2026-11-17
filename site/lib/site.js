// Which site this build is for. One codebase builds both:
//   ayvant.com (default)                 NEXT_PUBLIC_SITE unset or "us"
//   ayvant.ca  (set on that Netlify site) NEXT_PUBLIC_SITE = "ca"
export const SITE = process.env.NEXT_PUBLIC_SITE === "ca" ? "ca" : "us";
export const IS_CA = SITE === "ca";

const SITES = {
  us: {
    url: "https://www.ayvant.com",
    name: "Ayvant IT Services",
    locale: "en_US",
    lang: "en-US",
    metaPixelId: "313579003400566",
    gaId: "",
    feed: { url: "/learning-hub/rss.xml", title: "Ayvant Learning Hub" },
  },
  ca: {
    url: "https://ayvant.ca",
    name: "Ayvant IT & Cybersecurity",
    locale: "en_CA",
    lang: "en-CA",
    metaPixelId: "", // Canadian Meta Pixel ID goes here
    gaId: "G-2B3N9Z8CCH",
    feed: { url: "/learning-hub/rss.xml", title: "Ayvant Learning Hub (Canada)" },
  },
};

export const SITE_CONFIG = SITES[SITE];
export const SITE_URL = SITE_CONFIG.url;
export const OTHER_SITE_URL = SITES[IS_CA ? "us" : "ca"].url;

// ayvant.ca keeps its existing URLs, which end in a slash.
export const href = (path) => (IS_CA && path !== "/" && !/\.[a-z]+$/.test(path) && !path.endsWith("/") ? `${path}/` : path);

// Pages that exist on both sites, so search engines show the right country's version (hreflang).
const PAIRS = [
  ["/", "/"],
  ["/about", "/pages/about/"],
  ["/contact", "/pages/contact/"],
  ["/security-check", "/security-check/"],
  ["/learning-hub", "/learning-hub/"],
  ["/services/cybersecurity", "/pages/cybersecurity/"],
  ["/services/ai-governance", "/pages/ai-governance/"],
];
export function hreflang(path) {
  const pair = PAIRS.find(([us, ca]) => (IS_CA ? ca : us) === path);
  if (!pair) return undefined;
  const [us, ca] = pair;
  return { "en-US": `${SITES.us.url}${us}`, "en-CA": `${SITES.ca.url}${ca}`, "x-default": `${SITES.us.url}${us}` };
}

// Where posts live: the Learning Hub on both sites.
export const BLOG_PATH = IS_CA ? "/learning-hub/" : "/learning-hub";
export const postHref = (slug) => (IS_CA ? `/learning-hub/${slug}/` : `/learning-hub/${slug}`);
