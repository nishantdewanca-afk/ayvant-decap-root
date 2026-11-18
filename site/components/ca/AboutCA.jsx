"use client";
// ayvant.ca About page: the original words, the ayvant.com design, the real team and the Ayvant timeline.
import { Check, Linkedin, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TIMELINE as US_TIMELINE } from "@/components/views/AboutView";
import { BIZ, TEAM, STAFF } from "@/lib/ca/content";
import { CtaCA } from "./HomeCA";
import { useReveal } from "@/hooks/useReveal";

// Same story as ayvant.com; only the last stop is the BC offices.
const TIMELINE = [
  ...US_TIMELINE.slice(0, -1),
  ["Today", "Langley & Surrey, BC", "IT support and cybersecurity for law firms, accountants, and professional service businesses across Vancouver and the Lower Mainland."],
];

const VALUES = [
  ["Human-First Approach", "We believe technology should serve people, not the other way around. We explain things in plain English, respect your time, and treat you like a partner – not just a client."],
  ["Security Without Compromise", "Your data protection isn't negotiable. We implement robust security measures that protect your clients' sensitive information without making your life harder."],
  ["Local Expertise", "We're not a faceless national company. We're based right here in Langley, and we understand the unique needs of Vancouver and Lower Mainland businesses."],
  ["Responsive & Reliable", "When you have a problem, you need answers now – not tomorrow. Our team responds quickly because we know your business depends on it."],
];

const DIFFERENT = [
  "No long-term contracts required",
  "Local team, not overseas call centers",
  "Plain English, no tech jargon",
  "Proactive monitoring included",
  "Flat-rate pricing, no surprises",
  "Fast response times guaranteed",
];

const CITIES = ["Vancouver", "Surrey", "Burnaby", "Richmond", "Langley", "Coquitlam"];

const Hero = () => (
  <section className="bg-paper pt-20 pb-20 md:pt-28 md:pb-28 border-b border-ink" data-testid="about-hero">
    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.25fr_1fr] gap-14 items-center">
      <div className="min-w-0">
        <p className="lbl text-signal mb-6 fu">About Ayvant</p>
        <h1 className="disp h1-size h1-tight"><span className="ln"><span>Real People.</span></span><span className="ln"><span><em>Real Support.</em></span></span></h1>
        <p className="fu d-1 text-lg md:text-xl leading-[1.6] mt-8 max-w-xl">We&apos;re not your typical IT company. We&apos;re a team of real people who genuinely care about helping local businesses stay secure and productive. Based in Langley, serving Vancouver and the Lower Mainland with the kind of IT support you actually want to call.</p>
      </div>
      <figure className="gr bg-white p-3 pb-5 border border-ink/15 shadow-[0_24px_48px_-24px_rgba(20,20,20,0.5)] rotate-[1.5deg] hover:rotate-0 transition-transform duration-700 max-w-md justify-self-center" data-testid="about-hero-photo">
        <img src="/sean-1991.jpg" alt="Sean Dewan as a child around 1991, at a computer with 16KB of memory" className="w-full h-auto" width="1346" height="1168" />
        <figcaption className="mt-4 px-1"><span className="lbl text-signal">Circa 1991 / 1992</span><span className="block disp italic text-xl mt-1">Sean, now our CTO and co-founder, at a computer with 16KB of memory.</span></figcaption>
      </figure>
    </div>
  </section>
);

const Story = () => (
  <section id="story" className="py-24 md:py-32" data-testid="about-story">
    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-14">
      <div className="reveal">
        <p className="lbl text-signal mb-3">Our Story</p>
        <h2 className="disp h2-size">Why We Started Ayvant</h2>
      </div>
      <div className="space-y-6 text-[18px] leading-[1.75] reveal">
        <p>We&apos;ve all been there – stuck on hold with IT support, listening to someone read from a script who clearly doesn&apos;t understand (or care about) your actual problem. We started Ayvant because we believed there had to be a better way.</p>
        <p>Our founders spent years working in IT for large corporations before realizing that small and medium-sized businesses deserved the same level of expertise and attention – but with a personal touch.</p>
        <p>Today, we&apos;re proud to serve dozens of law firms, accounting practices, and professional service businesses across Vancouver and the Lower Mainland. We&apos;ve built our reputation on doing what we say we&apos;ll do, explaining things clearly, and being there when you need us.</p>
      </div>
    </div>
    <ol className="max-w-6xl mx-auto px-6 mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10" data-testid="about-timeline">
      {TIMELINE.map(([y, t, d], i) => (
        <li key={y} className="reveal pt-8 pr-6 pb-4 relative border-t border-ink" style={{ transitionDelay: `${i * 90}ms` }} data-testid={`timeline-${i}`}>
          <span className={`absolute -top-[7px] left-0 w-3 h-3 ${i === TIMELINE.length - 1 ? "bg-signal" : "bg-ink"}`} />
          <p className="disp text-4xl md:text-5xl">{y}</p>
          <h3 className="font-semibold text-lg mt-4">{t}</h3>
          <p className="text-[16px] leading-[1.6] text-ink/75 mt-2">{d}</p>
        </li>
      ))}
    </ol>
  </section>
);

const Values = () => (
  <section className="bg-sand py-24 md:py-32" data-testid="about-values">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-6 mb-12 items-end reveal">
        <div><p className="lbl text-signal mb-3">Our Values</p><h2 className="disp h2-size">What We Stand For</h2></div>
        <p className="text-[17px] leading-[1.6] max-w-md">These aren&apos;t just words on a wall – they&apos;re the principles that guide every interaction we have with our clients.</p>
      </div>
      <div className="grid md:grid-cols-2 border-t border-l border-ink">
        {VALUES.map(([t, d], i) => (
          <div key={t} className="reveal border-r border-b border-ink p-8 md:p-10" style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
            <p className="disp italic text-signal text-2xl mb-3">0{i + 1}</p>
            <h3 className="disp text-3xl">{t}</h3>
            <p className="text-[17px] leading-[1.65] text-ink/80 mt-3">{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="team" className="py-24 md:py-32" data-testid="about-team">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-6 mb-12 items-end reveal">
        <div><p className="lbl text-signal mb-3">Our Team</p><h2 className="disp h2-size">The People Behind Ayvant</h2></div>
        <p className="text-[17px] leading-[1.6] max-w-md">We&apos;re a small but mighty team of IT professionals who genuinely love what we do. When you work with Ayvant, you work with real people who know your name.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[...TEAM, ...STAFF].map((m, i) => (
          <div key={m.name} className="group reveal" style={{ transitionDelay: `${i * 90}ms` }} data-testid={`about-team-${i}`}>
            <figure className="aspect-[4/5] bg-slot overflow-hidden border border-ink">
              <img src={m.img} alt={`${m.name}, ${m.role} at Ayvant`} className="img-duo w-full h-full object-cover" loading="lazy" />
            </figure>
            <p className="disp text-2xl mt-4">{m.name}</p>
            <div className="flex items-center justify-between gap-2 mt-1">
              <p className="lbl text-smoke">{m.role}</p>
              <a href={m.li} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="hover:text-signal" data-testid={`about-team-linkedin-${i}`}><Linkedin size={16} /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Location = () => (
  <section className="bg-ink text-paper" data-testid="about-location">
    <div className="max-w-6xl mx-auto px-6 py-24 md:py-28 grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
      <div className="reveal">
        <p className="lbl text-signal mb-3">Our Location</p>
        <h2 className="disp h2-size">Proudly Serving the Lower Mainland</h2>
        <p className="mt-6 text-[17px] leading-[1.65] text-paper/75">Based in Langley, British Columbia, we serve businesses throughout Vancouver, Surrey, Burnaby, Richmond, and the entire Lower Mainland region. We&apos;re local, we&apos;re accessible, and we&apos;re always just a phone call away.</p>
        <p className="mt-8 lbl text-paper/60">Serving Vancouver &amp; Lower Mainland from Langley, BC</p>
        <p className="mt-4 flex gap-3 text-[17px]"><MapPin className="text-signal shrink-0" size={20} /><span><strong>Office:</strong> {BIZ.street}, {BIZ.city}</span></p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {CITIES.map((c) => <li key={c} className="border border-paper/30 px-3 py-1.5 text-sm">{c}</li>)}
        </ul>
        <a href={BIZ.tel} className="mt-8 inline-flex items-center gap-3 bg-signal text-white px-6 py-4 font-semibold hover:bg-paper hover:text-ink transition-colors" data-testid="about-location-call"><Phone size={18} /> {BIZ.phone}</a>
      </div>
      <iframe title="Map of Langley, BC" className="w-full aspect-[16/10] border border-paper/30 grayscale" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83359.92089458045!2d-122.6912!3d49.1044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d38e62e1b6f1%3A0x5007e2ec6e0da1b3!2sLangley%2C%20BC!5e0!3m2!1sen!2sca" data-testid="about-map" />
    </div>
  </section>
);

const Different = () => (
  <section className="py-24 md:py-32" data-testid="about-different">
    <div className="max-w-6xl mx-auto px-6">
      <div className="reveal mb-12"><p className="lbl text-signal mb-3">Why Ayvant?</p><h2 className="disp h2-size">What Makes Us Different</h2></div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink">
        {DIFFERENT.map((d, i) => (
          <li key={d} className="reveal border-r border-b border-ink p-6 md:p-8 grid grid-cols-[28px_1fr] gap-3 text-[18px] font-semibold" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
            <Check size={22} className="text-signal mt-0.5" />{d}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default function AboutCA() {
  useReveal();
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main>
        <Hero />
        <Story />
        <Values />
        <Team />
        <Location />
        <Different />
        <CtaCA
          title="Ready to Work with a Team That Actually Cares?"
          sub="Let's have a conversation about your IT needs. No pressure, no jargon – just honest advice from people who want to see your business succeed."
          primary={["Get in Touch", "/pages/contact/"]}
          secondary={["View Our Services", "/pages/cybersecurity/"]}
        />
      </main>
      <Footer />
    </div>
  );
}
