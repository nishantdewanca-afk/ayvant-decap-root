"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { LEGAL } from "@/lib/content";
import { IS_CA } from "@/lib/site";
import { readConsent, saveConsent, gpcOn, OPEN_EVENT, CHANGE_EVENT, META_PIXEL_ID, GA_ID, TRACKING_CONFIGURED } from "@/lib/consent";

// ---------- loaders: run only after consent ----------

function loadMetaPixel() {
  if (!META_PIXEL_ID || window.fbq) return;
  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
    t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */
  window.fbq("set", "autoConfig", false, META_PIXEL_ID); // no automatic collection of form fields or button text
  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
}

function loadGA() {
  if (!GA_ID || window.gtag) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

const apply = (c) => {
  if (!c) return;
  if (c.analytics) loadGA();
  if (c.advertising && !gpcOn()) loadMetaPixel();
};

// ---------- UI ----------

const btn = "px-5 py-3 text-sm font-semibold border border-ink transition-colors";
const solid = `${btn} bg-ink text-paper hover:bg-signal hover:border-signal`;

const Row = ({ title, body, checked, onChange, disabled, note, testid }) => (
  <div className="py-5 border-b border-ink/15 grid grid-cols-[1fr_auto] gap-6 items-start">
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm leading-[1.6] text-ink/75 mt-1">{body}</p>
      {note && <p className="text-sm leading-[1.6] text-signal mt-2">{note}</p>}
    </div>
    <Switch checked={checked} onCheckedChange={onChange} disabled={disabled} aria-label={title} className="mt-1 data-[state=checked]:bg-ink data-[state=unchecked]:bg-slot" data-testid={testid} />
  </div>
);

export default function ConsentManager() {
  const [banner, setBanner] = useState(false);
  const [open, setOpen] = useState(false);
  const [gpc, setGpc] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, advertising: false });

  useEffect(() => {
    const c = readConsent();
    setGpc(gpcOn());
    if (c) { setPrefs(c); apply(c); }
    else if (TRACKING_CONFIGURED) setBanner(true);
    const onOpen = () => { const cur = readConsent(); setPrefs(cur || { analytics: false, advertising: false }); setGpc(gpcOn()); setOpen(true); };
    const onChange = (e) => apply(e.detail);
    window.addEventListener(OPEN_EVENT, onOpen);
    window.addEventListener(CHANGE_EVENT, onChange);
    return () => { window.removeEventListener(OPEN_EVENT, onOpen); window.removeEventListener(CHANGE_EVENT, onChange); };
  }, []);

  const decide = (p) => { setPrefs(saveConsent(p)); setBanner(false); setOpen(false); };

  return (
    <>
      {banner && !open && (
        <div role="region" aria-label="Cookie choices" className="fixed z-50 bottom-0 inset-x-0 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md bg-paper text-ink border border-ink shadow-[6px_6px_0_#141414] p-6" data-testid="consent-banner">
          <p className="lbl text-signal mb-2">Cookies</p>
          <p className="text-[15px] leading-[1.6]">
            {IS_CA
              ? `We use essential cookies to run this site. With your OK, we'd also like to use analytics cookies to see how it's used${META_PIXEL_ID ? ", and the Meta Pixel to show you Ayvant ads on Facebook and Instagram" : ""}.`
              : <>We use essential cookies to run this site. With your OK, we&apos;d also like to use analytics cookies to see how it&apos;s used, and the Meta Pixel to show you Ayvant ads on Facebook and Instagram.</>}{" "}
            <a href={LEGAL.cookies} className="underline underline-offset-4 hover:text-signal">Cookie Policy</a>
          </p>
          {gpc && <p className="text-sm text-signal mt-3" data-testid="consent-gpc-note">Your browser&apos;s Global Privacy Control signal is on, so advertising cookies stay off.</p>}
          <div className="grid grid-cols-2 gap-2 mt-5">
            <button type="button" className={solid} onClick={() => decide({ analytics: true, advertising: true })} data-testid="consent-accept">Accept all</button>
            <button type="button" className={solid} onClick={() => decide({ analytics: false, advertising: false })} data-testid="consent-reject">Reject non-essential</button>
          </div>
          <button type="button" className="mt-3 text-sm font-semibold underline underline-offset-4 hover:text-signal" onClick={() => setOpen(true)} data-testid="consent-choose">Choose which cookies</button>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-paper border border-ink rounded-none p-8 max-w-lg" data-testid="consent-dialog">
          <p className="lbl text-signal">Cookie settings</p>
          <DialogTitle className="disp text-3xl font-normal">Your privacy choices</DialogTitle>
          <DialogDescription className="text-ink/80 leading-[1.6]">
            Choose which optional cookies we may use. You can change this at any time from Cookie settings in the footer. See our <a href={LEGAL.cookies} className="underline">Cookie Policy</a> and <a href={LEGAL.privacy} className="underline">Privacy Policy</a>.
          </DialogDescription>
          <div className="mt-2">
            <Row title="Essential" body={IS_CA ? "Run the site, our forms and chat, and remember these choices." : "Run the site, our forms and booking calendar, and remember these choices."} checked disabled testid="consent-essential" />
            <Row title="Analytics" body="Google Analytics, to count visits and see which pages are useful." checked={prefs.analytics} onChange={(v) => setPrefs({ ...prefs, analytics: v })} testid="consent-analytics" />
            {(!IS_CA || META_PIXEL_ID) && <Row
              title="Advertising"
              body={IS_CA ? "The Meta Pixel, to show you Ayvant ads on Facebook and Instagram and measure them. Off unless you turn it on." : "The Meta Pixel, to show you Ayvant ads on Facebook and Instagram and measure them. Under California law this is 'sharing' personal information."}
              checked={prefs.advertising && !gpc}
              onChange={(v) => setPrefs({ ...prefs, advertising: v })}
              disabled={gpc}
              note={gpc ? "Off because your browser sends a Global Privacy Control signal." : null}
              testid="consent-advertising"
            />}
          </div>
          <div className="grid sm:grid-cols-3 gap-2 mt-6">
            <button type="button" className={solid} onClick={() => decide({ analytics: false, advertising: false })} data-testid="consent-dialog-reject">Reject all</button>
            <button type="button" className={solid} onClick={() => decide({ analytics: true, advertising: true })} data-testid="consent-dialog-accept">Accept all</button>
            <button type="button" className={`${btn} bg-signal border-signal text-white hover:bg-ink hover:border-ink`} onClick={() => decide(prefs)} data-testid="consent-save">Save choices</button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
