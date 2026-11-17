// ayvant.ca: business details and navigation. Wording comes from the original ayvant.ca site.

export const BIZ = {
  name: "Ayvant",
  brand: "Ayvant IT & Cybersecurity",
  legal: "Ayvant IT & Cybersecurity Inc.",
  phone: "(604) 239-2090",
  tel: "tel:+16042392090",
  email: "hello@ayvant.ca",
  street: "20627 Fraser Hwy",
  city: "Langley, BC V3A 4G4",
  aboutUrl: "/pages/about/",
  contactUrl: "/pages/contact/",
  clientPortal: "https://ayvant-ca.app.clientclub.net/",
  description:
    "Your trusted partner for IT support and cybersecurity in Vancouver and the Lower Mainland. We keep your business safe so you can focus on what matters most.",
  offices: [
    { name: "Langley Office", street: "20627 Fraser Hwy", city: "Langley, BC V3A 4G4", phone: "(604) 239-2090", tel: "tel:+16042392090" },
    { name: "Surrey Office", street: "2677 192 St Suite 102", city: "Surrey, BC V3S 3X1", phone: "(778) 909-5896", tel: "tel:+17789095896" },
  ],
  social: [
    ["LinkedIn", "https://www.linkedin.com/company/ayvant-it-cybersecurity-inc"],
    ["Facebook", "https://facebook.com/ayvant.ca"],
    ["X", "https://x.com/ayvant_ca"],
  ],
};

export const SERVICES = [
  { id: "cybersecurity", name: "Cybersecurity", href: "/pages/cybersecurity/", line: "Protect your business from evolving cyber threats with our comprehensive security solutions. From threat detection to compliance, we've got you covered." },
  { id: "it-support", name: "IT Support", href: "/pages/it-support/", line: "Reliable, responsive IT support that keeps your business running smoothly. Our team becomes an extension of yours, ready whenever you need us." },
  { id: "it-consulting", name: "IT Consulting", href: "/pages/it-consulting/", line: "Strategic technology guidance to help your business grow. We align your IT infrastructure with your business goals for maximum impact." },
];

export const INDUSTRIES = [
  { id: "law-firms", name: "Law Firms", line: "Legal IT Specialists", vancouver: "/locations/it-support-for-law-firms-vancouver/", surrey: "/locations/it-support-for-law-firms-surrey/" },
  { id: "accountants", name: "Accountants", line: "Accounting IT Specialists", vancouver: "/locations/it-support-for-accountants-vancouver/", surrey: "/locations/it-support-for-accountants-surrey/" },
  { id: "healthcare", name: "Healthcare", line: "Healthcare IT Specialists", vancouver: "/locations/it-support-for-healthcare-vancouver/", surrey: "/locations/it-support-for-healthcare-surrey/" },
];

export const AREAS = [
  ["Vancouver", "/locations/it-support-vancouver/"],
  ["Surrey", "/managed-it-services-surrey/"],
  ["Langley", "/locations/it-support-langley/"],
  ["Burnaby", "/locations/it-support-burnaby/"],
  ["Richmond", "/locations/it-support-richmond/"],
  ["Coquitlam", "/locations/it-support-coquitlam/"],
  ["Delta", "/locations/it-support-delta/"],
];

export const NAV = {
  dropdowns: [
    { label: "Services", href: "/pages/cybersecurity/", testid: "nav-services", cols: 1, items: SERVICES.map((s) => ({ id: s.id, name: s.name, line: s.line.split(". ")[0] + ".", href: s.href })) },
    { label: "Industries", href: INDUSTRIES[0].vancouver, testid: "nav-industries", cols: 1, items: INDUSTRIES.map((x) => ({ id: x.id, name: x.name, line: x.line, href: x.vancouver })) },
  ],
  links: [
    ["Blog", "/blog/"],
    ["About", "/pages/about/"],
    ["Contact", "/pages/contact/"],
    ["Client Portal", BIZ.clientPortal],
  ],
  cta: { href: "/pages/contact/#contact-form", label: "Free assessment", mobileLabel: "Get a Free Assessment", menuLabel: "Not sure what you need? Get a free assessment" },
};

// Same people as ayvant.com, without Manuel.
export const TEAM = [
  { name: "Nishant (Sean) Dewan", role: "CTO & Co-Founder", img: "https://static.wixstatic.com/media/07ddd5_5edb33f812864d03bad5f3e4d881a66d~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85,enc_auto/photo.jpg", li: "https://www.linkedin.com/in/nishant-dewan/" },
  { name: "Claude Zardet", role: "Sr. Cybersecurity Advisor", img: "https://static.wixstatic.com/media/07ddd5_c65cf696d0eb4af5ba6618f435e438d7~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85,enc_auto/photo.jpg", li: "https://www.linkedin.com/in/claude-zardet-809a51151/" },
];
export const STAFF = [
  { name: "Navneet Kaur", role: "Cyber & AI Security Expert", img: "/team/navneet-kaur.jpg", li: "https://www.linkedin.com/in/navneet-kau/" },
  { name: "Mitchell Martin", role: "IT Support Specialist", img: "/team/mitchell-martin.jpg", li: "https://www.linkedin.com/in/mitchell-martin-7a50b747/" },
];

export const FIRM_TYPES = ["Law firm", "Accounting or bookkeeping firm", "Healthcare practice", "Other professional services"];

const ghlForm = (id, name, height) =>
  `<iframe src="https://api.leadconnectorhq.com/widget/form/${id}" style="width:100%;height:${height}px;border:none;border-radius:0px" id="inline-${id}" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="${name}" data-height="${height}" data-layout-iframe-id="inline-${id}" data-form-id="${id}" title="${name}"></iframe><script src="https://link.msgsndr.com/js/form_embed.js"></script>`;

export const GHL = {
  contact: ghlForm("fo2EXkTq1ysY0kGsUGlY", "Contact us Form", 950),
  newsletter: ghlForm("gzsd20VFQkODIdbrHWnn", "Newsletter Form", 180),
  darkWeb: ghlForm("57PnoaWrKZtZCOXqG99f", "Dark Web Scan Form", 449),
  chatWidgetId: "69a2a83d95702f720374ab00",
};

export const LEGAL = {
  privacy: "/pages/privacy-policy/",
  notice: "/pages/privacy-policy/#notice-at-collection",
  cookies: "/pages/cookie-policy/",
  terms: "/pages/terms-of-service/",
  accessibility: "/pages/accessibility/",
};
