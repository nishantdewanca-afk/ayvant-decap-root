"use client";
import { useState } from "react";
import { Rss, Download } from "lucide-react";
import { Downloads } from "@/components/site/Downloads";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Assessment } from "@/components/site/Assessment";
import { PostCard } from "@/components/blog/PostCard";
import { useReveal } from "@/hooks/useReveal";

const PAGE = 12;
const TYPES = ["All", "Blog", "Tutorial", "KB Article"];
export default function LearningHubView({ posts: all }) {
  const [type, setType] = useState("All");
  const [shown, setShown] = useState(PAGE);
  useReveal();
  const posts = all.filter((p) => type === "All" || p.type === type);
  const pick = (v) => { if (v) { setType(v); setShown(PAGE); } };
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main>
        <section className="pt-20 pb-12 md:pt-28 border-b border-ink" data-testid="hub-hero">
          <div className="max-w-6xl mx-auto px-6">
            <p className="lbl text-signal mb-6 fu">Learning Hub</p>
            <h1 className="disp h1-size max-w-4xl"><span className="ln"><span>Straight answers,</span></span><span className="ln"><span><em>no jargon.</em></span></span></h1>
            <p className="fu d-1 text-lg md:text-xl leading-[1.6] mt-8 max-w-2xl">Articles, step-by-step tutorials and quick knowledge base answers for partners, practice managers and the people who keep professional offices running.</p>
            <ToggleGroup type="single" value={type} onValueChange={pick} className="fu d-2 justify-start flex-wrap gap-2 mt-12" data-testid="hub-filter">
              {TYPES.map((t) => (
                <ToggleGroupItem key={t} value={t} className="rounded-none border border-ink px-5 h-11 font-semibold data-[state=on]:bg-ink data-[state=on]:text-paper" data-testid={`hub-filter-${t.replace(" ", "-").toLowerCase()}`}>{t}</ToggleGroupItem>
              ))}
            </ToggleGroup>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-8">
              <a href="#guides" className="inline-flex items-center gap-2 bg-signal text-white px-5 py-3 font-semibold hover:bg-ink transition-colors" data-testid="hub-guides-link">
                <Download size={18} /> Get our free guides
              </a>
              <a href="/learning-hub/rss.xml" className="inline-flex items-center gap-2 text-sm font-semibold text-smoke hover:text-signal" data-testid="hub-rss-link">
                <Rss size={14} /> Subscribe via RSS
              </a>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-x-6 gap-y-14" data-testid="hub-post-grid">
            {/* Every card is in the HTML so crawlers find every post; the rest show on "Show more". */}
            {posts.map((p, i) => (
              <div key={p.slug} className={i < shown ? "" : "hidden"}>
                <PostCard p={p} i={i} testid={`hub-post-${p.slug}`} />
              </div>
            ))}
            {!posts.length && <p className="text-lg text-smoke" data-testid="hub-empty">Nothing here yet. Check back soon.</p>}
          </div>
          {posts.length > shown && (
            <div className="max-w-6xl mx-auto px-6 mt-14 flex items-center gap-6">
              <button type="button" onClick={() => setShown((n) => n + PAGE)} className="border border-ink px-6 py-3 font-semibold hover:bg-ink hover:text-paper transition-colors" data-testid="hub-show-more">
                Show more
              </button>
              <span className="lbl text-smoke">{shown} of {posts.length}</span>
            </div>
          )}
        </section>
        <div className="border-t border-ink"><Downloads n="" /></div>
        <Assessment n="Prefer to talk it through?" />
      </main>
      <Footer />
    </div>
  );
}
