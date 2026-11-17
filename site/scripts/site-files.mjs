// Runs after `next build`. public/ is shared by both sites, so ayvant.ca copies in public-ca/
// (its CMS admin, Google verification file) and drops files that only make sense on ayvant.com.
import fs from "node:fs";
import path from "node:path";

if (process.env.NEXT_PUBLIC_SITE === "ca") {
  const out = path.join(process.cwd(), "out");
  fs.cpSync(path.join(process.cwd(), "public-ca"), out, { recursive: true });
  for (const f of ["llms.txt", "guides"]) fs.rmSync(path.join(out, f), { recursive: true, force: true });
  console.log("site-files (ca): public-ca copied, ayvant.com-only files removed");
}
