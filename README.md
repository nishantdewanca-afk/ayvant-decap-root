# ayvant.ca

The website for Ayvant IT & Cybersecurity Inc. (Langley and Surrey, BC), deployed by Netlify from `main`.

- **Blog:** write and edit posts at **ayvant.ca/admin** (Decap CMS, Netlify Identity sign-in). Posts are saved to `content/ca/blog/`, images to `site/public/images/uploads/`. A post with a future date goes live on the first build that day.
- **Code:** this repo is a copy of the shared Ayvant codebase in `nishantdewanca-afk/ayvant-us-blog`, which also builds ayvant.com. Make design and code changes there, then run `scripts/sync-ca-repo.sh` from that repo to bring them here. The sync never touches `content/ca/blog/` or uploaded images.
- **Build locally:** `cd site && npm install && NEXT_PUBLIC_SITE=ca npm run build` (output in `site/out`).
