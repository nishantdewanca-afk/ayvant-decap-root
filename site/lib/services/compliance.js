// Compliance service page content. First draft written for Ayvant to review.
export const compliance = {
  slug: "compliance",
  name: "Compliance",
  seo: {
    title: "HIPAA, Legal & FTC Safeguards Compliance IT | Ayvant",
    description: "IT compliance for law firms, medical and dental practices and CPAs: HIPAA Security Rule, client confidentiality and the FTC Safeguards Rule. Risk assessments, policies, WISP and audit-ready records.",
  },
  hero: {
    eyebrow: "IT compliance services",
    lines: ["Compliance you can", "<em>prove,</em> not just", "promise."],
    sub: "HIPAA for medical and dental practices, client confidentiality for law firms, and the FTC Safeguards Rule for CPA and financial firms. We put the safeguards in place and keep the records that show it.",
    facts: ["Since 1985", "HIPAA, legal and finance rules", "Serving all 50 states"],
  },
  answer: {
    q: "What is IT compliance?",
    a: "IT compliance means your technology meets the security rules that apply to your profession, and you can show it. For a medical or dental practice that is the HIPAA Security Rule; for a law firm, the duty to protect client confidences; for CPA and financial firms, the FTC Safeguards Rule. Ayvant runs risk assessments, puts the required safeguards in place, writes the policies and keeps audit-ready records.",
  },
  about: {
    title: "The rules ask two things: protect it, and prove you did.",
    body: [
      "Most compliance trouble at small firms isn't a dramatic failure. It's a risk analysis that was never done, a policy written years ago that nobody follows, or a vendor that never signed the right agreement.",
      "Then an auditor, an insurer or a large client asks a simple question, and nobody can find the answer.",
      "We make compliance part of how your IT runs, not a binder on a shelf. The safeguards are in place, the documents are current, and when someone asks, you can hand them the proof.",
    ],
    img: "https://images.unsplash.com/photo-1758876022193-7c17d38ef980?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    alt: "Professional reviewing paperwork at a desk beside a laptop",
  },
  industriesTitle: "Three professions. Three rulebooks.",
  industries: [
    {
      id: "medical",
      name: "Medical & dental",
      title: "HIPAA, beyond the front-desk signature.",
      body: "The HIPAA Security Rule requires practices to protect electronic patient information with administrative, physical and technical safeguards, starting with an accurate, documented risk analysis. Vendors who handle patient data need Business Associate Agreements.",
      points: ["HIPAA security risk analysis and remediation plan", "Security policies and staff training records", "Business Associate Agreement tracking"],
    },
    {
      id: "law",
      name: "Law firms",
      title: "Confidentiality, competence and the client's questions.",
      body: "ABA Model Rule 1.6(c) asks lawyers to make reasonable efforts to prevent unauthorized access to client information, and Rule 1.1 expects competence with relevant technology. Corporate clients and insurers increasingly send detailed security questionnaires.",
      points: ["Written security policies matched to your practice", "Support answering client and insurer security questionnaires", "Incident response plan aligned with your notification duties"],
    },
    {
      id: "finance",
      name: "CPAs & finance",
      title: "The Safeguards Rule, made workable.",
      body: "The FTC Safeguards Rule requires many accounting and financial firms to keep a written information security program, appoint a qualified individual, run risk assessments, use MFA and encryption, and notify the FTC of certain breaches. Tax professionals are also asked to keep a written security plan.",
      points: ["Written information security program (WISP)", "Risk assessments, MFA and encryption evidence", "Annual reporting support for your qualified individual"],
    },
  ],
  benefits: [
    ["Audit-ready records", "Policies, risk assessments and evidence in one place, ready when someone asks."],
    ["Know your gaps", "A clear, prioritized list of what's missing, instead of a vague worry."],
    ["Win the questionnaire", "Confident answers for client, insurer and vendor security questionnaires."],
    ["Policies people follow", "Plain-English policies written for how your firm actually works."],
    ["IT and compliance, together", "The team that writes the policy is the team that makes it true in your systems."],
    ["Peace of mind", "Fewer surprises when a regulator, insurer or large client comes calling."],
  ],
  included: [
    { group: "Assess", items: [
      ["Security risk assessment", "A documented review of risks to client or patient data, the way the rules expect."],
      ["Gap analysis", "Where your current setup falls short of the rules that apply to you."],
      ["Vendor and BAA review", "Which vendors touch sensitive data, and whether the right agreements are signed."],
    ]},
    { group: "Implement", items: [
      ["Technical safeguards", "MFA, encryption, access controls, logging and backups configured to match the rules."],
      ["Written policies", "Security, acceptable use, incident response and AI use policies."],
      ["WISP for financial firms", "A written information security program built for your firm."],
      ["Staff training", "Short, practical training with records of who completed it."],
    ]},
    { group: "Document", items: [
      ["Evidence library", "Screenshots, reports and records that show your safeguards are working."],
      ["Incident response plan", "Who does what, and who needs to be notified, if something goes wrong."],
      ["Questionnaire support", "Help completing cyber insurance and client security questionnaires."],
    ]},
    { group: "Maintain", items: [
      ["Regular reviews", "Periodic check-ins to keep policies and safeguards current."],
      ["Annual risk assessment refresh", "Updated as your firm, systems and the rules change."],
      ["Audit support", "We help you prepare for audits and answer technical questions."],
    ]},
  ],
  processTitle: "From 'are we compliant?' to 'here's the proof.'",
  process: [
    ["Free assessment", "A 45-minute conversation with a senior engineer about the rules you're under and where you stand today. No obligation."],
    ["Risk assessment and gap analysis", "We review your systems, data and vendors against the rules that apply, and document what we find."],
    ["Written remediation plan", "A prioritized, plain-English plan with a realistic timeline. Nothing starts until you're comfortable."],
    ["Safeguards and policies", "We put the technical controls in place and write the policies, WISP or plans you need."],
    ["Train and document", "Staff training, evidence collection and an organized compliance file you can actually find."],
    ["Review and stay current", "Regular reviews and an annual refresh, so compliance doesn't quietly drift."],
  ],
  review: "manuel",
  ctas: {
    mid: ["Not sure if you'd pass an audit?", "In 45 minutes, a senior engineer will help you see which rules apply, where the gaps are, and what to fix first."],
    process: ["Ready to get it documented?", "Pick a time that suits you, or call and talk to a real person today."],
  },
  faqs: [
    ["What does IT compliance mean for a small medical, dental, legal or accounting firm?", "It means your technology meets the security rules for your profession and you can prove it. That typically includes a documented risk assessment, technical safeguards like MFA, encryption and backups, written policies, staff training, vendor agreements and an incident response plan."],
    ["Do you help with HIPAA compliance for dental and medical offices?", "Yes. We perform HIPAA security risk analyses, put administrative, physical and technical safeguards in place, write policies, track Business Associate Agreements and keep the records an auditor would ask for. We can sign a BAA with your practice."],
    ["What is the FTC Safeguards Rule and does it apply to CPAs?", "The FTC Safeguards Rule requires many non-bank financial institutions, which can include tax preparers and accounting firms, to keep a written information security program with specific safeguards such as risk assessments, MFA and encryption. We help firms build and maintain that program; your own advisors can confirm how the rule applies to you."],
    ["What is a WISP?", "A written information security program, or WISP, is the document that describes how your firm protects customer information: who is responsible, what the risks are, which safeguards are in place and how you respond to incidents. It's expected under the FTC Safeguards Rule and recommended by the IRS for tax professionals."],
    ["What do law firms need for cybersecurity compliance?", "There's no single law-firm security rule, but ABA Model Rule 1.6(c) and state equivalents require reasonable efforts to protect client information, and many clients and insurers set their own requirements. We help you put reasonable, documented safeguards in place and answer client security questionnaires."],
    ["Are you a law firm or a certified auditor?", "No. We're an IT, cybersecurity and compliance provider. We implement and document the technical and administrative safeguards; for legal interpretation or formal certification, we work alongside your attorney, compliance officer or auditor."],
    ["How long does it take to become compliant?", "It depends on your size, your current setup and the rules that apply. After the free assessment you get a written plan with a realistic timeline before anything starts."],
    ["Do you provide compliance services outside California?", "Yes. We're based in Irvine, California and support law, medical, dental and financial firms across the United States."],
  ],
};
