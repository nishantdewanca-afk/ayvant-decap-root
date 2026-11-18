import { notFound } from "next/navigation";
import ArticleView from "@/components/views/ArticleView";
import { JsonLd } from "@/components/JsonLd";
import { getAllPosts, getPost, faqsOf } from "@/lib/posts";
import { caMeta } from "@/lib/ca/meta";
import { SITE_URL, SITE_CONFIG } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => getAllPosts().map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }) {
  const p = getPost((await params).slug);
  if (!p) return {};
  const meta = caMeta({ title: p.metaTitle || p.title, description: p.metaDescription || p.excerpt, path: `/learning-hub/${p.slug}/`, type: "article" });
  meta.openGraph.publishedTime = p.date;
  return meta;
}

export default async function Page({ params }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const posts = getAllPosts().filter((x) => x.slug !== post.slug).slice(0, 3).map(({ body, ...x }) => x);
  const faqs = faqsOf(post.body);
  return (
    <>
      {faqs.length > 0 && (
        <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />
      )}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          image: post.cover ? [post.cover.startsWith("/") ? `${SITE_URL}${post.cover}` : post.cover] : undefined,
          author: post.author ? { "@type": "Person", name: post.author } : { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_URL },
          publisher: { "@id": `${SITE_URL}/#business` },
          mainEntityOfPage: `${SITE_URL}/learning-hub/${post.slug}/`,
        }}
      />
      <ArticleView post={post} posts={posts} />
    </>
  );
}
