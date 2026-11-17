"use client";
import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { GuideForm } from "@/components/site/Downloads";

export const LeadMagnet = ({ m }) => {
  const [open, setOpen] = useState(false);
  return (
    <aside className="reveal border border-ink bg-white grid md:grid-cols-[auto_1fr_auto] gap-8 items-center p-8 md:p-10" data-testid="lead-magnet">
      <div className="w-20 h-24 border border-ink bg-paper relative flex items-center justify-center -rotate-3 shadow-[6px_6px_0_#cd1312]" aria-hidden="true">
        <FileText size={32} strokeWidth={1.5} />
      </div>
      <div>
        <p className="lbl text-signal mb-2">Free download / PDF</p>
        <p className="disp text-3xl md:text-4xl leading-tight">{m.title}</p>
        <p className="text-[17px] leading-[1.6] text-ink/75 mt-3 max-w-xl">{m.sub}</p>
      </div>
      <button onClick={() => setOpen(true)} className="inline-flex items-center gap-3 bg-signal text-white px-6 py-4 font-semibold hover:bg-ink transition-colors justify-self-start" data-testid="lead-magnet-open-btn">
        <Download size={18} /> Get the template
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-paper border border-ink rounded-none p-8" data-testid="lead-magnet-dialog">
          <p className="lbl text-signal">Free template</p>
          <DialogTitle className="disp text-3xl font-normal">{m.title}</DialogTitle>
          <DialogDescription className="text-ink">Tell us where to send it and the download starts right away.</DialogDescription>
          <GuideForm guide={{ slug: m.slug }} onDone={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </aside>
  );
};
