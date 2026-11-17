// ayvant.ca /pages/<slug>/: About and Contact (rebuilt), the policies (BC), and the original service pages.
import { notFound } from "next/navigation";
import AboutCA from "@/components/ca/AboutCA";
import AiGovernanceCA from "@/components/ca/AiGovernanceCA";
import { AI_FAQS } from "@/lib/ca/aiGovernance";
import ContactCA from "@/components/ca/ContactCA";
import LegacyPage from "@/components/ca/LegacyPage";
import LegalPage from "@/components/LegalPage";
import { JsonLd } from "@/components/JsonLd";
import { getLegal } from "@/lib/legal";
import { getLegacyPages, getLegacyPage } from "@/lib/ca/pages";
import { caMeta, CA_PAGES, CA_LEGAL } from "@/lib/ca/meta";
import { SITE_URL } from "@/lib/site";
import { BIZ } from "@/lib/ca/content";

export const dynamicParams = false;

const legacy = () => getLegacyPages().filter((p) => p.route.startsWith("/pages/"));
export const generateStaticParams = () => [
  { slug: "about" },
  { slug: "contact" },
  { slug: "ai-governance" },
  ...Object.keys(CA_LEGAL).map((slug) => ({ slug })),
  ...legacy().map((p) => ({ slug: p.route.split("/")[2] })),
];

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const path = `/pages/${slug}/`;
  if (CA_PAGES[slug]) return caMeta(CA_PAGES[slug]);
  if (CA_LEGAL[slug]) {
    const doc = getLegal(CA_LEGAL[slug]);
    return caMeta({ title: doc.title, description: doc.description, path });
  }
  const p = getLegacyPage(path);
  return p ? caMeta({ title: p.metaTitle, description: p.description, path }) : {};
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (slug === "about") return <AboutCA />;
  if (slug === "ai-governance")
    return (
      <>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": `${SITE_URL}/pages/ai-governance/#service`,
                name: "AI Governance",
                serviceType: "AI governance and responsible AI consulting",
                description: "AI usage assessments, AI acceptable use policies, approved AI tools and safe settings, data protection controls, vendor reviews, staff training and ongoing monitoring for law firms, accountants and healthcare practices.",
                provider: { "@id": `${SITE_URL}/#business` },
                areaServed: ["Vancouver", "Surrey", "Langley", "Burnaby", "Richmond", "Coquitlam", "Delta", "Abbotsford", "Chilliwack", "Port Moody"].map((name) => ({ "@type": "City", name })),
                audience: { "@type": "BusinessAudience", name: "Law firms, accounting firms and healthcare practices" },
                url: `${SITE_URL}/pages/ai-governance/`,
              },
              { "@type": "FAQPage", mainEntity: AI_FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                  { "@type": "ListItem", position: 2, name: "AI Governance", item: `${SITE_URL}/pages/ai-governance/` },
                ],
              },
            ],
          }}
        />
        <AiGovernanceCA />
      </>
    );
  if (slug === "contact")
    return (
      <>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: `${SITE_URL}/pages/contact/`,
            name: "Contact Ayvant IT & Cybersecurity",
            about: { "@id": `${SITE_URL}/#business` },
            mainEntity: {
              "@id": `${SITE_URL}/#business`,
              contactPoint: BIZ.offices.map((o) => ({ "@type": "ContactPoint", contactType: "customer service", name: o.name, telephone: `+1-${o.phone.replace(/[()]/g, "").replace(" ", "-")}`, email: BIZ.email, areaServed: "CA-BC", availableLanguage: "English" })),
            },
          }}
        />
        <ContactCA />
      </>
    );
  if (CA_LEGAL[slug]) return <LegalPage doc={getLegal(CA_LEGAL[slug])} />;
  const p = getLegacyPage(`/pages/${slug}/`);
  if (!p) notFound();
  return <LegacyPage page={p} />;
}
