"use client";
import { useEffect, useRef } from "react";
import { DIFFS } from "@/lib/content";

const Odometer = ({ value }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll(".reel").forEach((r) => r.classList.add("go"));
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="disp big flex" aria-label={value} data-testid="founded-year">
      {value.split("").map((d, i) => (
        <span key={i} className="odo" aria-hidden="true">
          <span className="reel" style={{ "--d": d, animationDelay: `${i * 0.12}s` }}>
            {"0123456789".split("").map((n) => <span key={n} className="block">{n}</span>)}
          </span>
        </span>
      ))}
    </div>
  );
};

export const Benefit = () => (
  <section id="why" className="bg-sand text-ink py-24 md:py-32" data-testid="benefit-section">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[96px_1fr] lg:grid-cols-[96px_1fr_1fr] gap-12 items-start">
      <p className="lbl text-smoke md:pt-3">03 Why Ayvant</p>
      <div className="min-w-0 reveal">
        <h2 className="disp h2-size mb-8">Less worry about tech. More time for clients.</h2>
        <p className="text-[18px] leading-[1.7] max-w-lg" data-testid="benefit-intro">
          You didn't open a practice to babysit servers or read breach reports. We take the IT, the security and the compliance paperwork off your desk, so your attorneys, clinicians and accountants can get back to the work only they can do.
        </p>
        <div className="mt-12">
          <p className="lbl mb-4">In business since</p>
          <Odometer value="1985" />
          <p className="text-[17px] leading-[1.6] mt-6 max-w-md" data-testid="history-text">Founded in San Jose. Rebranded to Ayvant in 2020.</p>
        </div>
      </div>
      <ul className="min-w-0 space-y-6 text-[19px] leading-[1.6] md:col-start-2 lg:col-start-auto lg:pt-24" data-testid="differentiator-list">
        {DIFFS.map((d, i) => (
          <li key={d} className={`reveal border-l-4 ${i === 0 ? "border-signal" : "border-ink"} pl-5 py-1`} style={{ transitionDelay: `${i * 90}ms` }}>{d}</li>
        ))}
      </ul>
    </div>
  </section>
);
