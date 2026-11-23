"use client";
import { ArrowRight } from "lucide-react";
import { Section, RailGrid, RailLabel } from "./primitives";
import { PostCard } from "@/components/blog/PostCard";

export const LearningHub = ({ posts = [] }) => {
  return (
    <Section id="learning-hub" className="bg-paper text-ink" testid="learning-hub-section">
      <RailGrid>
        <RailLabel n="11">Learning Hub</RailLabel>
        <div className="min-w-0">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 reveal">
            <h2 className="disp h2-size max-w-2xl">Straight answers, no jargon.</h2>
            <a href="/learning-hub" className="inline-flex items-center gap-2 font-semibold border-b-2 border-signal pb-1 hover:text-signal transition-colors" data-testid="hub-all-link">
              All articles, tutorials and guides <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((p, i) => <PostCard key={p.slug} p={p} i={i} testid={`hub-article-${i}`} />)}
          </div>
        </div>
      </RailGrid>
    </Section>
  );
};
