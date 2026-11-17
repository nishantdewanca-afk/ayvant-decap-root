// ayvant.ca page titles: "{title} | Ayvant IT & Cybersecurity" when it fits, shorter when it doesn't.
import { pageMeta } from "@/lib/seo";

// Search results show about 60 characters of a title, so the brand is shortened or dropped when a title is long.
export const caTitle = (title) => {
  for (const t of [`${title} | Ayvant IT & Cybersecurity`, `${title} | Ayvant`]) if (t.length <= 60) return t;
  const first = title.split(" | ")[0];
  if (first !== title) return `${first} | Ayvant`.length <= 60 ? `${first} | Ayvant` : first;
  return title;
};
export const caMeta = ({ title, ...rest }) => pageMeta({ title: caTitle(title), ...rest });

export const CA_PAGES = {
  home: { path: "/", title: "Vancouver IT Support & Cybersecurity for Law Firms", description: "Ayvant IT & Cybersecurity provides managed IT support and cybersecurity services for law firms, accountants, and businesses in Vancouver and the Lower Mainland, BC.", og: ["Your Business Deserves Rock-Solid IT Security", "Ayvant IT & Cybersecurity"] },
  about: { path: "/pages/about/", title: "About Us", description: "Learn about Ayvant IT & Cybersecurity - your trusted local IT partner in Langley, serving Vancouver and the Lower Mainland with human-first IT support.", og: ["Real People. Real Support.", "About Ayvant"] },
  contact: { path: "/pages/contact/", title: "Contact Us", description: "Contact Ayvant IT & Cybersecurity for IT support and cybersecurity services in Vancouver and the Lower Mainland. Call (604) 239-2090.", og: ["Let's Start a Conversation", "Contact Us"] },
  "ai-governance": { path: "/pages/ai-governance/", title: "AI Governance for BC Law Firms, Accountants & Healthcare", description: "AI governance in Vancouver and the Lower Mainland: find shadow AI, set an AI use policy, protect client data under BC PIPA, and train your team. Free AI usage assessment.", og: ["Use AI at work, without the risk.", "AI Governance"] },
  blog: { path: "/learning-hub/", title: "Learning Hub: IT & Cybersecurity Insights", description: "Expert insights on cybersecurity, IT support, and technology solutions for law firms and accounting practices in Vancouver and the Lower Mainland.", og: ["IT & Cybersecurity Insights", "Learning Hub"] },
};

// Policies, in content/legal/ca/<file>.md, at their original addresses.
export const CA_LEGAL = {
  "privacy-policy": "privacy-policy",
  "terms-of-service": "terms-of-service",
  "cookie-policy": "cookie-policy",
  accessibility: "accessibility",
};
