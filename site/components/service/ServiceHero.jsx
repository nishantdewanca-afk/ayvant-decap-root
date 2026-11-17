"use client";
import { ArrowRight, Phone, Check } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { BIZ } from "@/lib/content";

export const ServiceHero = ({ s, crumb = ["Services", "/#services"] }) => (
  <section className="bg-paper text-ink pt-10 pb-20 md:pb-28 border-b border-ink" data-testid="service-hero">
    <div className="max-w-6xl mx-auto px-6">
      <Breadcrumb className="mb-14 fu">
        <BreadcrumbList className="lbl text-smoke">
          <BreadcrumbItem><BreadcrumbLink href="/" className="hover:text-signal" data-testid="breadcrumb-home">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink href={crumb[1]} className="hover:text-signal" data-testid="breadcrumb-section">{crumb[0]}</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage className="text-ink">{s.name}</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-end">
        <div className="min-w-0">
          <p className="lbl text-signal mb-6 fu">{s.hero.eyebrow}</p>
          <h1 className="disp h1-size" data-testid="service-headline">
            {s.hero.lines.map((l) => (
              <span key={l} className="ln"><span dangerouslySetInnerHTML={{ __html: l }} /></span>
            ))}
          </h1>
          <p className="fu d-1 text-lg md:text-xl leading-[1.6] mt-8 max-w-2xl" data-testid="service-subcopy">{s.hero.sub}</p>
          <div className="fu d-2 flex flex-wrap gap-4 mt-10">
            <a href="#assessment" className="group inline-flex items-center gap-3 bg-signal text-white px-6 py-4 font-semibold hover:bg-ink transition-colors" data-testid="service-hero-assessment-btn">
              Book a free security assessment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={BIZ.tel} className="inline-flex items-center gap-3 border border-ink px-6 py-4 font-semibold hover:bg-ink hover:text-paper transition-colors" data-testid="service-hero-call-btn">
              <Phone size={18} /> Call {BIZ.phone}
            </a>
          </div>
        </div>
        <ul className="fu d-3 border-t border-ink lg:border-t-0 lg:border-l lg:pl-8 pt-6 lg:pt-0 grid gap-4" data-testid="service-hero-facts">
          {s.hero.facts.map((f) => (
            <li key={f} className="flex items-center gap-3 text-[17px]"><Check size={18} className="text-signal shrink-0" /> {f}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export const QuickAnswer = ({ s }) => (
  <section id="what-it-is" className="scroll-mt-24 reveal" data-testid="quick-answer">
    <div className="border-l-4 border-signal bg-white/70 p-8 md:p-10">
      <p className="lbl text-signal mb-3">Quick answer</p>
      <h2 className="disp text-3xl md:text-4xl mb-4">{s.answer.q}</h2>
      <p className="text-[18px] leading-[1.75]">{s.answer.a}</p>
    </div>
  </section>
);
