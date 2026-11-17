// An original ayvant.ca page body (restyled by lib/ca/pages.js and legacy.css) inside the ayvant.com header and footer.
import "./legacy.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export default function LegacyPage({ page }) {
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main className="ca-legacy" data-testid="legacy-page" dangerouslySetInnerHTML={{ __html: page.html }} />
      <Footer />
    </div>
  );
}
