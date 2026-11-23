import { notFound } from "next/navigation";
import ServiceView from "@/components/views/ServiceView";
import { JsonLd } from "@/components/JsonLd";
import { SERVICE_PAGES } from "@/lib/services";
import { pageMeta, faqJsonLd, SITE_URL } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(SERVICE_PAGES).map((slug) => ({ slug }));

export async function generateMetadata({ params }) {
  const s = SERVICE_PAGES[(await params).slug];
  return s ? pageMeta({ title: s.seo.title, description: s.seo.description, path: `/services/${s.slug}` }) : {};
}

const pageJsonLd = (s) => {
  const url = `${SITE_URL}/services/${s.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `${s.name} services`,
        serviceType: s.name,
        description: s.answer.a,
        url,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "Country", name: "United States" },
        audience: { "@type": "BusinessAudience", audienceType: "Law firms, medical and dental practices, CPA and financial firms" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#services` },
          { "@type": "ListItem", position: 3, name: s.name, item: url },
        ],
      },
      faqJsonLd(s.faqs),
    ],
  };
};

export default async function Page({ params }) {
  const { slug } = await params;
  const s = SERVICE_PAGES[slug];
  if (!s) notFound();
  return (
    <>
      <JsonLd data={pageJsonLd(s)} />
      <ServiceView slug={slug} />
    </>
  );
}
