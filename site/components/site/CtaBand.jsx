"use client";
import { ArrowRight, Phone } from "lucide-react";
import { BIZ } from "@/lib/content";

export const CtaBand = () => (
  <section className="bg-signal text-white py-16 md:py-20" data-testid="cta-band-1">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-10 items-center reveal">
      <div>
        <p className="lbl text-white/80 mb-3">05 Free, 45 minutes, no obligation</p>
        <h2 className="disp h2-size">Find the gaps before someone else does.</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        <a href="#assessment" className="group inline-flex items-center gap-3 bg-white text-ink px-6 py-4 font-semibold hover:bg-ink hover:text-white transition-colors" data-testid="cta1-assessment-btn">
          Book a time slot <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a href={BIZ.tel} className="inline-flex items-center gap-3 border border-white px-6 py-4 font-semibold hover:bg-white hover:text-ink transition-colors" data-testid="cta1-call-btn">
          <Phone size={18} /> {BIZ.phone}
        </a>
        <a href="/security-check" className="inline-flex items-center gap-2 px-2 py-4 font-semibold underline underline-offset-4 hover:no-underline" data-testid="cta1-quiz-link">
          Take the 2-minute check
        </a>
      </div>
    </div>
  </section>
);
