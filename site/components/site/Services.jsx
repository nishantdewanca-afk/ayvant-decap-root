"use client";
import { Section, RailGrid, RailLabel } from "./primitives";
import { ArrowRight } from "lucide-react";
import { SERVICES, INDUSTRIES } from "@/lib/content";
import { SERVICE_PAGES } from "@/lib/services";

export const Services = () => (
  <Section id="services" className="bg-paper text-ink border-t border-ink" testid="services-section">
    <RailGrid>
      <RailLabel n="09">Services</RailLabel>
      <div className="min-w-0">
        <h2 className="disp h2-size mb-12 reveal">One team. Four jobs done right.</h2>
        <ol className="divide-y divide-ink border-y border-ink">
          {SERVICES.map((s, i) => (
            <li key={s.id} id={s.id} className="reveal group grid md:grid-cols-[220px_1fr_1fr] gap-4 md:gap-8 py-8 items-baseline hover:bg-sand transition-colors md:px-4" data-testid={`service-${s.id}`}>
              <div>
                <h3 className="disp text-3xl flex items-baseline gap-3"><span className="lbl text-signal">0{i + 1}</span>{s.name}</h3>
                {SERVICE_PAGES[s.id] && (
                  <a href={`/services/${s.id}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold border-b border-signal pb-0.5 hover:text-signal transition-colors" data-testid={`service-link-${s.id}`}>
                    Explore {s.name} <ArrowRight size={14} />
                  </a>
                )}
              </div>
              <p className="text-[17px] leading-[1.6]">{s.line}</p>
              <ul className="text-[15px] leading-[1.6] text-smoke space-y-1">
                {s.points.map((p) => <li key={p} className="before:content-['/'] before:text-signal before:mr-2">{p}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </RailGrid>
  </Section>
);

export const Industries = () => (
  <Section id="industries" className="bg-paper text-ink pt-0 md:pt-0" testid="industries-section">
    <h2 className="disp h2-size mb-12 reveal">Built for firms that keep secrets.</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {INDUSTRIES.map((ind, i) => (
        <a key={ind.name} href={`/industries/${ind.slug}`} className={`group block reveal ${i === 1 ? "md:mt-12" : ""}`} style={{ transitionDelay: `${i * 90}ms` }} data-testid={`industry-${i}`}>
          <figure className="relative aspect-[3/4] bg-slot overflow-hidden border border-ink">
            <img src={ind.img} alt={ind.alt} className="img-duo absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <figcaption className="absolute left-0 bottom-0 bg-paper px-4 py-2 lbl">{ind.cap}</figcaption>
          </figure>
          <h3 className="disp text-3xl mt-5 group-hover:text-signal transition-colors">{ind.name}</h3>
          <p className="text-[16px] leading-[1.6] mt-2 text-ink/80">{ind.copy}</p>
          <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold border-b border-signal pb-0.5 group-hover:text-signal transition-colors">See how we help <ArrowRight size={14} /></span>
        </a>
      ))}
    </div>
  </Section>
);
