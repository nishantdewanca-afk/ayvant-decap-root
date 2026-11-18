"use client";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { BIZ } from "@/lib/content";

export const TOC = [
  ["what-it-is", "What it is"],
  ["about", "Why it matters"],
  ["industries", "For your industry"],
  ["benefits", "Value and benefits"],
  ["included", "What's included"],
  ["process", "Onboarding process"],
  ["faq", "FAQs"],
];

const useActive = (items) => {
  const [active, setActive] = useState(items[0][0]);
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      const current = items.filter(([id]) => document.getElementById(id)?.getBoundingClientRect().top < line).pop();
      setActive(current ? current[0] : items[0][0]);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);
  return active;
};

export const Toc = ({ items = TOC }) => {
  const active = useActive(items);
  return (
    <aside className="hidden lg:block" data-testid="service-toc">
      <div className="sticky top-28">
        <p className="lbl text-smoke mb-5">On this page</p>
        <nav className="grid border-l border-ink/20" aria-label="On this page">
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={`pl-4 py-2 -ml-px border-l-2 text-[15px] transition-colors ${active === id ? "border-signal text-ink font-semibold" : "border-transparent text-smoke hover:text-ink"}`} data-testid={`toc-${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="mt-10 bg-ink text-paper p-6">
          <p className="disp text-2xl leading-tight">Talk to a real person.</p>
          <a href={BIZ.tel} className="mt-4 flex items-center gap-2 font-semibold hover:text-signal transition-colors" data-testid="toc-call-btn"><Phone size={16} /> {BIZ.phone}</a>
          <a href="#assessment" className="mt-4 block bg-signal text-white text-center py-3 text-sm font-semibold hover:bg-paper hover:text-ink transition-colors" data-testid="toc-assessment-btn">Free assessment</a>
          <a href="/security-check" className="mt-3 block text-center text-sm font-semibold text-paper/80 underline underline-offset-4 hover:text-paper" data-testid="toc-quiz-link">Or take the 2-minute check</a>
        </div>
      </div>
    </aside>
  );
};

export const MobileToc = ({ items = TOC }) => (
  <nav className="lg:hidden -mx-6 px-6 overflow-x-auto flex gap-2 pb-2" aria-label="On this page" data-testid="mobile-toc">
    {items.map(([id, label]) => (
      <a key={id} href={`#${id}`} className="shrink-0 border border-ink px-4 py-2 text-sm font-semibold hover:bg-ink hover:text-paper transition-colors">{label}</a>
    ))}
  </nav>
);

export const StickyCta = () => (
  <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-ink" data-testid="sticky-mobile-cta">
    <a href={BIZ.tel} className="bg-paper text-ink py-4 flex items-center justify-center gap-2 font-semibold" data-testid="sticky-call-btn"><Phone size={16} /> Call us</a>
    <a href="#assessment" className="bg-signal text-white py-4 text-center font-semibold" data-testid="sticky-assessment-btn">Free assessment</a>
  </div>
);
