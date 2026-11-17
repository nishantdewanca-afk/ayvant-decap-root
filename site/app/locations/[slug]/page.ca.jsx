// ayvant.ca location pages, carried over word for word.
import { notFound } from "next/navigation";
import LegacyPage from "@/components/ca/LegacyPage";
import { JsonLd } from "@/components/JsonLd";
import { getLegacyPages, getLegacyPage, cityOf } from "@/lib/ca/pages";
import { caMeta } from "@/lib/ca/meta";
import { SITE_URL } from "@/lib/site";
import { BIZ } from "@/lib/ca/content";

export const dynamicParams = false;
export const generateStaticParams = () =>
  getLegacyPages().filter((p) => p.route.startsWith("/locations/")).map((p) => ({ slug: p.route.split("/")[2] }));

export async function generateMetadata({ params }) {
  const path = `/locations/${(await params).slug}/`;
  const p = getLegacyPage(path);
  return p ? caMeta({ title: p.metaTitle, description: p.description, path }) : {};
}

// The same Service schema the original site gave every location page.
const serviceJsonLd = (p) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "IT Support & Cybersecurity",
  provider: { "@id": `${SITE_URL}/#business`, "@type": "LocalBusiness", name: BIZ.brand, telephone: "+1-604-239-2090" },
  areaServed: { "@type": "City", name: cityOf(p.title) },
  description: p.description,
  url: `${SITE_URL}${p.route}`,
});

export default async function Page({ params }) {
  const p = getLegacyPage(`/locations/${(await params).slug}/`);
  if (!p) notFound();
  return (
    <>
      <JsonLd data={serviceJsonLd(p)} />
      <LegacyPage page={p} />
    </>
  );
}
