"use client";
import { ArrowRight, Phone, Linkedin, MapPin, Clock } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reviews } from "@/components/site/Reviews";
import { Assessment } from "@/components/site/Assessment";
import { BIZ, TEAM, STAFF } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";

export const TIMELINE = [
  ["1985", "Founded in San Jose", "Where the Ayvant story begins."],
  ["1986", "A first in New Delhi", "One of the first companies in New Delhi, India to bring in a commercial copier."],
  ["1987", "Computers for business and government", "Started supporting government entities and the public sector with their IT needs, and was one of the first companies to bring computers to businesses."],
  ["1991 / 1992", "A 16KB start", "Sean, now our CTO and co-founder, sits at a computer with 16KB of memory."],
  ["2000", "Into education", "Started supporting the education sector: schools, universities and other academies."],
  ["2020", "We became Ayvant", "A new name for the same commitment: dependable technology for firms that handle sensitive information."],
  ["Today", "Irvine, CA. All 50 states.", "AI governance, cybersecurity, managed IT and compliance for law, medical, dental and financial firms nationwide."],
];

const HOW = [
  ["We know your rules", "HIPAA, client confidentiality and the FTC Safeguards Rule are part of how we set up your systems, not an afterthought."],
  ["A real person answers", "When you call, you reach someone on our team who knows your office. Fast, every time."],
  ["AI, handled safely", "We help you use AI at work with clear rules and controls, before it becomes a risk."],
  ["One team for everything", "IT support, security and compliance under one roof, so nothing falls between vendors."],
];

const Hero = () => (
  <section className="bg-paper pt-20 pb-20 md:pt-28 md:pb-28 border-b border-ink" data-testid="about-hero">
    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.25fr_1fr] gap-14 items-center">
      <div className="min-w-0">
        <p className="lbl text-signal mb-6 fu">About Ayvant</p>
        <h1 className="disp h1-size h1-tight"><span className="ln"><span>Four decades of</span></span><span className="ln"><span>looking after firms</span></span><span className="ln"><span>that <em>keep secrets.</em></span></span></h1>
        <p className="fu d-1 text-lg md:text-xl leading-[1.6] mt-8 max-w-xl">We started in San Jose in 1985 and became Ayvant in 2020. Today we work from Irvine, California with law offices, medical and dental practices, CPAs and financial firms across the United States.</p>
        <div className="fu d-2 flex flex-wrap gap-4 mt-10">
          <a href="#assessment" className="group inline-flex items-center gap-3 bg-signal text-white px-6 py-4 font-semibold hover:bg-ink transition-colors" data-testid="about-hero-assessment-btn">Book a free security assessment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></a>
          <a href={BIZ.tel} className="inline-flex items-center gap-3 border border-ink px-6 py-4 font-semibold hover:bg-ink hover:text-paper transition-colors" data-testid="about-hero-call-btn"><Phone size={18} /> Call {BIZ.phone}</a>
        </div>
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
        <p className="lbl text-signal mb-3">Our story</p>
        <h2 className="disp h2-size">The tools changed. The kind of client didn't.</h2>
      </div>
      <div className="space-y-6 text-[18px] leading-[1.75] reveal">
        <p>We started in San Jose in 1985, back when "IT support" meant a person with a toolbox and a stack of floppy disks. The tools have changed many times since. What hasn't changed is the kind of client we're best at helping: small and mid-sized firms that are trusted with other people's private information.</p>
        <p>In 2020 we became Ayvant, and today we work from Irvine, California with law offices, medical and dental practices, CPAs, accountants and investment firms across the United States. Our job is to make your technology dependable, your data hard to steal, and your compliance easy to prove.</p>
        <p>24x7 support for clients, based on their service agreement, and an office team for everything else.</p>
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

const How = () => (
  <section className="bg-sand py-24 md:py-32" data-testid="about-how">
    <div className="max-w-6xl mx-auto px-6">
      <p className="lbl text-signal mb-3 reveal">How we work</p>
      <h2 className="disp h2-size mb-12 reveal">Why firms stay with us.</h2>
      <div className="grid md:grid-cols-2 border-t border-l border-ink">
        {HOW.map(([t, d], i) => (
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
        <div><p className="lbl text-signal mb-3">Our team</p><h2 className="disp h2-size">The people you'll actually talk to.</h2></div>
        <p className="text-[17px] leading-[1.6] max-w-md">No offshore queue, no faceless ticket portal. When you call Ayvant, you reach the team below and the engineers who work with them.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {[...TEAM, ...STAFF].map((m, i) => (
          <div key={m.name} className="group reveal" style={{ transitionDelay: `${i * 90}ms` }} data-testid={`about-team-${i}`}>
            <figure className="aspect-[4/5] bg-slot overflow-hidden border border-ink">
              {m.img ? (
                <img src={m.img} alt={`${m.name}, ${m.role} at Ayvant`} className="img-duo w-full h-full object-cover" loading="lazy" />
              ) : (
                <div role="img" aria-label={`${m.name}, ${m.role} at Ayvant`} className="w-full h-full flex items-center justify-center bg-sand">
                  <span className="disp text-7xl text-ink/70">{m.name.split(" ").map((w) => w[0]).join("")}</span>
                </div>
              )}
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

const Visit = () => (
  <section className="border-t border-ink" data-testid="about-visit">
    <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
      <div className="reveal">
        <p className="lbl text-signal mb-3">Visit us</p>
        <h2 className="disp h2-size">Irvine, California.</h2>
        <p className="mt-6 flex gap-3 text-[17px]"><MapPin className="text-signal shrink-0" size={20} />{BIZ.street}, {BIZ.city}</p>
        <p className="mt-3 flex gap-3 text-[17px]"><Clock className="text-signal shrink-0" size={20} />24x7 client support, per service agreement. Office: Mon-Fri 9 AM-6 PM, Sat 9 AM-1 PM</p>
        <a href={BIZ.tel} className="mt-8 inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 font-semibold hover:bg-signal transition-colors" data-testid="about-visit-call"><Phone size={18} /> {BIZ.phone}</a>
      </div>
      <iframe title="Map to Ayvant in Irvine, CA" className="w-full aspect-[16/10] border border-ink grayscale" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=2372+Morse+Ave+%23241,+Irvine,+CA+92614&output=embed" data-testid="about-map" />
    </div>
  </section>
);

export default function AboutView() {
  useReveal();
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main>
        <Hero />
        <Story />
        <How />
        <Team />
        <Reviews />
        <Visit />
        <Assessment n="Let's talk" />
      </main>
      <Footer />
    </div>
  );
}
