import HomeCA from "@/components/ca/HomeCA";
import { JsonLd } from "@/components/JsonLd";
import { caMeta, CA_PAGES } from "@/lib/ca/meta";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL, SITE_CONFIG } from "@/lib/site";

const P = CA_PAGES.home;
export const metadata = caMeta(P);

export default function Page() {
  const posts = getAllPosts().slice(0, 3).map(({ body, ...p }) => p);
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: SITE_CONFIG.name, url: SITE_URL }} />
      <HomeCA posts={posts} />
    </>
  );
}
