import SecurityCheckView from "@/components/views/SecurityCheckView";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { IS_CA, href } from "@/lib/site";

const path = href("/security-check");

export const metadata = pageMeta({
  title: IS_CA
    ? "How Protected Is Your Firm? Free 2-Minute Security Check | Ayvant IT & Cybersecurity"
    : "How Protected Is Your Firm? Free 2-Minute Security Check | Ayvant",
  description: IS_CA
    ? "Ten quick yes-or-no questions for law firms, accountants and healthcare practices in BC. Get a protection score and a plain-English list of what to fix first."
    : "Ten quick yes-or-no questions for law firms, medical and dental practices and CPA firms. Get a protection score and a plain-English list of what to fix first.",
  path,
});

export default function Page() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: "How protected is your firm?", url: `${SITE_URL}${path}`, about: { "@id": `${SITE_URL}/#business` } }} />
      <SecurityCheckView />
    </>
  );
}
