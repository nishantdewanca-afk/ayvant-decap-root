import { notFound } from "next/navigation";
import IndustryView from "@/components/views/IndustryView";
import { JsonLd } from "@/components/JsonLd";
import { INDUSTRY_PAGES } from "@/lib/industries";
import { pageMeta, faqJsonLd, SITE_URL } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(INDUSTRY_PAGES).map((slug) => ({ slug }));

export async function generateMetadata({ params }) {
  const s = INDUSTRY_PAGES[(await params).slug];
  return s ? pageMeta({ title: s.seo.title, description: s.seo.description, path: `/industries/${s.slug}` }) : {};
}

const pageJsonLd = (s) => {
  const url = `${SITE_URL}/industries/${s.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#page`, url, name: s.seo.title, description: s.seo.description, about: { "@id": `${SITE_URL}/#business` } },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/#industries` },
          { "@type": "ListItem", position: 3, name: s.name, item: url },
        ],
      },
      faqJsonLd(s.faqs),
    ],
  };
};

export default async function Page({ params }) {
  const { slug } = await params;
  const s = INDUSTRY_PAGES[slug];
  if (!s) notFound();
  return (
    <>
      <JsonLd data={pageJsonLd(s)} />
      <IndustryView slug={slug} />
    </>
  );
}
