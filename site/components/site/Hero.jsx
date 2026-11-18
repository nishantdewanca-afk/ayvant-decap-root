"use client";
import { ArrowRight, Phone } from "lucide-react";
import { BIZ } from "@/lib/content";

const Shield = () => (
  <div className="persp gr" aria-hidden="true">
    <svg viewBox="0 0 400 400" className="tilt w-full max-w-[280px] mx-auto">
      <g className="spin" fill="none" stroke="#141414" strokeWidth="2">
        <circle cx="200" cy="200" r="180" strokeDasharray="4 10" />
        <circle cx="200" cy="200" r="130" />
      </g>
      <path className="dr" pathLength="1" d="M200 60 L320 110 V210 C320 290 260 330 200 350 C140 330 80 290 80 210 V110 Z" fill="none" stroke="#141414" strokeWidth="6" />
      <rect x="165" y="190" width="70" height="60" fill="#141414" />
      <path d="M175 190 V165 a25 25 0 0 1 50 0 V190" fill="none" stroke="#141414" strokeWidth="8" />
      <circle cx="200" cy="218" r="8" fill="#cd1312" />
    </svg>
  </div>
);

export const Hero = () => (
  <section className="bg-paper text-ink pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden" data-testid="hero-section">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[96px_1fr] lg:grid-cols-[96px_1fr_280px] gap-10 items-center">
      <div className="lbl hidden md:block [writing-mode:vertical-rl] rotate-180 text-smoke">Irvine, CA / Serving all 50 states</div>
      <div className="min-w-0">
        <p className="lbl text-signal mb-6 fu">Managed IT and cybersecurity for sensitive data</p>
        <h1 className="disp h1-size" data-testid="hero-headline">
          <span className="ln"><span>Your client files,</span></span>
          <span className="ln"><span>locked <em>tight.</em></span></span>
        </h1>
        <p className="fu d-1 text-lg md:text-xl leading-[1.6] mt-8 max-w-xl" data-testid="hero-subcopy">
          IT, security and compliance for law, medical, dental and finance firms, since 1985. One team, real people, and a plan for AI before it turns into a risk.
        </p>
        <div className="fu d-2 flex flex-wrap gap-4 mt-12">
          <a href="#assessment" className="group inline-flex items-center gap-3 bg-signal text-white px-6 py-4 font-semibold hover:bg-ink transition-colors" data-testid="hero-assessment-btn">
            Book a free security assessment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href={BIZ.tel} className="inline-flex items-center gap-3 border border-ink px-6 py-4 font-semibold hover:bg-ink hover:text-paper transition-colors" data-testid="hero-call-btn">
            <Phone size={18} /> Call {BIZ.phone}
          </a>
        </div>
        <a href="/security-check" className="fu d-3 inline-flex items-center gap-2 mt-6 font-semibold border-b-2 border-signal pb-1 hover:text-signal transition-colors" data-testid="hero-quiz-link">
          Or take the 2-minute &ldquo;How protected is your firm?&rdquo; check <ArrowRight size={16} />
        </a>
      </div>
      <div className="hidden lg:block"><Shield /></div>
    </div>
  </section>
);

const TICK = ["AI Governance", "Cybersecurity", "Managed IT", "Compliance", "24x7 Emergency Support"];

export const Ticker = () => (
  <section className="bg-ink text-paper py-6 overflow-hidden" aria-label="Services ticker" data-testid="services-ticker">
    <div className="mq disp italic text-3xl md:text-4xl gap-12 pr-12">
      {[...TICK, ...TICK].map((t, i) => (
        <span key={i} className="flex gap-12 whitespace-nowrap">{t}<span className="text-signal">/</span></span>
      ))}
    </div>
  </section>
);
