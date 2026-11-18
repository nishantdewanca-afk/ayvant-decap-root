"use client";
import { useEffect } from "react";
import { GHL } from "@/lib/ca/content";

// GoHighLevel chat bubble, desktop only (as on the original ayvant.ca), loaded after the page is idle.
export default function ChatWidget() {
  useEffect(() => {
    if (window.innerWidth < 768 || document.querySelector("script[data-widget-id]")) return;
    const t = setTimeout(() => {
      const s = document.createElement("script");
      s.src = "https://beta.leadconnectorhq.com/loader.js";
      s.defer = true;
      s.setAttribute("data-resources-url", "https://beta.leadconnectorhq.com/chat-widget/loader.js");
      s.setAttribute("data-widget-id", GHL.chatWidgetId);
      document.body.appendChild(s);
    }, 2500);
    return () => clearTimeout(t);
  }, []);
  return null;
}
