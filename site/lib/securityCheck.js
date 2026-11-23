import { IS_CA } from "./site";
import { SERVICES } from "./content";
import { servicePath } from "./services";
import { SERVICES as SERVICES_CA } from "./ca/content";

// "How protected is your firm?" 2-minute security check. Weights decide how much each gap costs.
const QUESTIONS_ALL = [
  { id: "mfa", w: 3, q: "Does everyone use multi-factor sign-in (a code or app prompt) for email and remote access?", fix: "Turn on multi-factor sign-in for every account. It stops most email break-ins.", service: "cybersecurity" },
  { id: "backups", w: 3, q: "Have you restored a file from backup as a test in the last six months?", fix: "Test your backups by actually restoring from them, on a schedule.", service: "managed-it" },
  { id: "endpoint", w: 2, q: "Is every computer protected by monitored security software, not just free antivirus?", fix: "Use endpoint protection that someone actually watches and responds to.", service: "cybersecurity" },
  { id: "patching", w: 2, q: "Do computers and key software get updates automatically, on a schedule?", fix: "Patch operating systems and key apps automatically, and check that it happened.", service: "managed-it" },
  { id: "training", w: 2, q: "Has your team had phishing or security awareness training in the last 12 months?", fix: "Give staff short, practical training and occasional test phishing emails.", service: "cybersecurity" },
  { id: "encryption", w: 2, q: "Are all laptops encrypted, so a lost or stolen one doesn't expose client data?", fix: "Encrypt every laptop and keep a plan for lost devices.", service: "cybersecurity" },
  { id: "ai", w: 2, q: "Do you have written rules about what staff may put into AI tools like ChatGPT?", fix: "Write a one-page AI use policy and pick approved business-grade tools.", service: "ai-governance" },
  { id: "wire", w: 2, q: "Are changes to payment or wiring instructions always confirmed by phone, using a known number?", fix: "Make phone verification of payment changes a firm-wide rule.", service: "cybersecurity" },
  { id: "incident", w: 2, q: "If you were hacked tomorrow, is there a written plan for who does what and who to call?", fix: "Write a short incident response plan before you need it.", service: "compliance" },
  { id: "risk", w: 2, q: "Have you done a documented security risk assessment in the last 12 months (for example a HIPAA risk analysis or a WISP review)?", fix: "Run and document a risk assessment every year.", service: "compliance" },
];

// ayvant.ca: the same check, with British Columbia examples.
const CA_TEXT = {
  risk: "Have you done a documented security risk assessment in the last 12 months (for example a privacy impact assessment, or a review of your privacy policies under BC's PIPA)?",
};
export const QUESTIONS = IS_CA ? QUESTIONS_ALL.map((q) => (CA_TEXT[q.id] ? { ...q, q: CA_TEXT[q.id] } : q)) : QUESTIONS_ALL;

// Where each fix points: a service page on whichever site this is.
const CA_SERVICE = { cybersecurity: "cybersecurity", "managed-it": "it-support", "ai-governance": "it-consulting", compliance: "it-consulting" };
export function serviceLink(id) {
  if (IS_CA) {
    const s = SERVICES_CA.find((x) => x.id === CA_SERVICE[id]);
    return { name: s.name, href: s.href };
  }
  return { name: SERVICES.find((s) => s.id === id).name, href: servicePath(id) };
}

export const ANSWERS = [["yes", "Yes"], ["no", "No"], ["unsure", "Not sure"]];

// "No" loses the full weight, "Not sure" loses 60% of it.
export const score = (answers) => {
  const total = QUESTIONS.reduce((s, q) => s + q.w, 0);
  const lost = QUESTIONS.reduce((s, q) => s + (answers[q.id] === "no" ? q.w : answers[q.id] === "unsure" ? 0.6 * q.w : 0), 0);
  return Math.round(100 - (lost / total) * 100);
};

export const tier = (n) =>
  n >= 80
    ? { label: "Well protected", line: "You've got the essentials in place. A review can confirm it and catch what's easy to miss." }
    : n >= 50
      ? { label: "Some real gaps", line: "Good foundations, but a few gaps attackers look for first. Most are quick to close." }
      : { label: "High risk", line: "Several of the controls that stop common attacks are missing. Worth fixing soon." };
