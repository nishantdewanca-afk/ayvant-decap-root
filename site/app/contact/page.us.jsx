import ContactView from "@/components/views/ContactView";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, SITE_URL } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact Ayvant | Managed IT & Cybersecurity in Irvine, CA",
  description: "Call +1 (949) 649-4114, email info@ayvant.com, send a message or book a free security assessment. Ayvant, 2372 Morse Ave #241, Irvine, CA. 24x7 client support.",
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${SITE_URL}/contact`,
          name: "Contact Ayvant",
          about: { "@id": `${SITE_URL}/#business` },
          mainEntity: {
            "@id": `${SITE_URL}/#business`,
            contactPoint: [
              { "@type": "ContactPoint", contactType: "customer service", telephone: "+1-949-649-4114", email: "info@ayvant.com", areaServed: "US", availableLanguage: "English" },
              { "@type": "ContactPoint", contactType: "technical support", telephone: "+1-949-649-4114", areaServed: "US", hoursAvailable: "Mo-Su 00:00-23:59" },
            ],
          },
        }}
      />
      <ContactView />
    </>
  );
}
