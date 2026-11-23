"use client";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { GhlEmbed } from "@/components/site/GhlEmbed";
import { GHL, LEGAL } from "@/lib/ca/content";

const KEY = "ayvant-exit-popup-shown";

// The free dark web scan offer, shown once per visit when the pointer leaves the top of the window.
export default function ExitPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let shown = false;
    try { shown = sessionStorage.getItem(KEY) === "true"; } catch {}
    if (shown) return;
    const onLeave = (e) => {
      if (e.clientY > 0 || document.querySelector("[data-testid=consent-banner]")) return;
      setOpen(true);
      try { sessionStorage.setItem(KEY, "true"); } catch {}
      document.removeEventListener("mouseout", onLeave);
    };
    const t = setTimeout(() => document.addEventListener("mouseout", onLeave), 4000);
    return () => { clearTimeout(t); document.removeEventListener("mouseout", onLeave); };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-paper border border-ink rounded-none p-0 max-w-xl max-h-[92vh] overflow-y-auto" data-testid="exit-popup">
        <div className="bg-ink text-paper p-8">
          <p className="lbl text-signal mb-3">Wait! Before You Go...</p>
          <DialogTitle className="disp text-4xl font-normal leading-[1.05]">Is Your Data on the Dark Web?</DialogTitle>
        </div>
        <div className="p-8">
          <p className="text-xl font-semibold">Get Your FREE Dark Web Scan</p>
          <DialogDescription className="text-ink/80 leading-[1.6] mt-3">
            Cybercriminals trade stolen business data on the dark web every day. Your company&apos;s passwords, client information, and financial data could be exposed right now – and you wouldn&apos;t even know it.
          </DialogDescription>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-sm font-semibold">
            {["No Strings Attached", "No Obligation", "Results in 48 Hours"].map((x) => (
              <span key={x} className="inline-flex items-center gap-1.5"><Check size={16} className="text-signal" /> {x}</span>
            ))}
          </div>
          <p className="border-l-2 border-signal pl-4 mt-6 text-[15px] leading-[1.6]">
            <strong className="text-signal">Perfect for Law Firms &amp; Accountants:</strong> Your clients trust you with their most sensitive information. Find out if that trust has been compromised.
          </p>
          <div className="mt-6">{open && <GhlEmbed html={GHL.darkWeb} testid="exit-popup-form" />}</div>
          <p className="text-xs text-ink/60 mt-3">See our <a href={LEGAL.privacy} className="underline">Privacy Policy</a>.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
