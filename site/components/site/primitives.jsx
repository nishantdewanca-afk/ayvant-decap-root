"use client";
export const Logo = ({ light = false, full = false, className = "h-9" }) => (
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
