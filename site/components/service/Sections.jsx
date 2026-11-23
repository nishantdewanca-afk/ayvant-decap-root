"use client";
import { Check, ArrowRight, Phone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BIZ } from "@/lib/content";

const H2 = ({ n, children }) => (
  <div className="mb-10 reveal">
    <p className="lbl text-signal mb-3">{n}</p>
    <h2 className="disp h2-size">{children}</h2>
  </div>
);

export const About = ({ s }) => (
  <section id="about" className="scroll-mt-24" data-testid="service-about">
    <H2 n="Why it matters">{s.about.title}</H2>
    <div className="grid md:grid-cols-[1fr_0.8fr] gap-10 items-start">
      <div className="space-y-5 text-[18px] leading-[1.75] reveal">{s.about.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}</div>
      <figure className="group reveal aspect-[4/5] overflow-hidden border border-ink bg-slot">
        <img src={s.about.img} alt={s.about.alt} className="img-duo w-full h-full object-cover" loading="lazy" />
      </figure>
    </div>
  </section>
);

export const IndustryTabs = ({ s }) => (
  <section id="industries" className="scroll-mt-24" data-testid="service-industries">
    <H2 n="For your industry">{s.industriesTitle || "Same threats. Different rules."}</H2>
    <Tabs defaultValue={s.industries[0].id} className="reveal">
      <TabsList className="w-full grid grid-cols-3 h-auto p-0 bg-transparent rounded-none border-b border-ink">
        {s.industries.map((ind) => (
          <TabsTrigger key={ind.id} value={ind.id} className="rounded-none py-4 text-[15px] md:text-base font-semibold text-smoke border-b-2 border-transparent -mb-px data-[state=active]:border-signal data-[state=active]:text-ink data-[state=active]:bg-transparent data-[state=active]:shadow-none" data-testid={`industry-tab-${ind.id}`}>
            {ind.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {s.industries.map((ind) => (
        <TabsContent key={ind.id} value={ind.id} className="pt-10" data-testid={`industry-panel-${ind.id}`}>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10">
            <div>
              <h3 className="disp text-3xl md:text-4xl mb-5">{ind.title}</h3>
              <p className="text-[18px] leading-[1.75]">{ind.body}</p>
            </div>
            <ul className="bg-sand p-8 space-y-4 self-start">
              {ind.points.map((p) => <li key={p} className="flex gap-3 text-[17px] leading-[1.5]"><Check size={20} className="text-signal shrink-0 mt-0.5" />{p}</li>)}
            </ul>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  </section>
);

export const Benefits = ({ s }) => (
  <section id="benefits" className="scroll-mt-24" data-testid="service-benefits">
    <H2 n="Value and benefits">What changes when we're on it.</H2>
    <div className="grid sm:grid-cols-2 border-t border-l border-ink">
      {s.benefits.map(([t, d], i) => (
        <div key={t} className="reveal border-r border-b border-ink p-8 hover:bg-white transition-colors" style={{ transitionDelay: `${(i % 2) * 90}ms` }} data-testid={`benefit-${i}`}>
          <p className="lbl text-signal mb-4">0{i + 1}</p>
          <h3 className="disp text-[28px] leading-tight mb-3">{t}</h3>
          <p className="text-[17px] leading-[1.65] text-ink/80">{d}</p>
        </div>
      ))}
    </div>
  </section>
);

export const InlineCta = ({ title, sub, testid }) => (
  <aside className="reveal bg-ink text-paper p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center" data-testid={testid}>
    <div>
      <p className="disp text-3xl md:text-4xl leading-tight">{title}</p>
      <p className="text-paper/70 mt-3 text-[17px] leading-[1.6] max-w-lg">{sub}</p>
    </div>
    <div className="flex flex-wrap gap-3">
      <a href="#assessment" className="group inline-flex items-center gap-2 bg-signal text-white px-5 py-3.5 font-semibold hover:bg-paper hover:text-ink transition-colors" data-testid={`${testid}-assessment-btn`}>
        Book a time <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </a>
      <a href={BIZ.tel} className="inline-flex items-center gap-2 border border-paper/50 px-5 py-3.5 font-semibold hover:bg-paper hover:text-ink transition-colors" data-testid={`${testid}-call-btn`}>
        <Phone size={16} /> Call
      </a>
    </div>
  </aside>
);
