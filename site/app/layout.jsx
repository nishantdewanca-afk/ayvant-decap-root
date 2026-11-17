import "@fontsource-variable/newsreader";
import "@fontsource-variable/newsreader/wght-italic.css";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/600.css";
import "@fontsource/source-sans-3/700.css";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ConsentManager from "@/components/consent/ConsentManager";
import RevealOnScroll from "@/components/RevealOnScroll";
import { JsonLd } from "@/components/JsonLd";
import { ORG_JSONLD } from "@/lib/org";
import { ORG_JSONLD_CA } from "@/lib/ca/org";
import { IS_CA, SITE_CONFIG } from "@/lib/site";
import ChatWidget from "@/components/ca/ChatWidget";
import ExitPopup from "@/components/ca/ExitPopup";
import { SITE_URL, INDEXABLE } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
};

export const viewport = { themeColor: "#f4f2ec" };

export default function RootLayout({ children }) {
  return (
    <html lang={SITE_CONFIG.lang}>
      <body>
        <JsonLd data={IS_CA ? ORG_JSONLD_CA : ORG_JSONLD} />
        <div className="App">{children}</div>
        <Toaster position="bottom-right" />
        <ConsentManager />
        <RevealOnScroll />
        {IS_CA && <ChatWidget />}
        {IS_CA && <ExitPopup />}
      </body>
    </html>
  );
}
