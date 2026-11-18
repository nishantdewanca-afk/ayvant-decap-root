"use client";
import { Logo } from "./primitives";
import { Newsletter } from "./Newsletter";
import { BIZ, SERVICES, INDUSTRIES } from "@/lib/content";
import { servicePath } from "@/lib/services";
import { CookieSettingsButton } from "@/components/consent/PrivacyLinks";
import { IS_CA } from "@/lib/site";
import { FooterCA } from "@/components/ca/FooterCA";

export const Footer = () => (IS_CA ? <FooterCA /> : <FooterUS />);

const FooterUS = () => (
  <footer id="contact" className="bg-ink text-paper pt-20 pb-10" data-testid="site-footer">
    <div className="max-w-6xl mx-auto px-6">
      <Newsletter />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm leading-[1.7]">
        <div>
          <Logo light full className="h-16" />
          <p className="lbl text-paper/60 mt-3">{BIZ.legal}</p>
          <p className="mt-4 text-paper/80 max-w-xs">Managed IT, cybersecurity, compliance and AI governance for law, medical, dental and financial firms. Since 1985.</p>
        </div>
        <div>
          <p className="lbl text-signal mb-4">Visit</p>
          <address className="not-italic" data-testid="footer-address">{BIZ.street}<br />{BIZ.city}<br />Serving the entire United States</address>
        </div>
        <div>
          <p className="lbl text-signal mb-4">Hours</p>
          <p data-testid="footer-hours"><strong>Client support 24x7</strong><br /><span className="text-paper/60 text-sm">per your service agreement</span><br /><br />Office: Mon-Fri 9 AM-6 PM<br />Sat 9 AM-1 PM, Sun closed</p>
        </div>
        <div>
          <p className="lbl text-signal mb-4">Talk to a person</p>
          <a href={BIZ.tel} className="block disp text-2xl hover:text-signal transition-colors" data-testid="footer-phone">{BIZ.phone}</a>
          <a href={`mailto:${BIZ.email}`} className="ul-link" data-testid="footer-email">{BIZ.email}</a>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-paper/20 flex flex-wrap justify-between gap-6 text-xs text-paper/60">
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {SERVICES.map((s) => <a key={s.id} href={servicePath(s.id)} className="ul-link">{s.name}</a>)}
          {INDUSTRIES.map((x) => <a key={x.slug} href={`/industries/${x.slug}`} className="ul-link">{x.name}</a>)}
          <a href={BIZ.aboutUrl} className="ul-link">About</a>
          <a href="/contact" className="ul-link">Contact</a>
          <a href="/security-check" className="ul-link">Security check</a>
          <a href="/learning-hub" className="ul-link">Learning Hub</a>
          <a href="/learning-hub/rss.xml" className="ul-link" data-testid="footer-rss">RSS</a>
        </nav>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 w-full" aria-label="Legal">
          <a href="/privacy-policy" className="ul-link" data-testid="footer-privacy">Privacy Policy</a>
          <a href="/cookie-policy" className="ul-link">Cookie Policy</a>
          <a href="/terms-of-use" className="ul-link">Terms of Use</a>
          <a href="/accessibility" className="ul-link">Accessibility</a>
          <CookieSettingsButton />
          <a href="/privacy-choices" className="ul-link" data-testid="footer-do-not-sell">Do Not Sell or Share My Personal Information</a>
        </nav>
        <p>&copy; {new Date().getFullYear()} {BIZ.legal}. Irvine, California.</p>
      </div>
    </div>
  </footer>
);
