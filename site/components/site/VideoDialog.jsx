"use client";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Shows the real video when `src` is set; otherwise an honest "coming soon" card.
export const VideoDialog = ({ open, onOpenChange, title, src }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-3xl bg-paper border border-ink p-0 rounded-none" data-testid="video-dialog">
      <DialogTitle className="sr-only">{title}</DialogTitle>
      {src ? (
        <div className="aspect-video bg-ink">
          <iframe src={src} title={title} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen />
        </div>
      ) : (
        <div className="p-10">
          <p className="lbl text-signal mb-4">Video coming soon</p>
          <p className="disp text-3xl mb-4">{title}</p>
          <DialogDescription className="text-ink text-[17px] leading-[1.6] mb-8">
            We're filming this one now. In the meantime, the fastest way to see how we work is a 45-minute assessment with a senior engineer.
          </DialogDescription>
          <a href="#assessment" onClick={() => onOpenChange(false)} className="inline-block bg-signal text-white px-6 py-4 font-semibold" data-testid="video-dialog-assessment-btn">
            Book a free security assessment
          </a>
        </div>
      )}
    </DialogContent>
  </Dialog>
);

export const PlayButton = ({ size = "lg" }) => (
  <span className={`${size === "lg" ? "w-24 h-24" : "w-16 h-16"} bg-signal text-white flex items-center justify-center group-hover:scale-110 transition-transform`}>
    <Play size={size === "lg" ? 34 : 24} fill="currentColor" />
  </span>
);
