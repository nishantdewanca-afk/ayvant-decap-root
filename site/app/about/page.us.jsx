import AboutView from "@/components/views/AboutView";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, SITE_URL } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Ayvant | IT & Cybersecurity Since 1985 | Irvine, CA",
  description: "Ayvant started in San Jose in 1985 and became Ayvant in 2020. From Irvine, California we support law, medical, dental and financial firms across the US with IT, security, compliance and AI governance.",
  path: "/about",
});

export default function Page() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", url: `${SITE_URL}/about`, name: "About Ayvant", about: { "@id": `${SITE_URL}/#business` } }} />
      <AboutView />
    </>
  );
}
