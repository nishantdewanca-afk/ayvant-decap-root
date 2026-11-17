"use client";
import { Linkedin, Facebook, Twitter } from "lucide-react";
import { Logo } from "@/components/site/primitives";
import { Newsletter } from "@/components/site/Newsletter";
import { CookieSettingsButton } from "@/components/consent/PrivacyLinks";
import { BIZ, NAV_SERVICES, INDUSTRIES, AREAS, LEGAL } from "@/lib/ca/content";

const ICONS = { LinkedIn: Linkedin, Facebook, X: Twitter };

const Col = ({ title, children }) => (
  <div>
    <p className="lbl text-signal mb-4">{title}</p>
    <ul className="space-y-2">{children}</ul>
  </div>
);

export const FooterCA = () => (
  <footer id="contact" className="bg-ink text-paper pt-20 pb-10" data-testid="site-footer">
    <div className="max-w-6xl mx-auto px-6">
      <Newsletter />
      <div className="grid sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.3fr] gap-12 text-sm leading-[1.7]">
        <div>
          <Logo light full className="h-16" />
          <p className="lbl text-paper/60 mt-3">{BIZ.brand}</p>
          <p className="mt-4 text-paper/80 max-w-xs">{BIZ.description}</p>
          <div className="flex gap-4 mt-6">
            {BIZ.social.map(([label, url]) => {
              const Icon = ICONS[label];
              return (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${BIZ.brand} on ${label}`} className="border border-paper/30 p-2 hover:bg-signal hover:border-signal transition-colors">
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
        <Col title="Our Services">
          {NAV_SERVICES.map((s) => <li key={s.id}><a href={s.href} className="ul-link">{s.name}</a></li>)}
          <li><a href={BIZ.aboutUrl} className="ul-link">About Us</a></li>
          <li><a href={BIZ.contactUrl} className="ul-link">Contact</a></li>
        </Col>
        <Col title="Service Areas">
          {AREAS.map(([name, url]) => <li key={name}><a href={url} className="ul-link">{name}</a></li>)}
        </Col>
        <Col title="Industries">
          {INDUSTRIES.map((x) => (
            <li key={x.id}>
              <span className="text-paper/60">{x.name}</span>
              <br />
              <a href={x.vancouver} className="ul-link">Vancouver</a> · <a href={x.surrey} className="ul-link">Surrey</a>
            </li>
          ))}
        </Col>
        <Col title="Contact Us">
          {BIZ.offices.map((o) => (
            <li key={o.name} className="pb-2">
              <span className="font-semibold">{o.name}</span>
              <address className="not-italic text-paper/80">{o.street}<br />{o.city}</address>
              <a href={o.tel} className="ul-link">{o.phone}</a>
            </li>
          ))}
          <li><a href={`mailto:${BIZ.email}`} className="ul-link" data-testid="footer-email">{BIZ.email}</a></li>
        </Col>
      </div>
      <div className="mt-16 pt-8 border-t border-paper/20 flex flex-wrap justify-between gap-6 text-xs text-paper/60">
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          <a href="/security-check/" className="ul-link">Security check</a>
          <a href="/learning-hub/" className="ul-link">Learning Hub</a>
          <a href="/learning-hub/rss.xml" className="ul-link" data-testid="footer-rss">RSS</a>
          <a href={BIZ.clientPortal} target="_blank" rel="noopener noreferrer" className="ul-link">Client Portal</a>
        </nav>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 w-full" aria-label="Legal">
          <a href={LEGAL.privacy} className="ul-link" data-testid="footer-privacy">Privacy Policy</a>
          <a href={LEGAL.terms} className="ul-link">Terms of Service</a>
          <a href={LEGAL.cookies} className="ul-link">Cookie Policy</a>
          <a href={LEGAL.accessibility} className="ul-link">Accessibility</a>
          <CookieSettingsButton />
        </nav>
        <p>&copy; {new Date().getFullYear()} {BIZ.legal} All rights reserved.</p>
      </div>
    </div>
  </footer>
);
