"use client";
// ayvant.ca Contact page: the original words, in the ayvant.com design.
import { Phone, Mail, MapPin, Siren, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { GhlEmbed } from "@/components/site/GhlEmbed";
import { BIZ, GHL, LEGAL } from "@/lib/ca/content";
import { useReveal } from "@/hooks/useReveal";

const CITIES = ["Vancouver", "Surrey", "Langley", "Burnaby", "Richmond", "Coquitlam", "Port Moody", "Delta", "Abbotsford", "Chilliwack"];
const EXPECT = ["Response within 1 business day", "No-pressure consultation", "Honest assessment of your needs", "Clear, jargon-free communication", "Customized recommendations"];

const Card = ({ icon: Icon, label, children, testid }) => (
  <div className="border-b border-ink py-6 grid grid-cols-[28px_1fr] gap-4" data-testid={testid}>
    <Icon size={22} className="text-signal mt-1" />
    <div>
      <p className="lbl text-smoke mb-2">{label}</p>
      {children}
    </div>
  </div>
);

export default function ContactCA() {
  useReveal();
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main>
        <section className="pt-20 pb-12 md:pt-28 border-b border-ink" data-testid="contact-hero">
          <div className="max-w-6xl mx-auto px-6">
            <p className="lbl text-signal mb-6 fu">Contact Us</p>
            <h1 className="disp h1-size max-w-4xl"><span className="ln"><span>Let&apos;s Start a</span></span><span className="ln"><span><em>Conversation</em></span></span></h1>
            <p className="fu d-1 text-lg md:text-xl leading-[1.6] mt-8 max-w-2xl">Have questions? Need a quote? Just want to chat about your IT challenges? We&apos;re here to help – no pressure, no obligation.</p>
          </div>
        </section>

        <section className="bg-ink text-paper py-6" data-testid="contact-areas">
          <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="lbl text-signal mr-2">Proudly Serving the Lower Mainland</p>
            {CITIES.map((c, i) => (
              <span key={c} className="flex items-center gap-4 text-[15px]">{c}{i < CITIES.length - 1 && <span className="text-signal" aria-hidden="true">•</span>}</span>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-start">
            <div className="min-w-0 reveal border-t border-ink">
              {BIZ.offices.map((o) => (
                <Card key={o.name} icon={MapPin} label={o.name} testid={`contact-${o.name.split(" ")[0].toLowerCase()}`}>
                  <address className="not-italic text-[17px] leading-[1.6]">{o.street}<br />{o.city}</address>
                  <a href={o.tel} className="inline-block mt-2 disp text-2xl hover:text-signal transition-colors">{o.phone}</a>
                </Card>
              ))}
              <Card icon={Phone} label="Phone" testid="contact-phone">
                <p className="text-[17px] leading-[1.7]">Langley: <a href={BIZ.offices[0].tel} className="font-semibold hover:text-signal">{BIZ.offices[0].phone}</a><br />Surrey: <a href={BIZ.offices[1].tel} className="font-semibold hover:text-signal">{BIZ.offices[1].phone}</a></p>
              </Card>
              <Card icon={Mail} label="Email" testid="contact-email">
                <a href={`mailto:${BIZ.email}`} className="text-xl font-semibold hover:text-signal transition-colors">{BIZ.email}</a>
              </Card>
              <div className="bg-ink text-paper p-8 mt-10" data-testid="contact-emergency">
                <Siren size={24} className="text-signal" />
                <h2 className="disp text-3xl mt-4">Need Immediate Help?</h2>
                <p className="text-[16px] leading-[1.6] text-paper/75 mt-3">For urgent IT issues or security concerns, call our support line directly. We&apos;re available 24/7 for emergencies.</p>
                <a href={BIZ.tel} className="mt-6 inline-flex items-center gap-3 bg-signal text-white px-6 py-4 font-semibold hover:bg-paper hover:text-ink transition-colors" data-testid="contact-emergency-call"><Phone size={18} /> Call {BIZ.phone}</a>
              </div>
              <div className="border border-ink p-8 mt-6" data-testid="contact-expect">
                <h2 className="disp text-3xl">What to Expect</h2>
                <ul className="mt-5 space-y-3">
                  {EXPECT.map((e) => <li key={e} className="grid grid-cols-[24px_1fr] gap-3 text-[17px]"><Check size={20} className="text-signal mt-0.5" />{e}</li>)}
                </ul>
              </div>
            </div>
            <div id="contact-form" className="min-w-0 bg-white border border-ink p-6 md:p-8 reveal scroll-mt-28">
              <h2 className="disp text-4xl">Send Us a Message</h2>
              <p className="text-[16px] text-ink/75 mt-3 mb-6">Fill out the form below and we&apos;ll get back to you within one business day.</p>
              <GhlEmbed html={GHL.contact} testid="ghl-contact-embed" />
              <p className="text-xs text-ink/70 mt-4 leading-[1.6]" data-testid="contact-privacy-note">
                We use what you send to reply to you. See our <a href={LEGAL.notice} className="underline">privacy notice</a> and <a href={LEGAL.privacy} className="underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-ink">
          <iframe title="Ayvant Office Location - Langley" className="w-full h-[420px] grayscale block" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.5!2d-122.6585!3d49.0985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d38e62e1b6f1%3A0x5007e2ec6e0da1b3!2s20627%20Fraser%20Hwy%2C%20Langley%2C%20BC!5e0!3m2!1sen!2sca" data-testid="contact-map" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
