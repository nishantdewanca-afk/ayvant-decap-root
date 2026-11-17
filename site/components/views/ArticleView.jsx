"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Assessment } from "@/components/site/Assessment";
import { InlineCta } from "@/components/service/Sections";
import { PostCard } from "@/components/blog/PostCard";
import { fmtDate } from "@/lib/format";
import { useReveal } from "@/hooks/useReveal";
import { ShareBar } from "@/components/site/ShareBar";
import { BIZ } from "@/lib/content";
import { IS_CA, BLOG_PATH, postHref } from "@/lib/site";

const md = {
  // A post body should not add a second page heading, so a markdown "# " heading renders as a section heading.
  h1: (p) => <h2 className="disp text-3xl md:text-4xl mt-14 mb-5" {...p} />,
  h2: (p) => <h2 className="disp text-3xl md:text-4xl mt-14 mb-5" {...p} />,
  h3: (p) => <h3 className="text-xl font-bold mt-10 mb-3" {...p} />,
  p: (p) => <p className="mb-6" {...p} />,
  a: (p) => <a className="text-signal underline underline-offset-4" {...p} />,
  ul: (p) => <ul className="list-disc pl-6 mb-6 space-y-2" {...p} />,
  ol: (p) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...p} />,
  blockquote: (p) => <blockquote className="border-l-4 border-signal pl-6 disp italic text-2xl my-10" {...p} />,
  img: ({ src, alt }) => <img src={src} alt={alt || ""} className="my-10 border border-ink w-full" loading="lazy" />,
};

const Article = ({ p }) => {
  return (
    <article data-testid="article">
      <header className="max-w-3xl mx-auto px-6 pt-14 md:pt-20">
        <a href={BLOG_PATH} className="lbl inline-flex items-center gap-2 text-smoke hover:text-signal" data-testid="article-back-link"><ArrowLeft size={14} /> Learning Hub</a>
        <p className="lbl mt-10 flex flex-wrap gap-x-3"><span className="text-signal">{p.type}</span>{IS_CA && <span className="text-smoke">{p.author || "Ayvant Team"}</span>}<span className="text-smoke">{fmtDate(p.date)}</span>{p.read_time && <span className="text-smoke">{p.read_time}</span>}</p>
        <h1 className="disp text-[40px] md:text-[60px] leading-[1.05] mt-4" data-testid="article-title">{p.title}</h1>
        <p className="text-xl leading-[1.6] text-ink/75 mt-6">{p.excerpt}</p>
        <ShareBar className="mt-8" path={postHref(p.slug)} title={p.title} description={p.excerpt} eyebrow={p.type} />
      </header>
      {p.cover && (
        <figure className="max-w-5xl mx-auto px-6 mt-12">
          <img src={p.cover} alt="" className="w-full aspect-[21/9] object-cover border border-ink" />
        </figure>
      )}
      <div className="max-w-3xl mx-auto px-6 py-14 text-[19px] leading-[1.8]" data-testid="article-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={md}>{p.body}</ReactMarkdown>
        <div className="mt-14 border-t border-ink pt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="font-semibold">Questions about your own setup?</p>
          <a href={BIZ.tel} className="inline-flex items-center gap-2 font-semibold hover:text-signal" data-testid="article-call-link"><Phone size={16} /> {BIZ.phone}</a>
        </div>
      </div>
    </article>
  );
};

const More = ({ slug, posts }) => {
  const more = posts.filter((x) => x.slug !== slug).slice(0, 3);
  if (!more.length) return null;
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <h2 className="disp h2-size mb-10">Keep reading.</h2>
      <div className="grid md:grid-cols-3 gap-6">{more.map((x, i) => <PostCard key={x.slug} p={x} i={i} testid={`more-post-${i}`} />)}</div>
    </section>
  );
};

export default function ArticleView({ post, posts }) {
  useReveal();
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main>
        <Article p={post} />
        <div className="max-w-6xl mx-auto px-6 pb-20">{IS_CA ? (
          <InlineCta testid="article-cta" title="Need Help With Your IT Security?" sub="Let's have a conversation about your IT needs. No pressure, no jargon – just honest advice from people who care about your business." />
        ) : (
          <InlineCta testid="article-cta" title="Want a second pair of eyes?" sub="Book a free, 45-minute security assessment with a senior engineer. No sales script, no obligation." />
        )}</div>
        <More slug={post.slug} posts={posts} />
        <Assessment n="Next step" />
      </main>
      <Footer />
    </div>
  );
}
