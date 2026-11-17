"use client";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown, ArrowUpRight } from "lucide-react";
import { Logo } from "./primitives";
import { BIZ, SERVICES } from "@/lib/content";
import { servicePath } from "@/lib/services";
import { IS_CA } from "@/lib/site";
import { NAV as NAV_CA } from "@/lib/ca/content";

const LINKS = [
  ["About", "/about"],
  ["Learning Hub", "/learning-hub"],
  ["Contact", "/contact"],
];

const SERVICE_ITEMS = SERVICES.map((s) => ({ id: s.id, name: s.name, line: s.line, href: servicePath(s.id) }));
const INDUSTRY_ITEMS = [
  { id: "law-firms", name: "Law firms", line: "Privileged files, wire fraud defense and remote attorneys.", href: "/industries/law-firms" },
  { id: "medical-dental", name: "Medical & dental", line: "Practice software, imaging and HIPAA safeguards.", href: "/industries/medical-dental" },
  { id: "cpa-finance", name: "CPAs & finance", line: "Tax-season IT and the FTC Safeguards Rule.", href: "/industries/cpa-finance" },
];

const NAV_US = {
  dropdowns: [
    { label: "Services", href: "/#services", testid: "nav-services", cols: 2, items: SERVICE_ITEMS },
    { label: "Industries", href: "/#industries", testid: "nav-industries", cols: 1, items: INDUSTRY_ITEMS },
  ],
  links: LINKS,
  cta: { href: "#assessment", label: "Free assessment", mobileLabel: "Book a free security assessment", menuLabel: "Not sure what you need? Book a free assessment" },
};
const NAV = IS_CA ? NAV_CA : NAV_US;
const ext = (h) => (h.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});
const linkId = (h) => (h.startsWith("http") ? "client-portal" : h.replace(/[/#]/g, ""));

const NavDropdown = ({ label, href, items, testid, cols = 2 }) => (
  <div className="relative group" data-testid={`${testid}-menu`}>
    <a href={href} className="inline-flex items-center gap-1 py-2 group-hover:text-signal group-focus-within:text-signal transition-colors" aria-haspopup="true" data-testid={testid}>
      {label} <ChevronDown size={14} className="group-hover:rotate-180 group-focus-within:rotate-180 transition-transform duration-300" />
    </a>
    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-[opacity,transform,visibility] duration-200">
      <div className={`${cols === 2 ? "w-[560px]" : "w-[340px]"} bg-paper border border-ink shadow-[0_24px_48px_-24px_rgba(20,20,20,0.35)]`} data-testid={`${testid}-dropdown`}>
        <div className={`grid ${cols === 2 ? "grid-cols-2" : "grid-cols-1"} divide-ink/15`}>
          {items.map((it, i) => (
            <a key={it.id} href={it.href} className={`group/item p-6 hover:bg-white transition-colors border-ink/15 ${cols === 2 && i % 2 === 0 ? "border-r" : ""} ${i < items.length - cols ? "border-b" : ""}`} data-testid={`${testid}-item-${it.id}`}>
              <span className="flex items-center justify-between disp text-xl">{it.name}<ArrowUpRight size={16} className="opacity-0 group-hover/item:opacity-100 text-signal transition-opacity" /></span>
              {it.line && <span className="block text-[14px] leading-[1.5] text-ink/70 mt-2">{it.line}</span>}
            </a>
          ))}
        </div>
        <a href={NAV.cta.href} className="flex items-center justify-between gap-4 bg-ink text-paper px-6 py-4 text-sm font-semibold hover:bg-signal transition-colors" data-testid={`${testid}-assessment`}>
          {NAV.cta.menuLabel} <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  </div>
);

const MobileMenu = ({ close }) => (
  <div className="lg:hidden border-t border-ink px-6 py-6 grid gap-4 bg-paper max-h-[calc(100vh-72px)] overflow-y-auto" data-testid="mobile-menu">
    {NAV.dropdowns.map(({ label, items }) => (
      <div key={label} className="grid gap-3">
        <p className="lbl text-smoke">{label}</p>
        <div className="grid gap-3 pl-4 border-l-2 border-signal">
          {items.map((it) => (
            <a key={it.id} href={it.href} onClick={close} className="disp text-2xl" data-testid={`mobile-nav-item-${it.id}`}>{it.name}</a>
          ))}
        </div>
      </div>
    ))}
    {NAV.links.map(([l, h]) => (
      <a key={h} href={h} onClick={close} className="disp text-3xl" data-testid={`mobile-nav-${linkId(h)}`} {...ext(h)}>{l}</a>
    ))}
    <a href={BIZ.tel} className="inline-flex items-center gap-2 text-xl font-semibold" data-testid="mobile-call-link"><Phone size={20} className="text-signal" /> {BIZ.phone}</a>
    <a href={NAV.cta.href} onClick={close} className="bg-signal text-white px-4 py-3 font-semibold text-center" data-testid="mobile-assessment-btn">{NAV.cta.mobileLabel}</a>
  </div>
);

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-paper text-ink border-b border-ink" data-testid="site-header">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4" aria-label="Main">
        <a href="/" className="flex items-center gap-2" data-testid="header-logo-link">
          <Logo className="h-8 md:h-9" />
        </a>
        <div className="hidden lg:flex items-center gap-7 text-sm">
          {NAV.dropdowns.map((d) => (
            <NavDropdown key={d.label} label={d.label} href={d.href} items={d.items} testid={d.testid} cols={d.cols} />
          ))}
          {NAV.links.map(([l, h]) => (
            <a key={h} href={h} className="ul-link" data-testid={`nav-${linkId(h)}`} {...ext(h)}>{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href={BIZ.tel} className="inline-flex items-center gap-2 text-[15px] sm:text-base font-semibold whitespace-nowrap hover:text-signal transition-colors" aria-label={`Call ${BIZ.phone}`} data-testid="header-call-link">
            <Phone size={18} className="text-signal shrink-0" /> <span className="max-[359px]:sr-only">{BIZ.phone}</span>
          </a>
          <a href={NAV.cta.href} className="hidden md:inline-block bg-signal text-white px-4 py-2.5 text-sm font-semibold hover:bg-ink transition-colors" data-testid="header-assessment-btn">
            {NAV.cta.label}
          </a>
          <button className="lg:hidden p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} data-testid="mobile-menu-toggle">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && <MobileMenu close={() => setOpen(false)} />}
    </header>
  );
};
