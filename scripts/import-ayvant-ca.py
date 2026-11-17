"""One-time import of the old ayvant.ca site (repo nishantdewanca-afk/ayvant-decap-root, Eleventy).

Copies page bodies and blog posts verbatim, so the wording stays exactly as it was:
  src/pages/*.njk, src/locations/*.njk  ->  content/ca/pages/<route>.html  (front matter kept)
  src/blog/posts/*.md                   ->  content/ca/blog/*.md
  images/uploads/*                      ->  site/public/images/uploads/*  (recompressed, same names)
Pages the new site rebuilds (home, about, contact, legal) and old pages that already redirect are skipped.

Usage: python3 scripts/import-ayvant-ca.py /path/to/ayvant-decap-root
"""
import json, re, shutil, sys
from pathlib import Path

SRC = Path(sys.argv[1])
ROOT = Path(__file__).resolve().parent.parent
PAGES_OUT = ROOT / "content/ca/pages"
BLOG_OUT = ROOT / "content/ca/blog"
IMG_OUT = ROOT / "site/public/images/uploads"

REBUILT = {"about", "contact", "privacy-policy", "terms-of-service", "cookie-policy"}
# Old location URLs that the old site already 301-redirected to newer pages.
REDIRECTED = {"vancouver", "surrey", "langley", "burnaby", "richmond", "coquitlam", "port-moody", "delta",
              "abbotsford", "chilliwack", "it-support-surrey"}

def split(path):
    t = path.read_text()
    m = re.match(r"---\n(.*?)\n---\n?(.*)", t, re.S)
    return m.group(1), m.group(2)

def route(fm, kind, slug):
    m = re.search(r"^permalink:\s*(\S+)", fm, re.M)
    if m:
        return m.group(1)
    return f"/{kind}/{slug}/"

PAGES_OUT.mkdir(parents=True, exist_ok=True)
index = []
for kind, folder in (("pages", "src/pages"), ("locations", "src/locations")):
    for f in sorted((SRC / folder).glob("*.njk")):
        slug = f.stem
        if (kind == "pages" and slug in REBUILT) or (kind == "locations" and slug in REDIRECTED):
            continue
        fm, body = split(f)
        assert "{%" not in body and "{{" not in body, f"template code in {f}"
        r = route(fm, kind, slug)
        out = PAGES_OUT / (r.strip("/").replace("/", "--") + ".html")
        out.write_text(f"---\n{fm}\nroute: {r}\nsource: {f.relative_to(SRC)}\n---\n{body}")
        index.append(r)

BLOG_OUT.mkdir(parents=True, exist_ok=True)
for f in sorted((SRC / "src/blog/posts").glob("*.md")):
    shutil.copy2(f, BLOG_OUT / f.name)

IMG_OUT.mkdir(parents=True, exist_ok=True)
try:
    from PIL import Image
except ImportError:
    Image = None
for f in sorted((SRC / "images/uploads").iterdir()):
    dest = IMG_OUT / f.name
    if Image is None:
        shutil.copy2(f, dest)
        continue
    im = Image.open(f)
    if im.width > 1600:
        im = im.resize((1600, round(im.height * 1600 / im.width)), Image.LANCZOS)
    if f.suffix.lower() in (".jpg", ".jpeg"):
        im.convert("RGB").save(dest, "JPEG", quality=82, optimize=True, progressive=True)
    else:
        im.save(dest, optimize=True)
    if dest.stat().st_size > f.stat().st_size:
        shutil.copy2(f, dest)

print(f"{len(index)} pages, {len(list(BLOG_OUT.glob('*.md')))} posts, {len(list(IMG_OUT.iterdir()))} images")
