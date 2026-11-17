"use client";
import { useState } from "react";
import { Section, RailGrid, RailLabel } from "./primitives";
import { VideoDialog, PlayButton } from "./VideoDialog";
import { CASE_STUDIES } from "@/lib/content";

export const CaseStudies = () => {
  const [active, setActive] = useState(null);
  return (
    <Section id="case-studies" className="bg-sand text-ink" testid="case-studies-section">
      <RailGrid>
        <RailLabel n="07">Case studies</RailLabel>
        <div className="min-w-0">
          <div className="grid md:grid-cols-[1fr_1fr] gap-6 mb-12 items-end reveal">
            <h2 className="disp h2-size">Firms like yours, in their own words.</h2>
            <p className="text-[17px] leading-[1.6] max-w-md">Short videos with the people we work for: what was going wrong, what we changed, and what their week looks like now.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((c, i) => (
              <button key={c.id} onClick={() => setActive(c)} className={`group text-left reveal ${i === 1 ? "md:mt-12" : ""}`} style={{ transitionDelay: `${i * 90}ms` }} data-testid={`case-study-play-${i}`}>
                <figure className="relative aspect-[4/5] bg-slot overflow-hidden border border-ink">
                  <img src={c.img} alt={`${c.tag} case study video thumbnail`} className="img-duo absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <span className="absolute inset-0 bg-ink/20" />
                  <span className="absolute top-4 left-4 bg-paper px-3 py-2 lbl">{c.tag}</span>
                  <span className="absolute bottom-4 right-4"><PlayButton size="sm" /></span>
                </figure>
                <p className="disp text-2xl mt-4">{c.title}</p>
                <p className="lbl text-smoke mt-1">{c.src ? "Watch video" : "Coming soon"}</p>
              </button>
            ))}
          </div>
        </div>
      </RailGrid>
      <VideoDialog open={!!active} onOpenChange={(o) => !o && setActive(null)} title={active?.title || ""} src={active?.src} />
    </Section>
  );
};
