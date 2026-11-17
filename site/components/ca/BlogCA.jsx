"use client";
// ayvant.ca Blog index: the original words, in the ayvant.com Learning Hub design.
import { Rss } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Assessment } from "@/components/site/Assessment";
import { PostCard } from "@/components/blog/PostCard";
import { useReveal } from "@/hooks/useReveal";

const Grid = ({ title, posts, id }) => (
  <section className="py-16 md:py-20 border-t border-ink first:border-t-0" data-testid={id}>
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="disp h2-size mb-12 reveal">{title}</h2>
      <div className="grid md:grid-cols-3 gap-x-6 gap-y-14">
        {posts.map((p, i) => <PostCard key={p.slug} p={p} i={i} testid={`${id}-${p.slug}`} />)}
      </div>
      {!posts.length && <p className="text-lg text-smoke">Nothing here yet. Check back soon.</p>}
    </div>
  </section>
);

export default function BlogCA({ posts }) {
  useReveal();
  const featured = posts.filter((p) => p.featured).slice(0, 3);
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main>
        <section className="pt-20 pb-12 md:pt-28 border-b border-ink" data-testid="hub-hero">
          <div className="max-w-6xl mx-auto px-6">
            <p className="lbl text-signal mb-6 fu">Our Blog</p>
            <h1 className="disp h1-size max-w-4xl"><span className="ln"><span>IT &amp; Cybersecurity</span></span><span className="ln"><span><em>Insights</em></span></span></h1>
            <p className="fu d-1 text-lg md:text-xl leading-[1.6] mt-8 max-w-2xl">Expert advice on protecting your business, optimizing your technology, and staying ahead of cyber threats. Written for law firms, accountants, and professional service businesses.</p>
            <a href="/blog/rss.xml" className="fu d-2 inline-flex items-center gap-2 mt-8 text-sm font-semibold text-smoke hover:text-signal" data-testid="hub-rss-link">
              <Rss size={14} /> Subscribe via RSS
            </a>
          </div>
        </section>
        {featured.length > 0 && <Grid title="Featured Articles" posts={featured} id="blog-featured" />}
        <Grid title="All Articles" posts={posts} id="blog-all" />
        <Assessment />
      </main>
      <Footer />
    </div>
  );
}
