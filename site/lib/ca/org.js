// ayvant.ca site-wide business schema (from the original ayvant.ca layout).
const CITIES = ["Vancouver", "Surrey", "Langley", "Burnaby", "Richmond", "Coquitlam", "Port Moody", "Delta", "Abbotsford", "Chilliwack"];

export const ORG_JSONLD_CA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ayvant.ca/#business",
  name: "Ayvant IT & Cybersecurity",
  legalName: "Ayvant IT & Cybersecurity Inc.",
  description:
    "Ayvant IT & Cybersecurity provides managed IT support and cybersecurity services for law firms, accountants, and businesses in Vancouver and the Lower Mainland, BC.",
  url: "https://ayvant.ca",
  logo: "https://ayvant.ca/ayvant-logo.png",
  telephone: "+1-604-239-2090",
  email: "hello@ayvant.ca",
  address: { "@type": "PostalAddress", streetAddress: "20627 Fraser Hwy", addressLocality: "Langley", addressRegion: "BC", postalCode: "V3A 4G4", addressCountry: "CA" },
  geo: { "@type": "GeoCoordinates", latitude: 49.0985, longitude: -122.6585 },
  department: [
    {
      "@type": "LocalBusiness",
      name: "Ayvant IT & Cybersecurity, Surrey Office",
      telephone: "+1-778-909-5896",
      address: { "@type": "PostalAddress", streetAddress: "2677 192 St Suite 102", addressLocality: "Surrey", addressRegion: "BC", postalCode: "V3S 3X1", addressCountry: "CA" },
    },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
  ],
  priceRange: "$$",
  sameAs: ["https://www.linkedin.com/company/ayvant-it-cybersecurity-inc", "https://facebook.com/ayvant.ca", "https://x.com/ayvant_ca"],
  areaServed: CITIES.map((name) => ({ "@type": "City", name, containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT & Cybersecurity Services",
    itemListElement: ["Managed IT Support", "Cybersecurity Services", "Cloud Services", "Network Management", "IT Consulting"].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};
