"use client";
import { Phone, Mail, MapPin, Clock, Siren, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { GhlEmbed } from "@/components/site/GhlEmbed";
import { BIZ, GHL } from "@/lib/content";

const MAP_Q = encodeURIComponent(`${BIZ.street}, ${BIZ.city}`);

const Card = ({ icon: Icon, label, children, testid }) => (
  <div className="border-b border-ink py-6 grid grid-cols-[28px_1fr] gap-4" data-testid={testid}>
    <Icon size={22} className="text-signal mt-1" />
    <div>
      <p className="lbl text-smoke mb-2">{label}</p>
      {children}
    </div>
  </div>
);

export default function ContactView() {
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main>
        <section className="pt-20 pb-12 md:pt-28 border-b border-ink" data-testid="contact-hero">
          <div className="max-w-6xl mx-auto px-6">
            <p className="lbl text-signal mb-6 fu">Contact</p>
            <h1 className="disp h1-size max-w-4xl"><span className="ln"><span>Talk to a</span></span><span className="ln"><span><em>real person.</em></span></span></h1>
            <p className="fu d-1 text-lg md:text-xl leading-[1.6] mt-8 max-w-2xl">Call, email, send a message or book a time. You&apos;ll hear back from someone on our team, not a ticket robot, usually within one business day.</p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-start">
            <div className="min-w-0 reveal border-t border-ink">
              <Card icon={Phone} label="Call" testid="contact-phone">
                <a href={BIZ.tel} className="disp text-3xl hover:text-signal transition-colors">{BIZ.phone}</a>
                <p className="text-[15px] text-ink/75 mt-1">Clients can reach support 24x7, as set out in their service agreement. New enquiries are answered during office hours.</p>
              </Card>
              <Card icon={Mail} label="Email" testid="contact-email">
                <a href={`mailto:${BIZ.email}`} className="text-xl font-semibold hover:text-signal transition-colors">{BIZ.email}</a>
              </Card>
              <Card icon={MapPin} label="Office" testid="contact-address">
                <address className="not-italic text-[17px] leading-[1.6]">{BIZ.legal}<br />{BIZ.street}<br />{BIZ.city}</address>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_Q}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-sm font-semibold border-b border-signal pb-0.5">Get directions <ArrowRight size={14} /></a>
                <p className="text-[15px] text-ink/75 mt-3">Serving firms across the United States. Visits by appointment.</p>
              </Card>
              <Card icon={Clock} label="Hours (Pacific)" testid="contact-hours">
                <p className="text-[17px]"><strong>Client support: 24x7</strong></p>
                <p className="text-[15px] text-ink/75 mb-4">Coverage depends on your service agreement.</p>
                <p className="lbl text-smoke mb-2">Office, sales and visits</p>
                <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-[17px]">
                  <dt>Monday to Friday</dt><dd>9 AM to 6 PM</dd>
                  <dt>Saturday</dt><dd>9 AM to 1 PM</dd>
                  <dt>Sunday</dt><dd>Closed</dd>
                </dl>
              </Card>
              <Card icon={Siren} label="Emergency" testid="contact-emergency">
                <p className="text-[17px] leading-[1.6]">If you think you&apos;ve been hacked or your systems are down, call <a href={BIZ.tel} className="underline underline-offset-4">{BIZ.phone}</a> any time, day or night.</p>
              </Card>
            </div>

            <div id="contact-form" className="min-w-0 bg-white border border-ink p-6 md:p-8 reveal" data-testid="contact-form-card">
              <Tabs defaultValue="message">
                <TabsList className="grid grid-cols-2 w-full h-auto p-0 bg-transparent border border-ink rounded-none mb-6">
                  <TabsTrigger value="message" className="rounded-none py-3 lbl data-[state=active]:bg-ink data-[state=active]:text-white" data-testid="contact-tab-message">Send a message</TabsTrigger>
                  <TabsTrigger value="book" className="rounded-none py-3 lbl data-[state=active]:bg-ink data-[state=active]:text-white" data-testid="contact-tab-book">Book a time slot</TabsTrigger>
                </TabsList>
                <TabsContent value="message"><GhlEmbed html={GHL.contact} testid="contact-ghl-form" /></TabsContent>
                <TabsContent value="book"><GhlEmbed html={GHL.booking} testid="contact-ghl-booking" /></TabsContent>
              </Tabs>
              <p className="text-xs text-ink/70 mt-4 leading-[1.6]">
                We use what you send to reply and book your call. Please don&apos;t include patient records or client files. See our <a href="/privacy-policy#notice-at-collection" className="underline">notice at collection</a> and <a href="/privacy-policy" className="underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-ink" data-testid="contact-map-section">
          <iframe title="Map to Ayvant in Irvine, CA" className="w-full h-[360px] md:h-[440px] grayscale block" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${MAP_Q}&output=embed`} data-testid="contact-map" />
        </section>

        <section className="bg-signal text-white py-14" data-testid="contact-quiz-band">
          <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
            <p className="disp text-3xl md:text-4xl max-w-2xl">Not ready to talk yet? See where your firm stands in two minutes.</p>
            <a href="/security-check" className="inline-flex items-center gap-3 bg-white text-ink px-6 py-4 font-semibold hover:bg-ink hover:text-white transition-colors" data-testid="contact-quiz-link">Take the security check <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
