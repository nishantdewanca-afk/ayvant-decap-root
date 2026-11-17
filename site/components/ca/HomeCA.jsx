"use client";
// ayvant.ca home page: the original site's words, in the ayvant.com design.
import { ArrowRight, Phone, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section, RailGrid, RailLabel } from "@/components/site/primitives";
import { PostCard } from "@/components/blog/PostCard";
import { BIZ, SERVICES } from "@/lib/ca/content";
import { useReveal } from "@/hooks/useReveal";

const WHY = [
  ["Industry Expertise", "We know the software you use – Clio, PCLaw, QuickBooks, TaxCycle – and the compliance requirements you need to meet."],
  ["Responsive Support", "When you call, you get a real person who knows your business. No overseas call centers, no endless hold times."],
  ["Local Presence", "Based in Langley, we serve the entire Lower Mainland. When you need on-site support, we're there."],
];

const PROMISE = [
  "Same-day response to critical issues",
  "Predictable monthly pricing – no surprises",
  "Proactive monitoring to catch issues early",
  "Quarterly technology reviews",
  "Plain-English explanations – no tech jargon",
];

const Shield = () => (
  <div className="persp gr" aria-hidden="true">
    <svg viewBox="0 0 400 400" className="tilt w-full max-w-[280px] mx-auto">
      <g className="spin" fill="none" stroke="#141414" strokeWidth="2">
        <circle cx="200" cy="200" r="180" strokeDasharray="4 10" />
        <circle cx="200" cy="200" r="130" />
      </g>
      <path className="dr" pathLength="1" d="M200 60 L320 110 V210 C320 290 260 330 200 350 C140 330 80 290 80 210 V110 Z" fill="none" stroke="#141414" strokeWidth="6" />
      <rect x="165" y="190" width="70" height="60" fill="#141414" />
      <path d="M175 190 V165 a25 25 0 0 1 50 0 V190" fill="none" stroke="#141414" strokeWidth="8" />
      <circle cx="200" cy="218" r="8" fill="#cd1312" />
    </svg>
  </div>
);

const Hero = () => (
  <section className="bg-paper text-ink pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden" data-testid="hero-section">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[96px_1fr] lg:grid-cols-[96px_1fr_280px] gap-10 items-center">
      <div className="lbl hidden md:block [writing-mode:vertical-rl] rotate-180 text-smoke">Langley, BC / Vancouver &amp; Lower Mainland</div>
      <div className="min-w-0">
        <p className="lbl text-signal mb-6 fu">Trusted by Law Firms &amp; Accounting Practices</p>
        <h1 className="disp h1-size" data-testid="hero-headline">
          <span className="ln"><span>Your Business Deserves</span></span>
          <span className="ln"><span><em>Rock-Solid</em> IT Security</span></span>
        </h1>
        <p className="fu d-1 text-lg md:text-xl leading-[1.6] mt-8 max-w-xl" data-testid="hero-subcopy">
          We help law firms, accountants, and professional service businesses in Vancouver and the Lower Mainland stay secure, compliant, and running smoothly. Because you have better things to worry about than IT.
        </p>
        <div className="fu d-2 flex flex-wrap gap-4 mt-12">
          <a href="/pages/contact/" className="group inline-flex items-center gap-3 bg-signal text-white px-6 py-4 font-semibold hover:bg-ink transition-colors" data-testid="hero-assessment-btn">
            Get Your Free Security Assessment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/pages/cybersecurity/" className="inline-flex items-center gap-3 border border-ink px-6 py-4 font-semibold hover:bg-ink hover:text-paper transition-colors" data-testid="hero-services-btn">
            Our Services
          </a>
        </div>
        <a href="/security-check/" className="fu d-3 inline-flex items-center gap-2 mt-6 font-semibold border-b-2 border-signal pb-1 hover:text-signal transition-colors" data-testid="hero-quiz-link">
          Or take the 2-minute &ldquo;How protected is your firm?&rdquo; check <ArrowRight size={16} />
        </a>
      </div>
      <div className="hidden lg:block"><Shield /></div>
    </div>
  </section>
);

const Services = () => (
  <Section id="services" className="bg-paper text-ink border-t border-ink" testid="services-section">
    <RailGrid>
      <RailLabel n="01">What We Do</RailLabel>
      <div className="min-w-0">
        <div className="grid md:grid-cols-2 gap-6 mb-12 items-end reveal">
          <h2 className="disp h2-size">Comprehensive IT Solutions</h2>
          <p className="text-[17px] leading-[1.6] max-w-md">From protecting your data to keeping your systems running, we provide everything your business needs to thrive in today&apos;s digital world.</p>
        </div>
        <div className="grid md:grid-cols-3 border-t border-l border-ink">
          {SERVICES.map((s, i) => (
            <a key={s.id} href={s.href} className={`group reveal border-r border-b border-ink p-8 flex flex-col hover:bg-ink hover:text-paper transition-colors ${i === 0 ? "bg-white" : ""}`} style={{ transitionDelay: `${i * 90}ms` }} data-testid={`service-card-${s.id}`}>
              <p className="disp italic text-signal text-2xl mb-6">0{i + 1}</p>
              <h3 className="disp text-3xl">{s.name}</h3>
              <p className="text-[16px] leading-[1.65] mt-3 opacity-80 flex-1">{s.line}</p>
              <span className="inline-flex items-center gap-2 mt-8 font-semibold text-sm">Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
            </a>
          ))}
        </div>
      </div>
    </RailGrid>
  </Section>
);

const Why = () => (
  <Section id="why" className="bg-ink text-paper" testid="why-section">
    <RailGrid>
      <RailLabel n="02" dark>Why Choose Us</RailLabel>
      <div className="min-w-0 grid lg:grid-cols-[1.2fr_1fr] gap-14 items-start">
        <div className="reveal">
          <h2 className="disp h2-size">IT Support That Understands Your Business</h2>
          <p className="text-[18px] leading-[1.65] text-paper/75 mt-6">We&apos;re not just another IT company. We specialize in serving law firms and accounting practices because we understand the unique challenges you face – from compliance requirements to client confidentiality.</p>
          <ol className="mt-10 border-t border-paper/25">
            {WHY.map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[48px_1fr] gap-4 py-6 border-b border-paper/25">
                <span className="disp italic text-signal text-2xl">0{i + 1}</span>
                <div><h3 className="font-semibold text-lg">{t}</h3><p className="text-[16px] leading-[1.6] text-paper/70 mt-1">{d}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <div className="reveal border border-paper/30 p-8 md:p-10" data-testid="promise-card">
          <p className="lbl text-signal mb-4">Our Promise</p>
          <h3 className="disp text-3xl">What You Can Expect</h3>
          <ul className="mt-8 space-y-4">
            {PROMISE.map((p) => (
              <li key={p} className="grid grid-cols-[24px_1fr] gap-3 text-[17px] leading-[1.5] text-paper/85"><Check size={20} className="text-signal mt-0.5" />{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </RailGrid>
  </Section>
);

const Blog = ({ posts }) =>
  posts.length > 0 && (
    <Section id="blog" className="bg-paper text-ink" testid="learning-hub-section">
      <RailGrid>
        <RailLabel n="03">From Our Blog</RailLabel>
        <div className="min-w-0">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 reveal">
            <div className="max-w-2xl">
              <h2 className="disp h2-size">Latest IT &amp; Security Insights</h2>
              <p className="text-[17px] leading-[1.6] mt-4">Expert advice on protecting your business, optimizing your technology, and staying ahead of cyber threats.</p>
            </div>
            <a href="/blog/" className="inline-flex items-center gap-2 font-semibold border-b-2 border-signal pb-1 hover:text-signal transition-colors" data-testid="hub-all-link">
              View All Articles <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((p, i) => <PostCard key={p.slug} p={p} i={i} testid={`hub-article-${i}`} />)}
          </div>
        </div>
      </RailGrid>
    </Section>
  );

export const CtaCA = ({ title, sub, primary = ["Get Your Free Assessment", "/pages/contact/"], secondary, testid = "cta-band" }) => (
  <section className="bg-signal text-white py-20 md:py-24" data-testid={testid}>
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-10 items-center reveal">
      <div>
        <h2 className="disp h2-size">{title}</h2>
        <p className="text-[18px] leading-[1.6] mt-4 max-w-xl text-white/90">{sub}</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <a href={primary[1]} className="group inline-flex items-center gap-3 bg-white text-ink px-6 py-4 font-semibold hover:bg-ink hover:text-white transition-colors" data-testid={`${testid}-primary`}>
          {primary[0]} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        {secondary ? (
          <a href={secondary[1]} className="inline-flex items-center gap-3 border border-white px-6 py-4 font-semibold hover:bg-white hover:text-ink transition-colors" data-testid={`${testid}-secondary`}>{secondary[0]}</a>
        ) : (
          <a href={BIZ.tel} className="inline-flex items-center gap-3 border border-white px-6 py-4 font-semibold hover:bg-white hover:text-ink transition-colors" data-testid={`${testid}-call`}>
            <Phone size={18} /> Call {BIZ.phone}
          </a>
        )}
      </div>
    </div>
  </section>
);

export default function HomeCA({ posts }) {
  useReveal();
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Why />
        <Blog posts={posts} />
        <CtaCA title="Ready to Stop Worrying About IT?" sub="Let's have a conversation about your IT needs. No pressure, no jargon – just honest advice from people who care about your business." />
      </main>
      <Footer />
    </div>
  );
}
