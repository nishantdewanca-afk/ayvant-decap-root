---
title: Your Employees Are Using AI with Patient Data. Do You Know What They Are
  Uploading?
date: 2026-06-04T14:43:00.000-07:00
author: Ayvant Cybersecurity Team
excerpt: Healthcare staff are uploading patient data to consumer AI tools every
  day. Here is why a signed policy is not enough and what HIPAA-compliant AI
  actually looks like.
featuredImage: /images/uploads/artificial-intelligence-in-healthcare.png
tags:
  - IT Support
featured: false
readTime: 5
draft: false
seo:
  metaTitle: Your Staff Are Using AI with Patient Data. Is It HIPAA Compliant?
  metaDescription: Consumer AI platforms like ChatGPT and Claude have no BAA and
    no HIPAA safeguards. Here is what healthcare organizations need to do to
    stay compliant while using AI.
---
*An AI policy in your HR handbook is insufficient. Healthcare organizations require comprehensive measures to ensure ongoing compliance.*

Recently, I met with the IT director of a large Southern California medical center with twenty offices, hundreds of staff, and tens of thousands of patients.

I asked a direct question: How are you managing employees' use of AI tools?

He explained that they had recently updated their HR handbook to include an AI acceptable use policy, which all staff had reviewed and signed.

I followed up with another question.*"That policy outlines expectations, but how are you monitoring actual employee behavior? How do you track what data is uploaded, what queries are sent, and whether the policy is enforced in practice?"*

He went quiet. There was no answer.

This lack of response reflects the current state of AI governance in most healthcare organizations. The consequences of this gap are real and significant.

## The Unaddressed Problem in Healthcare AI Governance

Healthcare staff use AI tools daily to increase efficiency. Nurses summarize patient notes, administrators draft referral letters, billing teams process insurance documentation, and clinic managers write reports.

While this appears to improve productivity, it introduces compliance risks that many IT and compliance teams have not fully addressed.

If an employee uses the free web version of ChatGPT or Claude on any device and enters patient information, that data leaves your organization's controlled environment. It is sent to a consumer AI platform without a Business Associate Agreement, HIPAA safeguards, accessible audit trails, or any means of detection.

Under HIPAA, any tool that receives, processes, or transmits Protected Health Information (PHI) on behalf of a covered entity must operate under a signed Business Associate Agreement (BAA). Consumer AI platforms like the free or personal versions of ChatGPT and Claude do not offer BAAs and are not appropriate for any workflow involving patient data.

This is not a rare occurrence. It is happening in clinics, hospitals, and health systems of all sizes. Staff are not acting maliciously; most are unaware they are creating compliance issues and are simply seeking efficiency.

This lack of awareness makes it difficult to manage the issue through policy documents alone.

## Why a Signed Policy Is Not a Control

A policy in an HR handbook serves as an administrative safeguard, as required by HIPAA. However, HIPAA also mandates technical safeguards, which are distinct from administrative measures.

Administrative safeguards instruct staff on required actions. Technical safeguards enforce, monitor, and provide evidence of compliance.

For example, hospitals do not rely solely on policies to prevent unauthorized access to medication storage. They implement physical locks, access controls, and entry logs. Policies explain the rules; technical controls enforce them.

AI governance in healthcare should follow the same approach.

When healthcare IT leaders are asked the following questions, they often cannot provide answers:

\* Which AI tools are your employees currently using, on which devices, and through which accounts?

\* Can you produce an audit log of queries sent to an AI platform in the last 30 days?

\* Do you know whether any of those queries contained patient names, diagnoses, or document uploads?

\* If a breach occurred through an AI tool today, what evidence would you have to demonstrate your safeguards were in place?

A policy document cannot address these questions. Technical controls can.

## What Compliant AI Use in Healthcare Actually Looks Like

Major AI platforms now offer enterprise-grade solutions designed for healthcare organizations that require compliance. Both Anthropic (Claude) and OpenAI (ChatGPT) provide enterprise plans that address HIPAA requirements.

These enterprise solutions offer the following features:

### Business Associate Agreements

A BAA is the legal foundation of HIPAA-compliant AI use. It establishes the AI provider as a business associate of your organization, creates legal accountability for how your data is handled, and defines the obligations of both parties under HIPAA.

Claude Enterprise: Anthropic's HIPAA-ready Enterprise plan includes a click-to-accept BAA directly within organization settings, covering both API usage and the Enterprise plan under a single agreement. Anthropic also operates under BAAs with AWS, Google Cloud, and Microsoft Azure, making it the only major AI model to hold BAAs with all three major cloud providers.

ChatGPT Enterprise: OpenAI's enterprise plan includes a BAA covering the use of ChatGPT Enterprise for workflows involving PHI, with additional security controls and data handling commitments.

It is critical to note that free, personal, and team consumer versions of these platforms do not include BAAs and must never be used with patient data.

### Data Privacy and Training Opt-Out

Consumer AI platforms may use conversations for model improvement. Enterprise healthcare plans ensure your organization's data, including PHI, is not used for model training. Patient data remains within your control.

### Access Controls and User Management

Enterprise deployments enable IT teams to control user access, permissions, and approved devices. This separation allows organizations to distinguish between personal and enterprise-approved versions and identify staff using unsanctioned tools.

### Audit Logging and Query Monitoring

Enterprise AI platforms allow administrators to monitor usage, review queries, identify patterns, and generate audit logs. If staff upload documents with patient information or submit queries containing PHI, these actions are recorded and can be flagged. This is effective enforcement of an AI policy.

### Configurable Guardrails

Enterprise platforms enable organizations to configure usage policies within the platform. Restrictions on input types and usage boundaries can be set, embedding guidelines directly into the tool rather than relying solely on staff adherence to handbook policies.

## The Specific Risk of Unsanctioned Consumer AI

The following are the primary risks when healthcare staff use consumer AI platforms with patient data:

### Data sent outside your compliance boundary

Consumer AI platforms process data on their own infrastructure. When staff enter patient information into free versions of Claude or ChatGPT, the data is transmitted to third-party systems without contractual HIPAA protections, constituting a potential PHI breach under the HIPAA Security Rule.

### No audit trail

Consumer accounts provide no organizational visibility into submitted data. Logs cannot be retrieved. In the event of an Office for Civil Rights (OCR) investigation, there will be no evidence of actions taken, data shared, or safeguards implemented.

### No ability to enforce policy

If staff use personal ChatGPT accounts on work or personal devices during work hours, HR policy alone is insufficient. Without technical controls, there is no enforcement mechanism or awareness of these activities.

### Compounding risk across multiple staff members

In organizations with many offices and staff, even limited use of consumer AI with patient data results in significant aggregate risk. The exposure quickly escalates.

HIPAA penalties for unsanctioned disclosure of PHI range from $100 to $50,000 per violation, with annual caps up to $1.9 million per violation category. A single staff member uploading patient records to a consumer AI platform could constitute multiple violations depending on the number of records involved.

## What Healthcare Organizations Need to Do Now

Moving beyond policy-only governance is essential. A properly structured AI program for healthcare organizations should include the following steps:

### Step 1: Assess what AI tools are actually being used

Visibility is the first step in governing AI use. Conduct a technical review of network traffic, device management logs, and endpoint activity to identify which AI platforms staff access and how often. Many healthcare IT teams are surprised by these findings.

### Step 2: Block unsanctioned AI platforms at the network level

Block or restrict consumer AI platforms at the firewall and DNS level for organization-managed devices and networks. While this does not eliminate all risk, especially from personal devices on cellular data, it significantly reduces exposure and demonstrates organizational commitment to policy enforcement.

### Step 3: Deploy an enterprise AI platform with HIPAA safeguards

Provide staff with a sanctioned, compliant alternative. Blocking consumer AI without offering a compliant replacement creates operational friction. Enterprise plans for Claude and ChatGPT are designed for organizational deployment and include BAAs, audit logging, and access controls required for compliance.

### Step 4: Enable HIPAA configuration and sign the BAA

For Claude Enterprise, HIPAA configuration must be enabled by the primary owner in organization settings; it is not automatic. The BAA must be reviewed and accepted before PHI workflows begin. This is a one-time, irreversible configuration change unless a new contracting process is initiated.

### Step 5: Build monitoring into your ongoing compliance program

AI governance requires ongoing attention. Query patterns and use cases evolve, and staff may adopt new tools. Compliance programs should include regular AI usage log reviews, periodic policy updates, and a safe mechanism for staff to report AI-related concerns. The objective is to maintain visibility and ensure evidence of controls when issues arise.

## A Note on What the Enterprise BAA Does and Does Not Cover

Before deploying an enterprise AI platform, healthcare organizations must understand the specific scope of BAA coverage, which is often more limited than expected.

For Claude Enterprise with HIPAA enabled, the BAA covers PHI processing through the sanctioned enterprise platform. It does not cover user behavior, nor does it retroactively protect data submitted through consumer accounts. Certain products, such as the Cowork desktop agent and consumer-facing Claude.ai plans, are excluded from the BAA.

The BAA governs the vendor's handling of your data. Implementation, access controls, monitoring, and staff training remain your responsibility. A signed BAA is foundational but not a complete compliance solution.

The same applieThe same applies to OpenAI's enterprise offering: the BAA covers ChatGPT Enterprise only and does not extend to personal ChatGPT Plus accounts, even if used by the same employee.ion matters because organizations sometimes believe that signing an enterprise BAA with one vendor retroactively addresses the risk created by staff using consumer accounts. It does not. The two environments need to be managed separately.

## The Question Every Healthcare IT Leader Needs to Answer

Go back to the conversation I described at the beginning of this post.

The IT director's experience is common among healthcare organizations. Many have updated policies, conducted training, and met administrative safeguard requirements, but have not implemented the technical controls necessary for enforcement, monitoring, and evidence.

AI adoption will continue as it increases staff productivity. The key issue is whether staff use a sanctioned, compliant, and monitored platform or a consumer tool that creates unmonitored exposure.

A handbook policy instructs staff, but only a properly deployed enterprise AI platform with HIPAA configuration, a signed BAA, and active monitoring enforces, tracks, and protects your organization during regulatory inquiries.

If you lead IT or compliance and cannot answer the earlier monitoring and enforcement questions, this is the gap to address immediately.

Patients whose records are handled by your staff deserve more than an unchecked policy.

**Is your organization's AI use actually under control?**

Ayvant provides cybersecurity and IT compliance services for healthcare organizations across Greater Vancouver and the Los Angeles Area. We help clinics, medical offices, and healthcare networks assess their current AI exposure, deploy enterprise-compliant AI tools, and build the monitoring infrastructure that turns policy into practice.

**→ Book a free AI risk assessment: Booking Link**

**→ Email:** info@ayvant.com / hello@ayvant.ca

**→ Call us: (949) 649-4114 / (778) 909-5896**
