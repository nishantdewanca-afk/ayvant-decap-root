"use client";
import { useState } from "react";
import { Download, FileText, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Section, RailGrid, RailLabel } from "./primitives";
import { GUIDES } from "@/lib/content";

export const GuideForm = ({ guide, onDone }) => {
  const [f, setF] = useState({ name: "", email: "" });
  const [busy, setBusy] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      // Netlify Forms stores the request (form "guide-request", declared in public/__forms.html).
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "guide-request", ...f, guide: guide.slug }).toString(),
      });
      if (!res.ok) throw new Error("submit failed");
      window.location.href = `/guides/${guide.slug}.pdf`;
      toast.success("Your guide is downloading.");
      onDone();
    } catch {
      toast.error("Something went wrong. Please call us instead.");
    } finally {
      setBusy(false);
    }
  };
  return (
    <form onSubmit={submit} className="grid gap-4" data-testid="guide-form">
      <div><Label className="lbl" htmlFor="g-name">Name</Label><Input id="g-name" required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className="mt-2 border-ink bg-white h-12" data-testid="guide-name-input" /></div>
      <div><Label className="lbl" htmlFor="g-email">Work email</Label><Input id="g-email" type="email" required value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} className="mt-2 border-ink bg-white h-12" data-testid="guide-email-input" /></div>
      <button disabled={busy} className="bg-ink text-white py-4 font-semibold inline-flex items-center justify-center gap-2 hover:bg-signal transition-colors disabled:opacity-60" data-testid="guide-submit-btn">
        {busy ? <Loader2 className="animate-spin" size={18} /> : <Download size={18} />} Download the PDF
      </button>
      <p className="text-xs text-smoke">We'll only use your email to send you this guide and the occasional useful note. No spam. See our <a href="/privacy-policy#notice-at-collection" className="underline">notice at collection</a>.</p>
    </form>
  );
};

export const Downloads = ({ n = "08" }) => {
  const [guide, setGuide] = useState(null);
  return (
    <Section id="guides" className="bg-paper text-ink" testid="downloads-section">
      <RailGrid>
        <RailLabel n={n}>Free guides</RailLabel>
        <div className="min-w-0">
          <h2 className="disp h2-size mb-4 reveal">Take something useful with you.</h2>
          <p className="text-[17px] leading-[1.6] max-w-xl mb-12 reveal">Plain-English guides for partners and practice managers. Read them in ten minutes, use them in your next vendor meeting.</p>
          <div className="grid md:grid-cols-2 gap-0 border border-ink">
            {GUIDES.map((g, i) => (
              <div key={g.slug} className={`reveal p-8 md:p-10 flex flex-col gap-6 ${i === 0 ? "md:border-r border-b md:border-b-0 border-ink" : "bg-sand"}`} data-testid={`guide-card-${g.slug}`}>
                <div className="flex items-start justify-between gap-4">
                  <FileText size={36} strokeWidth={1.5} className="text-signal" />
                  <span className="lbl text-smoke">PDF / Free</span>
                </div>
                <h3 className="disp text-3xl md:text-4xl">{g.title}</h3>
                <p className="text-[17px] leading-[1.6] flex-1">{g.sub}</p>
                <button onClick={() => setGuide(g)} className="self-start inline-flex items-center gap-3 bg-signal text-white px-6 py-4 font-semibold hover:bg-ink transition-colors" data-testid={`guide-open-btn-${g.slug}`}>
                  <Download size={18} /> Get the guide
                </button>
              </div>
            ))}
          </div>
        </div>
      </RailGrid>
      <Dialog open={!!guide} onOpenChange={(o) => !o && setGuide(null)}>
        <DialogContent className="bg-paper border border-ink rounded-none p-8" data-testid="guide-dialog">
          <p className="lbl text-signal">Free guide</p>
          <DialogTitle className="disp text-3xl font-normal">{guide?.title}</DialogTitle>
          <DialogDescription className="text-ink">Tell us where to send it and the download starts right away.</DialogDescription>
          {guide && <GuideForm guide={guide} onDone={() => setGuide(null)} />}
        </DialogContent>
      </Dialog>
    </Section>
  );
};
