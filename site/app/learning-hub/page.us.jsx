import LearningHubView from "@/components/views/LearningHubView";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { getAllPosts } from "@/lib/posts";

export const metadata = pageMeta({
  title: "Learning Hub: IT, Cybersecurity & Compliance Guides for Professional Firms | Ayvant",
  description: "Plain-English articles, tutorials and knowledge base answers on cybersecurity, HIPAA, AI governance and managed IT for law, medical, dental and financial firms.",
  path: "/learning-hub",
});

export default function Page() {
  const posts = getAllPosts().map(({ body, ...p }) => p);
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Blog", name: "Ayvant Learning Hub", url: `${SITE_URL}/learning-hub`, publisher: { "@id": `${SITE_URL}/#business` } }} />
      <LearningHubView posts={posts} />
    </>
  );
}
