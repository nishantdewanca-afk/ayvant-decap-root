"use client";
import { useEffect, useState } from "react";
import { openConsent, readConsent, saveConsent, gpcOn, CHANGE_EVENT } from "@/lib/consent";

export const CookieSettingsButton = ({ className = "ul-link" }) => (
  <button type="button" onClick={openConsent} className={className} data-testid="footer-cookie-settings">Cookie settings</button>
);

// The one-click opt-out on /privacy-choices.
export function OptOutPanel() {
  const [state, setState] = useState(null);
  useEffect(() => {
    const read = () => setState({ consent: readConsent(), gpc: gpcOn() });
    read();
    window.addEventListener(CHANGE_EVENT, read);
    return () => window.removeEventListener(CHANGE_EVENT, read);
  }, []);
  if (!state) return null;
  const optedOut = state.gpc || !state.consent?.advertising;
  return (
    <div className="border border-ink bg-white p-6 md:p-8 my-10" data-testid="opt-out-panel">
      <p className="lbl text-signal mb-3">This browser</p>
      {optedOut ? (
        <p className="text-lg leading-[1.6]" data-testid="opt-out-status">
          <strong>You&apos;re opted out.</strong> We won&apos;t sell or share your personal information from this browser, and the Meta Pixel won&apos;t load.
          {state.gpc && " Your browser's Global Privacy Control signal is on, and we honor it automatically."}
        </p>
      ) : (
        <>
          <p className="text-lg leading-[1.6]" data-testid="opt-out-status">You&apos;ve allowed advertising cookies, so the Meta Pixel can share information about your visit with Meta.</p>
          <button
            type="button"
            onClick={() => saveConsent({ analytics: state.consent?.analytics, advertising: false })}
            className="mt-5 bg-signal text-white px-6 py-4 font-semibold hover:bg-ink transition-colors"
            data-testid="opt-out-btn"
          >
            Opt out of sale and sharing
          </button>
        </>
      )}
      <p className="text-sm text-ink/70 mt-5">
        Your choice is saved in this browser. If you use another browser or device, or clear your cookies, opt out there too, or turn on Global Privacy Control.{" "}
        <button type="button" onClick={openConsent} className="underline underline-offset-4">Change all cookie settings</button>
      </p>
    </div>
  );
}
