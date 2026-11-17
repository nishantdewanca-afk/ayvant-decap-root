// Real facts come from the owner's answers and ayvant.com. Anything marked placeholder still needs real content.
// Shared components read BIZ, TEAM, STAFF, FIRM_TYPES, GHL and LEGAL; on ayvant.ca these come from lib/ca/content.js.
import { IS_CA } from "./site";
import * as CA from "./ca/content";

const BIZ_US = {
  name: "Ayvant",
  legal: "Ayvant IT Services",
  phone: "+1 (949) 649-4114",
  tel: "tel:+19496494114",
  email: "info@ayvant.com",
  street: "2372 Morse Ave #241",
  city: "Irvine, CA 92614",
  aboutUrl: "/about",
  contactUrl: "/contact",
};
export const BIZ = IS_CA ? CA.BIZ : BIZ_US;

export const IMG = {
  video: "https://images.unsplash.com/photo-1758691736407-02406d18df6c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  case1: "https://images.unsplash.com/photo-1680992046626-418f7e910589?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  case2: "https://images.unsplash.com/photo-1629837093109-11325d6e7afd?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  case3: "https://images.unsplash.com/photo-1769449771082-07dcd4a8d8d0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  law: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  medical: "https://images.unsplash.com/photo-1769449771082-07dcd4a8d8d0?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  finance: "https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  hub1: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  hub2: "https://images.unsplash.com/photo-1508780709619-79562169bc64?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  hub3: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
};

const wix = (id) => `https://static.wixstatic.com/media/${id}/v1/fill/w_600,h_600,al_c,q_85,enc_auto/photo.jpg`;

const TEAM_US = [
  { name: "Nishant (Sean) Dewan", role: "CTO & Co-Founder", img: wix("07ddd5_5edb33f812864d03bad5f3e4d881a66d~mv2.jpg"), li: "https://www.linkedin.com/in/nishant-dewan/" },
  { name: "Manuel Ser-Manukyan", role: "CFO", img: wix("07ddd5_ed0da8b5b93b48a8bb09cda21b394066~mv2.jpg"), li: "https://www.linkedin.com/in/manuel-ser-manukyan/" },
  { name: "Claude Zardet", role: "Sr. Cybersecurity Advisor", img: wix("07ddd5_c65cf696d0eb4af5ba6618f435e438d7~mv2.jpg"), li: "https://www.linkedin.com/in/claude-zardet-809a51151/" },
];
export const TEAM = IS_CA ? CA.TEAM : TEAM_US;

// Shown with the leadership team on the About page. A missing photo shows the person's initials.
const STAFF_US = [
  { name: "Navneet Kaur", role: "Cyber & AI Security Expert", img: "/team/navneet-kaur.jpg", li: "https://www.linkedin.com/in/navneet-kau/" },
  { name: "Mitchell Martin", role: "IT Support Specialist", img: "/team/mitchell-martin.jpg", li: "https://www.linkedin.com/in/mitchell-martin-7a50b747/" },
];
export const STAFF = IS_CA ? CA.STAFF : STAFF_US;

export const DIFFS = [
  "We know HIPAA, legal and finance rules inside out.",
  "A real person answers fast, every time.",
  "We handle AI safely before it becomes a risk.",
  "One team covers IT, security and compliance.",
];

export const SERVICES = [
  { id: "ai-governance", name: "AI Governance", line: "Policies and guardrails before staff paste client data into AI tools.", points: ["AI use policy your team can actually follow", "Approved tools, sign-in and access controls", "Logs that answer who used what, and when"] },
  { id: "cybersecurity", name: "Cybersecurity", line: "Endpoint protection, email security and monitoring around the clock.", points: ["Monitored endpoint protection", "Email filtering and phishing defense", "Multi-factor sign-in everywhere it matters"] },
  { id: "managed-it", name: "Managed IT", line: "Help desk, devices, cloud and backups, handled by people you know.", points: ["Help desk with a real person on the line", "Microsoft 365, cloud and device management", "Backups we actually test"] },
  { id: "compliance", name: "Compliance", line: "HIPAA, legal ethics and financial rules, documented and audit-ready.", points: ["HIPAA safeguards for medical and dental", "Client confidentiality for law firms", "FTC Safeguards Rule support for CPAs"] },
];

export const INDUSTRIES = [
  { slug: "law-firms", name: "Law firms", cap: "Your law office", img: IMG.law, alt: "Attorneys reviewing and signing documents at a conference table", copy: "Privileged files, e-discovery, and partners working from court, home and the office. We keep it all reachable for you and closed to everyone else." },
  { slug: "medical-dental", name: "Medical and dental", cap: "Your practice front desk", img: IMG.medical, alt: "Reception desk of a private practice with a computer", copy: "Front desk, imaging, practice software and patient records. We support HIPAA safeguards so you can stay focused on patients." },
  { slug: "cpa-finance", name: "CPAs and finance", cap: "Your accounting team", img: IMG.finance, alt: "Accountant's desk with financial charts and a phone", copy: "Tax season crunches, client portals and wire fraud attempts. We lock down email and keep the lights on when deadlines hit." },
];

// Placeholders: swap in real video URLs (YouTube/Vimeo embed or MP4) when they are ready.
export const INTRO_VIDEO = { src: null, poster: IMG.video };
export const CASE_STUDIES = [
  { id: "cs-law", tag: "Law firm", title: "Case study video: law firm", img: IMG.case1, src: null },
  { id: "cs-dental", tag: "Dental practice", title: "Case study video: dental practice", img: IMG.case3, src: null },
  { id: "cs-cpa", tag: "CPA firm", title: "Case study video: CPA firm", img: IMG.case2, src: null },
];

export const GUIDES = [
  { slug: "it-buyers-guide", title: "IT Services Buyer's Guide", sub: "Questions to ask any managed IT provider before you sign, written for firms that handle sensitive data." },
  { slug: "ai-governance-checklist", title: "AI Governance Starter Checklist", sub: "Six steps to let your team use AI at work without putting client or patient data at risk." },
];

const FIRM_TYPES_US = ["Law firm", "Medical or dental practice", "CPA, accounting or finance", "Other"];
export const FIRM_TYPES = IS_CA ? CA.FIRM_TYPES : FIRM_TYPES_US;

// Real client reviews, supplied by Ayvant. Reproduce verbatim.
export const REVIEWS = [
  { id: "manuel", name: "Manuel", firm: "Integrity Accounting", quote: "Without Ayvant IT management and cybersecurity, we would have lost our businesses to hackers, and chaos of computer and network issues would have driven our employees crazy. Due to professionalism and care of his team and leadership of Sean, we are standing strong and prosper. Thank you Ayvant IT" },
  { id: "amy", name: "Amy", firm: "Steele Group", quote: "AyvanT IT services-IT support managed my IT services by streamlining/ directly to me, at our offices in Long Beach. They where patient and went through the steps with me to solve the problem. I highly recommend AvanT IT services for any of your business needs." },
  { id: "jake", name: "Jake", firm: "CS Caulkins", quote: "Our company lost our previous IT company due to high increase in monthly fees and we searched for a new IT person thinking it would be hard to find anyone close to our previous IT Guy. We were wrong! Sean came to our office the same day we called to do a quick evaluation and share his prices. Not only did we find him to be extremely professional, we also feel he has the best prices on the market. We have now been using Sean for our IT Services for over 1/2 year and he is always responsive and gets the issue resovled quickly. Because of the COVID-19 we have all had to change our office to switch remotely. This was no issue for Sean to get us all setup as an office to work from home and any issues we have had he has fixed it with no problems. If you are looking for an HONEST, FAIR, PROFESSIONAL IT service, please don't waste anymore time searching. Sean is your guy! We are happy to have Sean working with us and look forward to his services for years to come!" },
];

// GoHighLevel embeds. Contact and newsletter use GHL's Inline layout so they sit inside the page.
const ghlForm = (id, name, height) =>
  `<iframe src="https://api.leadconnectorhq.com/widget/form/${id}" style="width:100%;height:100%;border:none;border-radius:0px" id="inline-${id}" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="${name}" data-height="${height}" data-layout-iframe-id="inline-${id}" data-form-id="${id}" title="${name}"></iframe><script src="https://link.msgsndr.com/js/form_embed.js"></script>`;

const GHL_US = {
  booking: `<iframe src="https://api.leadconnectorhq.com/widget/booking/jcyyueAElrKomIvlgUVw" allow="payment" style="width:100%;border:none;overflow:hidden;" scrolling="no" id="yuOt7Y2Gly69jy2wv4oD_1794863055272"></iframe><script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>`,
  contact: ghlForm("NFSH6iikNnmNZTNgd23P", "Contact us Form", 725),
  newsletter: ghlForm("uTwME29HAqV1CdWDt57x", "Newsletter Form", 340),
};
export const GHL = IS_CA ? CA.GHL : GHL_US;

const LEGAL_US = {
  privacy: "/privacy-policy",
  notice: "/privacy-policy#notice-at-collection",
  cookies: "/cookie-policy",
  terms: "/terms-of-use",
  accessibility: "/accessibility",
};
export const LEGAL = IS_CA ? CA.LEGAL : LEGAL_US;
