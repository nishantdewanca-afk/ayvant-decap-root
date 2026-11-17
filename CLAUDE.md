# ayvant.ca

The website for Ayvant IT & Cybersecurity Inc. (Langley and Surrey, BC). Netlify deploys `main` of this repo.
This repo is independent: it started from the same Next.js codebase as ayvant.com, but nothing is synced
between the two repos. Make ayvant.ca changes here only.

- Next.js 15 static export in `site/`; `netlify.toml` sets base `site`, publish `out` and `NEXT_PUBLIC_SITE = "ca"`.
- Build locally: `cd site && npm install && NEXT_PUBLIC_SITE=ca npm run build`.
- Pages keep the original ayvant.ca URLs (trailing slash). Home, About, Contact, AI Governance and Learning Hub views are in `site/components/ca/`; business info, nav, team and GHL embeds in `site/lib/ca/content.js`.
- The original service and location pages are in `content/ca/pages/*.html`, restyled at build time by `site/lib/ca/pages.js` and `site/components/ca/legacy.css`. Edit the words there; don't add inline colours.
- Learning Hub posts (at /learning-hub/; old /blog/ URLs 301 there): `content/ca/blog/`, images `site/public/images/uploads/`, edited in Decap at ayvant.ca/admin (Netlify Identity + Git Gateway; config `site/public-ca/admin/config.yml`).
- Policies (BC PIPA, PIPEDA, CASL): `content/legal/ca/`. Have counsel review them.
- Redirects: `site/scripts/redirects.mjs` writes `_redirects` at build time.
- Security headers and long caching for `/_next/static/*` are in `netlify.toml` (the CSP doesn't restrict scripts, so GHL forms and chat keep working).
- SEO/AEO: `caMeta()` fits titles to 60 characters and `pageMeta()` descriptions to 160; FAQ sections in original pages and bold-question posts get FAQPage schema automatically; `site/public-ca/llms.txt` summarises the site for AI answer engines.
- hreflang pairs with ayvant.com: `PAIRS` in `site/lib/site.js` (ayvant.com has the matching list in its `site/lib/seo.js`).
- Brand: paper `#f4f2ec`, ink `#141414`, signal red `#cd1312`; Newsreader and Source Sans 3. Plain-English copy.

Open items: add the Canadian Meta Pixel ID (`metaPixelId` in `site/lib/site.js`) and update the cookie and privacy policies' advertising sections; host Sean's and Claude's team photos (still on Wix's CDN).
