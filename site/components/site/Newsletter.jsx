"use client";
import { GhlEmbed } from "./GhlEmbed";
import { GHL, LEGAL } from "@/lib/content";
import { IS_CA } from "@/lib/site";

export const Newsletter = () => (
  <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center pb-16 mb-16 border-b border-paper/20" data-testid="newsletter-block">
    <div>
      <p className="lbl text-signal mb-3">Newsletter</p>
      {IS_CA ? (
        <>
          <p className="disp text-3xl md:text-4xl">Stay Protected. Stay Informed.</p>
          <p className="text-paper/80 mt-3">Get cybersecurity tips and IT insights delivered to your inbox.</p>
        </>
      ) : (
        <p className="disp text-3xl md:text-4xl">One useful security note a month. No noise.</p>
      )}
    </div>
    <div>
      <GhlEmbed html={GHL.newsletter} testid="ghl-newsletter-embed" />
      <p className="text-xs text-paper/60 mt-3">Unsubscribe anytime. See our <a href={LEGAL.notice} className="underline">{IS_CA ? "privacy notice" : "notice at collection"}</a> and <a href={LEGAL.privacy} className="underline">Privacy Policy</a>.</p>
    </div>
  </div>
);
