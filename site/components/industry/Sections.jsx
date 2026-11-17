"use client";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { servicePath } from "@/lib/services";
import { INDUSTRY_PAGES } from "@/lib/industries";

const H2 = ({ n, children }) => (
  <div className="mb-10 reveal">
    <p className="lbl text-signal mb-3">{n}</p>
    <h2 className="disp h2-size">{children}</h2>
  </div>
);

export const Challenges = ({ s }) => (
  <section id="challenges" className="scroll-mt-24" data-testid="industry-challenges">
    <H2 n="What we hear">The problems that keep {s.phrase} up at night.</H2>
    <ol className="grid sm:grid-cols-2 gap-x-10">
      {s.challenges.map(([t, d], i) => (
        <li key={t} className="reveal border-t border-ink py-8" style={{ transitionDelay: `${(i % 2) * 90}ms` }} data-testid={`challenge-${i}`}>
          <p className="disp italic text-signal text-2xl mb-2">0{i + 1}</p>
          <h3 className="disp text-[28px] leading-tight">{t}</h3>
          <p className="text-[17px] leading-[1.65] text-ink/80 mt-3">{d}</p>
        </li>
      ))}
    </ol>
  </section>
);

export const Rules = ({ s }) => (
  <section id="rules" className="scroll-mt-24" data-testid="industry-rules">
    <H2 n="The rules you work under">What regulators, clients and insurers expect.</H2>
    <dl className="reveal bg-ink text-paper divide-y divide-paper/15">
      {s.rules.map(([t, d]) => (
        <div key={t} className="grid md:grid-cols-[260px_1fr] gap-2 md:gap-8 p-6 md:p-8">
          <dt className="disp text-2xl">{t}</dt>
          <dd className="text-[17px] leading-[1.6] text-paper/80">{d}</dd>
        </div>
      ))}
    </dl>
    <p className="text-sm text-smoke mt-4">Summaries for orientation only, not legal advice. Your attorney or compliance advisor confirms how each rule applies to you.</p>
  </section>
);

export const ServiceMap = ({ s }) => (
  <section id="services" className="scroll-mt-24" data-testid="industry-services">
    <H2 n="How we help">Four services. One team. Built for {s.phrase}.</H2>
    <div className="grid sm:grid-cols-2 gap-px bg-ink border border-ink">
      {SERVICES.map((x, i) => (
        <a key={x.id} href={servicePath(x.id)} className="reveal group bg-paper p-8 hover:bg-white transition-colors" style={{ transitionDelay: `${(i % 2) * 90}ms` }} data-testid={`industry-service-${x.id}`}>
          <div className="flex justify-between items-start gap-4">
            <h3 className="disp text-3xl">{x.name}</h3>
            <ArrowUpRight className="shrink-0 group-hover:text-signal group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
          </div>
          <p className="text-[17px] leading-[1.6] text-ink/80 mt-4">{s.services[x.id]}</p>
          <span className="inline-block mt-6 text-sm font-semibold border-b border-signal pb-0.5">Explore {x.name}</span>
        </a>
      ))}
    </div>
  </section>
);

export const OtherIndustries = ({ s }) => (
  <section className="bg-sand py-20 md:py-24" data-testid="other-industries">
    <div className="max-w-6xl mx-auto px-6">
      <p className="lbl text-smoke mb-3">Other industries we serve</p>
      <h2 className="disp h2-size mb-10">Firms that keep secrets.</h2>
      <div className="grid md:grid-cols-2 gap-px bg-ink border border-ink">
        {Object.values(INDUSTRY_PAGES).filter((x) => x.slug !== s.slug).map((x) => (
          <a key={x.slug} href={`/industries/${x.slug}`} className="group bg-paper p-8 hover:bg-white transition-colors" data-testid={`other-industry-${x.slug}`}>
            <div className="flex justify-between items-start"><h3 className="disp text-3xl">{x.name}</h3><ArrowUpRight className="group-hover:text-signal transition-colors" /></div>
            <p className="text-[16px] leading-[1.6] text-ink/75 mt-4">{x.hero.sub.split(". ")[0]}.</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);
