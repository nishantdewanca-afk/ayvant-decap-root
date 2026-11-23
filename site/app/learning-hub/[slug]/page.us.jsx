import { notFound } from "next/navigation";
import ArticleView from "@/components/views/ArticleView";
import { JsonLd } from "@/components/JsonLd";
import { getAllPosts, getPost } from "@/lib/posts";
import { pageMeta, SITE_URL } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => getAllPosts().map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }) {
  const p = getPost((await params).slug);
  if (!p) return {};
  const meta = pageMeta({ title: `${p.title} | Ayvant Learning Hub`, description: p.excerpt, path: `/learning-hub/${p.slug}`, type: "article" });
  meta.openGraph.publishedTime = p.date;
  return meta;
}

export default async function Page({ params }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const posts = getAllPosts().filter((x) => x.slug !== post.slug).slice(0, 3).map(({ body, ...x }) => x);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          image: post.cover ? [post.cover.startsWith("/") ? `${SITE_URL}${post.cover}` : post.cover] : undefined,
          author: { "@type": "Organization", name: "Ayvant IT Services", url: SITE_URL },
          publisher: { "@id": `${SITE_URL}/#business` },
          mainEntityOfPage: `${SITE_URL}/learning-hub/${post.slug}`,
        }}
      />
      <ArticleView post={post} posts={posts} />
    </>
  );
}
