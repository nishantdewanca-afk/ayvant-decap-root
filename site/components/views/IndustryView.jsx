"use client";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Assessment } from "@/components/site/Assessment";
import { ServiceHero, QuickAnswer } from "@/components/service/ServiceHero";
import { Toc, MobileToc, StickyCta } from "@/components/service/Toc";
import { InlineCta } from "@/components/service/Sections";
import { ServiceReview, ServiceFaq } from "@/components/service/Details";
import { Challenges, Rules, ServiceMap, OtherIndustries } from "@/components/industry/Sections";
import { INDUSTRY_PAGES } from "@/lib/industries";
import { useReveal } from "@/hooks/useReveal";
import { ShareBar } from "@/components/site/ShareBar";

const ITEMS = [
  ["what-it-is", "Quick answer"],
  ["challenges", "What we hear"],
  ["rules", "Rules you work under"],
  ["services", "How we help"],
  ["faq", "FAQs"],
];

const IndustryContent = ({ s }) => {
  useReveal();
  return (
    <div className="bg-paper text-ink font-body pb-14 lg:pb-0">
      <Header />
      <main>
        <ServiceHero s={s} crumb={["Industries", "/#industries"]} />
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-20">
          <Toc items={ITEMS} />
          <div className="min-w-0 space-y-24 md:space-y-32">
            <MobileToc items={ITEMS} />
            <QuickAnswer s={s} />
            <Challenges s={s} />
            <Rules s={s} />
            <InlineCta testid="cta-mid" title="Want to know where your firm stands?" sub="In 45 minutes, a senior engineer will walk through your setup and tell you plainly what to fix first." />
            <ServiceMap s={s} />
            <ServiceReview s={s} />
            <ServiceFaq s={{ ...s, faqTitle: `Questions from ${s.phrase}, answered.` }} />
            <ShareBar path={`/industries/${s.slug}`} title={s.hero.lines.join(" ").replace(/<[^>]+>/g, "")} description={s.seo.description} eyebrow={s.hero.eyebrow} />
            <InlineCta testid="cta-end" title="Talk to someone who knows your world." sub="Pick a time that suits you, or call and talk to a real person today." />
          </div>
        </div>
        <OtherIndustries s={s} />
        <Assessment n="Next step" />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
};

export default function IndustryView({ slug }) {
  return <IndustryContent s={INDUSTRY_PAGES[slug]} />;
}
