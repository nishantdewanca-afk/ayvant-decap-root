"use client";
import { Phone, Mail } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GhlEmbed } from "./GhlEmbed";
import { BIZ, GHL, LEGAL } from "@/lib/content";
import { IS_CA } from "@/lib/site";

const STEPS = [
  "We look at email security, backups, devices and who has access to what.",
  "We check how AI tools are being used, and where client data could leak.",
  "You get a short, plain-English list of what to fix first. Yours to keep.",
];

export const Assessment = (props) => (IS_CA ? <AssessmentCA {...props} /> : <AssessmentUS {...props} />);

const AssessmentUS = ({ n = "10" }) => (
  <section id="assessment" className="bg-signal text-white py-24 md:py-32" data-testid="assessment-section">
    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.15fr] gap-12">
      <div className="min-w-0 reveal">
        <p className="lbl text-white/80 mb-4">{n} Free security assessment</p>
        <h2 className="disp h2-size">Know exactly where you stand.</h2>
        <p className="text-[18px] leading-[1.6] mt-6 max-w-md">A free, 45-minute security assessment with a senior engineer. No sales script, no obligation.</p>
        <ol className="mt-10 space-y-5">
          {STEPS.map((s, i) => (
            <li key={s} className="grid grid-cols-[40px_1fr] gap-3 text-[17px] leading-[1.6]"><span className="disp text-2xl">0{i + 1}</span>{s}</li>
          ))}
        </ol>
        <div className="mt-12 grid gap-3">
          <a href={BIZ.tel} className="inline-flex items-center gap-3 border border-white px-6 py-4 font-semibold self-start hover:bg-white hover:text-ink transition-colors" data-testid="assessment-call-btn">
            <Phone size={18} /> Call {BIZ.phone}
          </a>
          <a href={`mailto:${BIZ.email}`} className="inline-flex items-center gap-2 ul-link self-start" data-testid="assessment-email-link"><Mail size={16} /> {BIZ.email}</a>
        </div>
      </div>
      <div className="bg-paper text-ink p-6 md:p-8 border border-ink reveal">
        <Tabs defaultValue="book">
          <TabsList className="grid grid-cols-2 w-full h-auto p-0 bg-transparent border border-ink rounded-none mb-6">
            <TabsTrigger value="book" className="rounded-none py-3 lbl data-[state=active]:bg-ink data-[state=active]:text-white" data-testid="tab-book">Book a time slot</TabsTrigger>
            <TabsTrigger value="message" className="rounded-none py-3 lbl data-[state=active]:bg-ink data-[state=active]:text-white" data-testid="tab-message">Send a message</TabsTrigger>
          </TabsList>
          <TabsContent value="book"><GhlEmbed html={GHL.booking} testid="ghl-booking-embed" /></TabsContent>
          <TabsContent value="message"><GhlEmbed html={GHL.contact} testid="ghl-contact-embed" /></TabsContent>
        </Tabs>
          <p className="text-xs text-ink/70 mt-4 leading-[1.6]" data-testid="assessment-privacy-note">
            We use what you send to reply and book your call. See our <a href={LEGAL.notice} className="underline">notice at collection</a> and <a href={LEGAL.privacy} className="underline">Privacy Policy</a>.
          </p>
      </div>
    </div>
  </section>
);

// ayvant.ca: the contact form (ayvant.ca has no booking calendar), with the original site's call to action.
const AssessmentCA = ({ n = "" }) => (
  <section id="assessment" className="bg-signal text-white py-24 md:py-32" data-testid="assessment-section">
    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.15fr] gap-12">
      <div className="min-w-0 reveal">
        <p className="lbl text-white/80 mb-4">{n ? `${n} ` : ""}Free security assessment</p>
        <h2 className="disp h2-size">Ready to Stop Worrying About IT?</h2>
        <p className="text-[18px] leading-[1.6] mt-6 max-w-md">Let&apos;s have a conversation about your IT needs. No pressure, no jargon – just honest advice from people who care about your business.</p>
        <div className="mt-12 grid gap-3">
          {BIZ.offices.map((o) => (
            <a key={o.tel} href={o.tel} className="inline-flex items-center gap-3 border border-white px-6 py-4 font-semibold self-start hover:bg-white hover:text-ink transition-colors" data-testid="assessment-call-btn">
              <Phone size={18} /> {o.name.replace(" Office", "")}: {o.phone}
            </a>
          ))}
          <a href={`mailto:${BIZ.email}`} className="inline-flex items-center gap-2 ul-link self-start" data-testid="assessment-email-link"><Mail size={16} /> {BIZ.email}</a>
        </div>
      </div>
      <div className="bg-paper text-ink p-6 md:p-8 border border-ink reveal">
        <p className="disp text-3xl mb-2">Send Us a Message</p>
        <p className="text-[15px] text-ink/75 mb-6">Fill out the form below and we&apos;ll get back to you within one business day.</p>
        <GhlEmbed html={GHL.contact} testid="ghl-contact-embed" />
        <p className="text-xs text-ink/70 mt-4 leading-[1.6]" data-testid="assessment-privacy-note">
          We use what you send to reply to you. See our <a href={LEGAL.notice} className="underline">privacy notice</a> and <a href={LEGAL.privacy} className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  </section>
);
