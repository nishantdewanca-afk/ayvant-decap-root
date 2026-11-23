"use client";
import { useEffect, useRef } from "react";

// Renders a GoHighLevel iframe/script snippet and runs any <script> tags it contains.
export const GhlEmbed = ({ html, testid }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    el.innerHTML = html;
    el.querySelectorAll("script").forEach((old) => {
      const s = document.createElement("script");
      [...old.attributes].forEach((a) => s.setAttribute(a.name, a.value));
      s.text = old.text;
      old.replaceWith(s);
    });
    el.querySelectorAll("iframe").forEach((f) => { f.style.width = "100%"; f.style.border = "0"; });
  }, [html]);
  return <div ref={ref} className="w-full min-h-[200px]" data-testid={testid} />;
};
