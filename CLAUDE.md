# ayvant.ca

Deployed by Netlify from `main` of this repo. This repo is a copy of the shared Ayvant codebase in
`nishantdewanca-afk/ayvant-us-blog` (which also builds ayvant.com); its CLAUDE.md has the full guide.

- Make code and design changes in ayvant-us-blog, then run `scripts/sync-ca-repo.sh <this repo>` there and commit here.
- Owned here, never overwritten by the sync: blog posts in `content/ca/blog/` and images in `site/public/images/uploads/` (edited in Decap at ayvant.ca/admin, Netlify Identity + Git Gateway).
- `netlify.toml` sets `NEXT_PUBLIC_SITE = "ca"`. Build locally: `cd site && npm install && NEXT_PUBLIC_SITE=ca npm run build`.
