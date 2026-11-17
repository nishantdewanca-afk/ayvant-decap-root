"use client";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Assessment } from "@/components/site/Assessment";
import { ServiceHero, QuickAnswer } from "@/components/service/ServiceHero";
import { Toc, MobileToc, StickyCta } from "@/components/service/Toc";
import { About, IndustryTabs, Benefits, InlineCta } from "@/components/service/Sections";
import { Included, Process, ServiceReview, ServiceFaq, Related } from "@/components/service/Details";
import { LeadMagnet } from "@/components/service/LeadMagnet";
import { SERVICE_PAGES } from "@/lib/services";
import { useReveal } from "@/hooks/useReveal";
import { ShareBar } from "@/components/site/ShareBar";

const DEFAULT_CTAS = {
  mid: ["Not sure where you stand today?", "In 45 minutes, a senior engineer will show you what's protected, what isn't, and what to fix first."],
  process: ["Ready for step one?", "Pick a time that suits you, or call and talk to a real person today."],
};

const Body = ({ s, cta = s.ctas || DEFAULT_CTAS }) => (
  <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-20">
    <Toc />
    <div className="min-w-0 space-y-24 md:space-y-32">
      <MobileToc />
      <QuickAnswer s={s} />
      <About s={s} />
      <IndustryTabs s={s} />
      <Benefits s={s} />
      <InlineCta testid="cta-mid" title={cta.mid[0]} sub={cta.mid[1]} />
      <Included s={s} />
      {s.leadMagnet && <LeadMagnet m={s.leadMagnet} />}
      <ServiceReview s={s} />
      <Process s={s} />
      <InlineCta testid="cta-process" title={cta.process[0]} sub={cta.process[1]} />
      <ServiceFaq s={s} />
      <ShareBar path={`/services/${s.slug}`} title={s.hero.lines.join(" ").replace(/<[^>]+>/g, "")} description={s.seo.description} eyebrow={s.hero.eyebrow} />
    </div>
  </div>
);

const ServiceContent = ({ s }) => {
  useReveal();
  return (
    <div className="bg-paper text-ink font-body pb-14 lg:pb-0">
      <Header />
      <main>
        <ServiceHero s={s} />
        <Body s={s} />
        <Related s={s} />
        <Assessment n="Next step" />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
};

export default function ServiceView({ slug }) {
  return <ServiceContent s={SERVICE_PAGES[slug]} />;
}
