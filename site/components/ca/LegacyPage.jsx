// An original ayvant.ca page body (restyled by lib/ca/pages.js and legacy.css) inside the ayvant.com header and footer.
import "./legacy.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/JsonLd";

export default function LegacyPage({ page }) {
  return (
    <div className="bg-paper text-ink font-body">
      {page.faqs?.length > 0 && (
        <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />
      )}
      <Header />
      <main className="ca-legacy" data-testid="legacy-page" dangerouslySetInnerHTML={{ __html: page.html }} />
      <Footer />
    </div>
  );
}
