"use client";
// ayvant.ca AI Governance service page. Written to answer the questions BC firms ask (and that search and AI
// answer engines pull from): a direct definition up top, plain-English sections, and an FAQ marked up as FAQPage.
import { ArrowRight, Check, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BIZ } from "@/lib/ca/content";
import { CtaCA } from "./HomeCA";
import { useReveal } from "@/hooks/useReveal";
import { AI_FAQS } from "@/lib/ca/aiGovernance";


const RISKS = [
  ["Shadow AI", "Staff use free AI tools on their own, so client and patient information leaves your control without anyone knowing."],
  ["Confidentiality and privacy", "Prompts can be stored outside Canada, reviewed by the vendor or used for training. That can breach PIPA and professional duties."],
  ["Wrong answers", "AI can invent facts, case law and figures. If nobody checks, the mistake goes out under your name."],
  ["No paper trail", "Clients, insurers and regulators increasingly ask how you use AI. Without a policy and records, you can't show them."],
];

const WHAT = [
  ["AI usage assessment", "Find out which AI tools are in use across your firm today, including the ones nobody approved, and where sensitive data is exposed."],
  ["Approved tools and safe settings", "Choose business-grade tools (such as Microsoft 365 Copilot or ChatGPT Enterprise) and set them up so your data isn't used for training and stays protected."],
  ["AI acceptable use policy", "A short, plain-English policy for your staff: what's allowed, what's not, and when a person must check the output."],
  ["Data protection controls", "Sensitivity labels, data loss prevention and access controls that stop confidential files from reaching AI tools that shouldn't see them."],
  ["Vendor risk reviews", "Before a new AI tool goes in, we check where it stores data, who can see it, and what its contract says."],
  ["Staff training", "Practical sessions for lawyers, accountants, clinicians and admin staff on using AI well and safely."],
  ["Ongoing monitoring", "We watch for new AI tools and risky use, and review your policy and controls with you every quarter."],
];

const STEPS = [
  ["Discover", "We review which AI tools are being used, by whom, and with what data."],
  ["Decide", "Together we choose approved tools and write your AI policy."],
  ["Protect", "We put the technical controls in place and train your team."],
  ["Monitor", "We keep watch, report back, and update the rules as AI and the law change."],
];

const WHO = [
  ["Law firms", "Keep privileged and confidential client information out of public AI tools, and meet your Law Society duties of competence and confidentiality."],
  ["Accountants and bookkeepers", "Protect client financial records and tax information while using AI to speed up research, drafting and reconciliation."],
  ["Healthcare practices", "Keep patient information out of tools that aren't built for it, and use AI for admin work without putting privacy at risk."],
];

const Sec = ({ label, title, children, className = "", id }) => (
  <section id={id} className={`py-20 md:py-28 border-t border-ink ${className}`}>
    <div className="max-w-6xl mx-auto px-6">
      <div className="reveal mb-12 max-w-3xl">
        <p className="lbl text-signal mb-3">{label}</p>
        <h2 className="disp h2-size">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

export default function AiGovernanceCA() {
  useReveal();
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main>
        <section className="pt-20 pb-20 md:pt-28 md:pb-24" data-testid="aig-hero">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
            <div className="min-w-0">
              <p className="lbl text-signal mb-6 fu">AI Governance · Vancouver &amp; the Lower Mainland</p>
              <h1 className="disp h1-size"><span className="ln"><span>Use AI at work,</span></span><span className="ln"><span><em>without the risk.</em></span></span></h1>
              <p className="fu d-1 text-lg md:text-xl leading-[1.6] mt-8 max-w-2xl">AI governance for law firms, accountants and healthcare practices in BC. We find out how your team already uses AI, set clear rules, and put the controls in place so client and patient information stays protected under BC privacy law.</p>
              <div className="fu d-2 flex flex-wrap gap-4 mt-10">
                <a href="/pages/contact/#contact-form" className="group inline-flex items-center gap-3 bg-signal text-white px-6 py-4 font-semibold hover:bg-ink transition-colors" data-testid="aig-hero-cta">Get a Free AI Usage Assessment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></a>
                <a href={BIZ.tel} className="inline-flex items-center gap-3 border border-ink px-6 py-4 font-semibold hover:bg-ink hover:text-paper transition-colors"><Phone size={18} /> Call {BIZ.phone}</a>
              </div>
            </div>
            <aside className="fu d-2 bg-white border border-ink p-6 md:p-8" data-testid="aig-answer">
              <p className="lbl text-signal mb-3">In short</p>
              <p className="text-[17px] leading-[1.65]"><strong>AI governance</strong> is the rules, controls and habits that decide how your firm uses AI: which tools staff may use, what information can go into them, who checks the output, and how you prove it.</p>
            </aside>
          </div>
        </section>

        <Sec label="Why it matters" title="Your team is probably using AI already. Is anyone in charge of it?" className="bg-sand">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12">
            <div className="reveal space-y-5 text-[18px] leading-[1.7]">
              <p>Canada has no AI-specific law in force. The federal Artificial Intelligence and Data Act died in 2025, and the national AI strategy released in June 2026 doesn&apos;t bring it back. That doesn&apos;t leave AI unregulated: the rules you already follow apply the moment someone types client or patient information into an AI tool.</p>
              <p>In BC, that means the <strong>Personal Information Protection Act (PIPA)</strong>, and <strong>PIPEDA</strong> when information crosses provincial or national borders. Canada&apos;s privacy commissioners have published principles for using generative AI responsibly, and the <strong>Law Society of BC</strong> has issued guidance on generative AI and professional responsibility. A proposed federal privacy law, Bill C-36, would add transparency duties for automated decisions.</p>
              <p>AI governance makes sure you can use these tools with confidence, and show clients, insurers and regulators that you do.</p>
            </div>
            <div className="grid sm:grid-cols-2 border-t border-l border-ink self-start">
              {RISKS.map(([t, d], i) => (
                <div key={t} className="reveal border-r border-b border-ink p-6 bg-paper" style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
                  <p className="disp italic text-signal text-2xl mb-2">0{i + 1}</p>
                  <h3 className="font-semibold text-lg">{t}</h3>
                  <p className="text-[15px] leading-[1.6] text-ink/75 mt-2">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </Sec>

        <Sec label="What we do" title="AI governance, done for you.">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink">
            {WHAT.map(([t, d], i) => (
              <div key={t} className="reveal border-r border-b border-ink p-8" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <h3 className="disp text-2xl">{t}</h3>
                <p className="text-[16px] leading-[1.65] text-ink/80 mt-3">{d}</p>
              </div>
            ))}
            <div className="reveal border-r border-b border-ink p-8 bg-ink text-paper">
              <p className="lbl text-signal mb-3">Frameworks</p>
              <p className="text-[16px] leading-[1.65]">Built on the <strong>NIST AI Risk Management Framework</strong> and in line with <strong>ISO/IEC 42001</strong>, scaled to a 10- to 200-person firm.</p>
            </div>
          </div>
        </Sec>

        <Sec label="How it works" title="Four steps, one team." className="bg-ink text-paper !border-t-0">
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="reveal pt-8 pr-6 border-t border-paper/40 relative" style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="absolute -top-[7px] left-0 w-3 h-3 bg-signal" />
                <p className="disp italic text-signal text-3xl">0{i + 1}</p>
                <h3 className="disp text-3xl mt-3">{t}</h3>
                <p className="text-[16px] leading-[1.6] text-paper/75 mt-2">{d}</p>
              </li>
            ))}
          </ol>
        </Sec>

        <Sec label="Who it's for" title="Firms trusted with private information.">
          <div className="grid md:grid-cols-3 gap-6">
            {WHO.map(([t, d]) => (
              <div key={t} className="reveal border border-ink p-8 bg-white">
                <h3 className="disp text-3xl">{t}</h3>
                <p className="text-[16px] leading-[1.65] text-ink/80 mt-3">{d}</p>
              </div>
            ))}
          </div>
          <ul className="mt-10 grid sm:grid-cols-2 gap-3 max-w-3xl">
            {["Plain English, no tech jargon", "Local team in Langley and Surrey", "Works with Microsoft 365 and the tools you already use", "Policy, controls and training in one engagement"].map((x) => (
              <li key={x} className="grid grid-cols-[24px_1fr] gap-3 text-[17px]"><Check size={20} className="text-signal mt-0.5" />{x}</li>
            ))}
          </ul>
        </Sec>

        <Sec label="Questions" title="AI governance, answered." id="faq" className="bg-sand">
          <div className="border-t border-ink max-w-4xl" data-testid="aig-faq">
            {AI_FAQS.map(([q, a]) => (
              <details key={q} className="group border-b border-ink py-6">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="text-xl font-semibold">{q}</h3>
                  <span className="disp text-3xl leading-none text-signal transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="text-[17px] leading-[1.7] text-ink/80 mt-4 max-w-3xl">{a}</p>
              </details>
            ))}
          </div>
        </Sec>

        <CtaCA
          title="Find out how your team is using AI."
          sub="Get a free AI usage assessment: which AI tools your staff use, what data is at risk, and what to fix first. Plain English, no obligation."
          primary={["Get Your Free Assessment", "/pages/contact/#contact-form"]}
          testid="aig-cta"
        />
      </main>
      <Footer />
    </div>
  );
}
