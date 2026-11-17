"use client";
import { IS_CA } from "@/lib/site";

// ayvant.ca: the "Ayvant IT · Proudly Canadian" logo, dark text for light backgrounds, light text for dark ones.
const LogoCA = ({ light, className }) => (
  <img src={light ? "/ayvant-ca-logo-light.png" : "/ayvant-ca-logo.png"} alt="Ayvant IT, Proudly Canadian" className={`${className} w-auto`} width="473" height="117" />
);

export const Logo = ({ light = false, full = false, className = "h-9" }) => IS_CA ? <LogoCA light={light} className={className} /> : (
  <img
    src={`/${full ? (light ? "ayvant-logo-light" : "ayvant-logo") : "ayvant-wordmark"}.png`}
    alt="Ayvant Cybersecurity & Managed IT"
    className={`${className} w-auto`}
    width="640"
    height={full ? 259 : 199}
  />
);

export const RailLabel = ({ n, children, dark = false }) => (
  <p className={`lbl ${dark ? "text-paper/60" : "text-smoke"} md:pt-3`}>
    {n} {children}
  </p>
);

export const Section = ({ id, className = "", children, testid }) => (
  <section id={id} data-testid={testid} className={`py-24 md:py-32 ${className}`}>
    <div className="max-w-6xl mx-auto px-6">{children}</div>
  </section>
);

export const RailGrid = ({ children, className = "" }) => (
  <div className={`grid md:grid-cols-[96px_1fr] gap-8 md:gap-12 ${className}`}>{children}</div>
);
