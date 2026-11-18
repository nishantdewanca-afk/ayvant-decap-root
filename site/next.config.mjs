/** Static export: every page is built to plain HTML in ./out, no server needed.
 *  NEXT_PUBLIC_SITE picks the site. Routes only one site has are named page.us.jsx / page.ca.jsx
 *  (and route.us.js / route.ca.js); plain page.jsx files are shared by both. */
const SITE = process.env.NEXT_PUBLIC_SITE === "ca" ? "ca" : "us";

const nextConfig = {
  output: "export",
  trailingSlash: SITE === "ca",
  pageExtensions: [`${SITE}.jsx`, `${SITE}.js`, "jsx", "js"],
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
