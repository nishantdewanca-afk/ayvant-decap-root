"use client";
import { FAQS } from "./faqData";
export { FAQS };
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export const Faq = () => (
  <section id="faq" className="bg-sand text-ink py-24 md:py-32" data-testid="faq-section">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[96px_1fr] lg:grid-cols-[96px_1fr_1.4fr] gap-8 md:gap-12">
      <p className="lbl text-smoke md:pt-3">12 FAQ</p>
      <h2 className="disp h2-size reveal">Questions we hear every week.</h2>
      <Accordion type="single" collapsible className="border-t border-ink md:col-start-2 lg:col-start-auto">
        {FAQS.map(([q, a], i) => (
          <AccordionItem key={q} value={`f${i}`} className="border-b border-ink">
            <AccordionTrigger className="text-left text-lg font-semibold py-5 hover:no-underline hover:text-signal" data-testid={`faq-trigger-${i}`}>{q}</AccordionTrigger>
            <AccordionContent className="text-[17px] leading-[1.7] pb-6">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
