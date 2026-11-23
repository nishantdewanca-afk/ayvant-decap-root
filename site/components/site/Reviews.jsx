"use client";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { REVIEWS } from "@/lib/content";

const PROFILES = [
  ["Google Business Profile", "https://www.google.com/search?q=Ayvant+IT+Services+Irvine+reviews"],
  ["Better Business Bureau", "https://www.bbb.org/us/ca/irvine/profile/computer-services/ayvant-it-services-1126-1000066446"],
  ["Clutch", "https://clutch.co/profile/ayvant-it-services"],
];

const LONG = 260;

const ReviewCard = ({ r, i }) => {
  const [open, setOpen] = useState(false);
  const long = r.quote.length > LONG;
  return (
    <figure className={`reveal p-8 flex flex-col justify-between bg-paper/[0.04] border border-paper/15 ${i === 1 ? "md:mt-12" : ""}`} style={{ transitionDelay: `${i * 90}ms` }} data-testid={`review-card-${r.id}`}>
      <div>
        <span className="disp text-signal text-6xl leading-none block h-8" aria-hidden="true">&ldquo;</span>
        <blockquote className="disp text-[21px] leading-[1.5] text-paper mt-2">
          {long && !open ? `${r.quote.slice(0, r.quote.lastIndexOf(" ", LONG))}...` : r.quote}
        </blockquote>
        {long && (
          <button onClick={() => setOpen(!open)} className="mt-4 text-sm font-semibold text-paper/70 hover:text-signal transition-colors" data-testid={`review-toggle-${r.id}`}>
            {open ? "Show less" : "Read the full review"}
          </button>
        )}
      </div>
      <figcaption className="mt-8 pt-5 border-t border-paper/15">
        <span className="block font-semibold text-paper">{r.name}</span>
        <span className="lbl text-paper/60">{r.firm}</span>
      </figcaption>
    </figure>
  );
};

export const Reviews = () => (
  <section id="reviews" className="bg-ink text-paper py-24 md:py-32" data-testid="reviews-section">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-[96px_1fr] gap-8 md:gap-12">
        <p className="lbl text-paper/60 md:pt-3">04 Reviews</p>
        <div className="min-w-0">
          <h2 className="disp h2-size mb-12 reveal">What clients say.</h2>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {REVIEWS.map((r, i) => <ReviewCard key={r.id} r={r} i={i} />)}
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 items-center reveal">
            <p className="lbl text-paper/60">Read more reviews on</p>
            {PROFILES.map(([l, h], i) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="ul-link inline-flex items-center gap-2 font-semibold" data-testid={`review-profile-link-${i}`}>
                {l} <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
