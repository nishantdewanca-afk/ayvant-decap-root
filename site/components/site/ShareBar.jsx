"use client";
import { useState } from "react";
import { Linkedin, Mail, Link2, Check } from "lucide-react";
import { toast } from "sonner";
import { SITE_URL } from "@/lib/site";

// Every page now ships its own share card in the HTML, so the page URL itself is the share link.
export const ShareBar = ({ path, title, description, eyebrow, className = "" }) => {
  const [copied, setCopied] = useState(false);
  const url = `${SITE_URL}${path}`;
  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("Share link copied");
    setTimeout(() => setCopied(false), 2000);
  };
  const btn = "inline-flex items-center gap-2 border border-ink px-4 py-2.5 text-sm font-semibold hover:bg-ink hover:text-paper transition-colors";
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`} data-testid="share-bar">
      <span className="lbl text-smoke mr-1">Share</span>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className={btn} data-testid="share-linkedin"><Linkedin size={15} /> LinkedIn</a>
      <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`} className={btn} data-testid="share-email"><Mail size={15} /> Email</a>
      <button type="button" onClick={copy} className={btn} data-testid="share-copy">{copied ? <Check size={15} /> : <Link2 size={15} />} Copy link</button>
    </div>
  );
};
