// Cookie consent state, stored in the first-party "ayvant_consent" cookie.
// Analytics (GA4) and advertising (Meta Pixel) only load once the visitor opts in.
// A Global Privacy Control signal always counts as an opt-out of advertising (sale/sharing).

export const CONSENT_VERSION = 1;               // bump when new kinds of cookies are added, to ask again
const COOKIE = "ayvant_consent";
const MAX_AGE_DAYS = 365;                       // ask again after 12 months
export const OPEN_EVENT = "ayvant:open-consent";
export const CHANGE_EVENT = "ayvant:consent-changed";

import { SITE_CONFIG } from "./site";
// Per-site IDs live in lib/site.js; an environment variable overrides them.
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || SITE_CONFIG.metaPixelId;
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || SITE_CONFIG.gaId;
// No banner is needed while no optional tracking is configured.
export const TRACKING_CONFIGURED = Boolean(META_PIXEL_ID || GA_ID);

export const gpcOn = () => typeof navigator !== "undefined" && navigator.globalPrivacyControl === true;

export function readConsent() {
  if (typeof document === "undefined") return null;
  const raw = document.cookie.split("; ").find((c) => c.startsWith(`${COOKIE}=`));
  if (!raw) return null;
  try {
    const c = JSON.parse(decodeURIComponent(raw.slice(COOKIE.length + 1)));
    if (c.v !== CONSENT_VERSION || Date.now() - c.ts > MAX_AGE_DAYS * 864e5) return null;
    return { ...c, advertising: c.advertising && !gpcOn() };
  } catch {
    return null;
  }
}

// Removes first-party cookies an optional tool set on our domain, so withdrawing consent takes effect.
function clearCookies(prefixes) {
  const host = location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const c of document.cookie.split("; ")) {
    const name = c.split("=")[0];
    if (!prefixes.some((p) => name === p || name.startsWith(p))) continue;
    for (const d of domains) document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
  }
}

export function saveConsent({ analytics, advertising }) {
  const prev = readConsent();
  const next = { v: CONSENT_VERSION, analytics: Boolean(analytics), advertising: Boolean(advertising) && !gpcOn(), gpc: gpcOn(), ts: Date.now() };
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE}=${encodeURIComponent(JSON.stringify(next))}; Max-Age=${MAX_AGE_DAYS * 86400}; path=/; SameSite=Lax${secure}`;
  const withdrew = (prev?.analytics && !next.analytics) || (prev?.advertising && !next.advertising);
  if (prev?.analytics && !next.analytics) clearCookies(["_ga"]);
  if (prev?.advertising && !next.advertising) clearCookies(["_fbp", "_fbc"]);
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: next }));
  // A script that has already loaded can't be unloaded, so reload to stop it.
  if (withdrew) setTimeout(() => location.reload(), 150);
  return next;
}

export const openConsent = () => window.dispatchEvent(new Event(OPEN_EVENT));
