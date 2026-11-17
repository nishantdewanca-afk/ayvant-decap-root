// Industry page content. First drafts written for Ayvant to review.
const law = {
  slug: "law-firms",
  name: "Law firms",
  phrase: "law firms",
  seo: {
    title: "IT & Cybersecurity for Law Firms | Managed IT for Attorneys | Ayvant",
    description: "Managed IT, cybersecurity, compliance and AI governance for law firms. Protect privileged files, stop wire fraud, support remote attorneys and answer client security questionnaires.",
  },
  hero: {
    eyebrow: "IT for law firms",
    lines: ["Technology that keeps", "<em>privilege</em>", "privileged."],
    sub: "Managed IT, cybersecurity, compliance and AI governance for law firms of every size. Your files stay reachable for your attorneys, and closed to everyone else.",
    facts: ["Since 1985", "A real person answers", "Serving all 50 states"],
  },
  answer: {
    q: "What IT and cybersecurity does a law firm need?",
    a: "A law firm needs reliable support for document management, billing and e-filing tools; secure remote access for attorneys; email security that stops phishing and wire fraud; multi-factor sign-in, encryption and tested backups; written security policies; and clear rules for AI tools. Together, these support your duty under ABA Model Rule 1.6(c) to make reasonable efforts to protect client information.",
  },
  challenges: [
    ["Wire and settlement fraud", "Criminals impersonate clients, opposing counsel or banks to redirect funds. One convincing email can cost a client's settlement."],
    ["Attorneys everywhere", "Court, home, the office and the airport. Remote access has to be easy for attorneys and hard for everyone else."],
    ["Client security questionnaires", "Corporate clients and insurers want detailed answers about how you protect their data, often before they hire you."],
    ["AI and privilege", "Associates and staff are trying AI tools. Without rules, confidential matter details can end up in places you can't control."],
  ],
  rules: [
    ["ABA Model Rule 1.6(c)", "Reasonable efforts to prevent unauthorized access to or disclosure of client information."],
    ["ABA Model Rule 1.1", "Competence, including understanding the benefits and risks of relevant technology."],
    ["ABA Formal Opinion 512", "Guidance on using generative AI while protecting confidences and reviewing output."],
    ["State breach notification laws", "Every state has rules on notifying people when their personal information is exposed."],
  ],
  services: {
    "ai-governance": "An AI use policy and approved tools that keep matter details out of public chatbots.",
    cybersecurity: "Email security and verification steps that make wire fraud far harder to pull off.",
    "managed-it": "Support for document management, billing and e-filing, plus remote access that works from court.",
    compliance: "Written policies and evidence for client and insurer security questionnaires.",
  },
  faqs: [
    ["What cybersecurity does a small law firm need?", "At minimum: multi-factor sign-in on email and remote access, email filtering for phishing and impersonation, monitored endpoint protection, encryption on laptops, tested backups, staff training and a written incident response plan. Ayvant puts these in place and keeps them running."],
    ["How can a law firm prevent wire fraud?", "Combine technology and process. We secure and monitor email accounts, flag lookalike domains and impersonation attempts, and help you adopt a simple rule: wiring instructions are always confirmed by phone using a known number, never by email alone."],
    ["Can you help us answer client security questionnaires?", "Yes. We help you put the right safeguards in place, document them, and answer client and insurer questionnaires accurately and confidently."],
    ["Can our attorneys use AI tools safely?", "Yes, with a policy and the right tools. We help you approve business-grade AI tools, set rules for confidential and privileged information, and keep a human review step, in line with ABA Formal Opinion 512. Your ethics counsel remains the final word on legal questions."],
    ["Do you support law firms outside California?", "Yes. We're based in Irvine, California and support law firms across the United States, mostly remotely."],
  ],
};

const medical = {
  slug: "medical-dental",
  name: "Medical & dental",
  phrase: "medical and dental practices",
  seo: {
    title: "IT & Cybersecurity for Medical and Dental Practices | HIPAA IT | Ayvant",
    description: "Managed IT, cybersecurity, HIPAA compliance and AI governance for private medical and dental practices. Keep practice software, imaging and patient data running and protected.",
  },
  hero: {
    eyebrow: "IT for medical & dental practices",
    lines: ["Keep the schedule", "running and patient", "data <em>protected.</em>"],
    sub: "Managed IT, cybersecurity, HIPAA compliance and AI governance for private medical and dental practices. Not hospitals: offices like yours, where the front desk can't afford a slow morning.",
    facts: ["Since 1985", "HIPAA safeguards", "BAA on request"],
  },
  answer: {
    q: "What IT support does a medical or dental practice need?",
    a: "A private practice needs dependable support for practice management software, imaging and front-desk systems; email security and endpoint protection; encrypted devices and tested backups; and HIPAA Security Rule safeguards with a documented risk analysis, policies, staff training and Business Associate Agreements. As AI scribes and assistants arrive, it also needs clear rules for patient data.",
  },
  challenges: [
    ["Ransomware stops appointments", "When practice software or imaging is locked, the whole day's schedule stops with it."],
    ["HIPAA paperwork", "A current risk analysis, policies, training records and BAAs are easy to let slide, until someone asks for them."],
    ["Software vendor ping-pong", "Practice software, imaging, phones and the internet provider all blame each other. Someone has to own the problem."],
    ["AI scribes and chatbots", "New AI tools promise time savings, but patient information has to stay inside safeguards and agreements."],
  ],
  rules: [
    ["HIPAA Security Rule", "Administrative, physical and technical safeguards for electronic patient information."],
    ["HIPAA risk analysis", "An accurate, documented assessment of risks to patient data, kept current."],
    ["Business Associate Agreements", "Required with vendors that create, receive or store patient information for you."],
    ["HIPAA Breach Notification Rule", "Rules for notifying patients and HHS when unsecured patient information is exposed."],
  ],
  services: {
    "ai-governance": "Review of AI scribes and assistants, BAA checks, and clear rules for patient data.",
    cybersecurity: "Protection for practice software, imaging and email, with tested backups to recover fast.",
    "managed-it": "Front-desk, clinical room and imaging support, and we deal with your software vendors.",
    compliance: "HIPAA risk analysis, policies, training records and BAA tracking, ready for an audit.",
  },
  faqs: [
    ["Do you offer HIPAA compliant IT services for dental offices?", "Yes. We support dental and medical practices with HIPAA Security Rule safeguards, risk analysis, policies, staff training and records, and we can sign a Business Associate Agreement with your practice."],
    ["Can you support our practice management and imaging software?", "Yes. We support the workstations, servers, network and devices those systems run on, and we coordinate directly with your software vendors on updates and issues."],
    ["What happens if our practice gets hit by ransomware?", "Call us; we offer 24x7 emergency support. We work to contain the problem, restore from tested backups, and help you document what happened for your insurer and any HIPAA notification requirements."],
    ["Is it safe to use AI scribes in our practice?", "It can be, with the right vendor and settings. We review the tool, check that a BAA is available, configure access and data settings, and set rules for what staff may enter."],
    ["Do you work with hospitals?", "Our focus is private medical and dental practices and similar offices, rather than hospitals and large health systems."],
  ],
};

const finance = {
  slug: "cpa-finance",
  name: "CPAs & finance",
  phrase: "CPA and financial firms",
  seo: {
    title: "IT & Cybersecurity for CPA Firms & Financial Advisors | FTC Safeguards | Ayvant",
    description: "Managed IT, cybersecurity, FTC Safeguards Rule compliance and AI governance for CPA, accounting, tax and financial firms. WISP support, MFA, encryption and tax-season-ready IT.",
  },
  hero: {
    eyebrow: "IT for CPAs & financial firms",
    lines: ["Ready for tax season.", "Ready for the", "<em>Safeguards Rule.</em>"],
    sub: "Managed IT, cybersecurity, compliance and AI governance for CPAs, accountants, tax preparers, advisors and investment bankers. Your clients trust you with their numbers. We help you keep that trust.",
    facts: ["Since 1985", "WISP support", "Serving all 50 states"],
  },
  answer: {
    q: "What IT and security does a CPA or financial firm need?",
    a: "CPA, tax and financial firms need a written information security program, multi-factor authentication, encryption of customer data, monitored endpoint protection, email security against phishing and wire fraud, secure client portals, tested backups and staff training, along with IT that holds up under tax-season volume. Many of these are expected under the FTC Safeguards Rule.",
  },
  challenges: [
    ["Tax-season pressure", "Volume doubles, deadlines stack up, and phishing emails are timed to match. Downtime is at its most expensive."],
    ["The Safeguards Rule", "A written security program, a qualified individual, risk assessments, MFA and encryption, all expected and documented."],
    ["Wire and payment fraud", "Fake invoices and changed bank details target firms that move or advise on money."],
    ["Client data in AI tools", "Tax returns and statements must never be pasted into tools you don't control."],
  ],
  rules: [
    ["FTC Safeguards Rule", "A written information security program with specific safeguards for customer information."],
    ["FTC breach notification", "Notifying the FTC of certain security events involving customer information."],
    ["IRS Publication 4557", "IRS guidance for tax professionals on safeguarding taxpayer data and keeping a security plan."],
    ["SEC Regulation S-P", "Privacy and safeguarding requirements for advisers and broker-dealers."],
  ],
  services: {
    "ai-governance": "Rules and approved tools so client financials never land in public AI chatbots.",
    cybersecurity: "MFA, encryption and phishing defense tuned for deadline-season attacks.",
    "managed-it": "Tax and accounting software, client portals and scanners ready before the rush.",
    compliance: "A written information security program and the evidence to back it up.",
  },
  review: "manuel",
  faqs: [
    ["Does the FTC Safeguards Rule apply to CPA firms?", "It can. The rule covers many non-bank financial institutions, which can include tax preparers and accounting firms. We help you build and maintain the written information security program and safeguards it expects; your own advisors can confirm exactly how it applies to you."],
    ["Can you write our WISP?", "Yes. We help you create a written information security program that reflects how your firm actually works, and keep it updated as your systems change."],
    ["How do you get us ready for tax season?", "Before the rush we check your tax and accounting software, updates, backups, scanners, remote access and client portals, set up seasonal staff, and stay on call throughout."],
    ["How can we protect clients from wire fraud?", "We secure and monitor email, flag impersonation attempts, and help you adopt a simple rule: payment instructions are always verified by phone using a known number."],
    ["Do you support financial firms outside California?", "Yes. We're based in Irvine, California and support CPA, accounting and financial firms across the United States."],
  ],
};

export const INDUSTRY_PAGES = { "law-firms": law, "medical-dental": medical, "cpa-finance": finance };
