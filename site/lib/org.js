// Site-wide business schema (was in the Emergent index.html).
export const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.ayvant.com/#business",
      "name": "Ayvant IT Services",
      "logo": "https://www.ayvant.com/ayvant-logo.png",
      "alternateName": "Ayvant",
      "url": "https://www.ayvant.com/",
      "description": "Managed IT, cybersecurity, compliance and AI governance for law firms, medical and dental practices, CPAs, accountants and financial firms.",
      "foundingDate": "1985",
      "telephone": "+1-949-649-4114",
      "email": "info@ayvant.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2372 Morse Ave #241",
        "addressLocality": "Irvine",
        "addressRegion": "CA",
        "postalCode": "92614",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "knowsAbout": [
        "AI Governance",
        "Cybersecurity",
        "Managed IT Services",
        "HIPAA Compliance",
        "FTC Safeguards Rule"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Governance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cybersecurity"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Managed IT"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Compliance"
            }
          }
        ]
      }
    }
  ]
};
