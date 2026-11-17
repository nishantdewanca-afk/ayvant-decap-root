"use client";
import { ArrowUpRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { REVIEWS, SERVICES } from "@/lib/content";
import { servicePath } from "@/lib/services";

const H2 = ({ n, children }) => (
  <div className="mb-10 reveal">
    <p className="lbl text-signal mb-3">{n}</p>
    <h2 className="disp h2-size">{children}</h2>
  </div>
);

export const Included = ({ s }) => (
  <section id="included" className="scroll-mt-24" data-testid="service-included">
    <H2 n="What's included">Everything a careful firm needs. Nothing it doesn't.</H2>
    <div className="space-y-12">
      {s.included.map((g) => (
        <div key={g.group} className="grid md:grid-cols-[140px_1fr] gap-6 reveal" data-testid={`included-${g.group.toLowerCase()}`}>
          <h3 className="disp italic text-3xl text-signal">{g.group}</h3>
          <dl className="grid sm:grid-cols-2 gap-x-10 border-t border-ink">
            {g.items.map(([t, d]) => (
              <div key={t} className="border-b border-ink/20 py-5">
                <dt className="font-semibold text-[17px]">{t}</dt>
                <dd className="text-[16px] leading-[1.6] text-ink/75 mt-1">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  </section>
);

export const Process = ({ s }) => (
  <section id="process" className="scroll-mt-24" data-testid="service-process">
    <H2 n="Onboarding and implementation">{s.processTitle || "How we get you protected, step by step."}</H2>
    <ol className="relative border-l border-ink ml-5">
      {s.process.map(([t, d], i) => (
        <li key={t} className="reveal relative pl-12 pb-12 last:pb-0" data-testid={`process-step-${i}`}>
          <span className={`absolute -left-5 top-0 w-10 h-10 flex items-center justify-center disp text-lg ${i === 0 ? "bg-signal text-white" : "bg-paper border border-ink"}`}>{i + 1}</span>
          <h3 className="disp text-[28px] leading-tight">{t}</h3>
          <p className="text-[17px] leading-[1.7] text-ink/80 mt-2 max-w-2xl">{d}</p>
          {i === 0 && <a href="#assessment" className="inline-block mt-4 font-semibold border-b-2 border-signal pb-0.5 hover:text-signal transition-colors" data-testid="process-start-btn">Start with step one</a>}
        </li>
      ))}
    </ol>
  </section>
);

export const ServiceReview = ({ s }) => {
  const r = REVIEWS.find((x) => x.id === s.review);
  if (!r) return null;
  return (
    <figure className="reveal py-4" data-testid="service-review">
      <span className="disp text-signal text-7xl leading-none block h-10" aria-hidden="true">&ldquo;</span>
      <blockquote className="disp text-[26px] md:text-[34px] leading-[1.35] mt-2">{r.quote}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3"><span className="font-semibold">{r.name}</span><span className="lbl text-smoke">{r.firm}</span></figcaption>
    </figure>
  );
};

export const ServiceFaq = ({ s }) => (
  <section id="faq" className="scroll-mt-24" data-testid="service-faq">
    <H2 n="FAQs">{s.faqTitle || `${s.name} questions, answered plainly.`}</H2>
    <Accordion type="multiple" defaultValue={["f0"]} className="border-t border-ink reveal">
      {s.faqs.map(([q, a], i) => (
        <AccordionItem key={q} value={`f${i}`} className="border-b border-ink">
          <AccordionTrigger className="text-left text-lg md:text-xl font-semibold py-6 hover:no-underline hover:text-signal" data-testid={`service-faq-trigger-${i}`}>
            {q}
          </AccordionTrigger>
          <AccordionContent className="text-[17px] leading-[1.75] pb-6 max-w-3xl">{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export const Related = ({ s }) => (
  <section className="bg-sand py-20 md:py-24" data-testid="related-services">
    <div className="max-w-6xl mx-auto px-6">
      <p className="lbl text-smoke mb-3">One team covers it all</p>
      <h2 className="disp h2-size mb-10">Pairs well with {s.name}.</h2>
      <div className="grid md:grid-cols-3 gap-px bg-ink border border-ink">
        {SERVICES.filter((x) => x.id !== s.slug).map((x) => (
          <a key={x.id} href={servicePath(x.id)} className="group bg-paper p-8 hover:bg-white transition-colors" data-testid={`related-${x.id}`}>
            <div className="flex justify-between items-start"><h3 className="disp text-3xl">{x.name}</h3><ArrowUpRight className="group-hover:text-signal group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" /></div>
            <p className="text-[16px] leading-[1.6] text-ink/75 mt-4">{x.line}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);
