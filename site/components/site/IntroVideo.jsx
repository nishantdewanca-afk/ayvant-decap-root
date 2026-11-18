"use client";
import { useState } from "react";
import { Section, RailGrid, RailLabel } from "./primitives";
import { VideoDialog, PlayButton } from "./VideoDialog";
import { INTRO_VIDEO } from "@/lib/content";

export const IntroVideo = () => {
  const [open, setOpen] = useState(false);
  return (
    <Section id="intro-video" className="bg-paper text-ink" testid="intro-video-section">
      <RailGrid>
        <RailLabel n="01">Meet us</RailLabel>
        <div className="min-w-0 reveal">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <h2 className="disp h2-size max-w-2xl">Hear it from us, and from the firms we look after.</h2>
            <p className="lbl text-smoke">2 minutes / Ayvant team and clients</p>
          </div>
          <button onClick={() => setOpen(true)} className="group relative block w-full aspect-video overflow-hidden bg-slot border border-ink text-left" data-testid="intro-video-play-btn">
            <img src={INTRO_VIDEO.poster} alt="Ayvant engineer walking a client team through their security review" className="img-duo absolute inset-0 w-full h-full object-cover" />
            <span className="absolute inset-0 bg-ink/25" />
            <span className="absolute inset-0 flex items-center justify-center"><PlayButton /></span>
            <span className="absolute left-0 bottom-0 bg-paper px-5 py-3 lbl">{INTRO_VIDEO.src ? "Play intro video" : "Intro video coming soon"}</span>
          </button>
        </div>
      </RailGrid>
      <VideoDialog open={open} onOpenChange={setOpen} title="Ayvant intro: the team and our clients" src={INTRO_VIDEO.src} />
    </Section>
  );
};
