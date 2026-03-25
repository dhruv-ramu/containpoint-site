/**
 * Resource articles — canonical URLs: /resources/{slug}
 * Optional metaTitle / metaDescription override tab title and search snippet.
 */

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  sections: ArticleSection[];
  keyTakeaways?: string[];
  metaTitle?: string;
  metaDescription?: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "what-is-spcc",
    title: "What is SPCC?",
    metaTitle: "What Is SPCC? Spill Prevention Basics",
    metaDescription:
      "Learn what the EPA SPCC program covers, who it applies to, and how facilities document spill prevention for oil storage.",
    description:
      "A plain-language overview of the Spill Prevention, Control, and Countermeasure program and why facilities document oil storage.",
    publishedAt: "2025-03-01",
    sections: [
      {
        heading: "What the rule is about",
        paragraphs: [
          "SPCC is a federal framework for preventing oil discharges from non-transportation-related onshore facilities. Facilities prepare a plan that describes how oil is stored, how spills are prevented, and how the site would respond if a release occurred.",
          "The goal is practical prevention and preparedness—not a one-size-fits-all checklist, but a site-specific record of equipment, inspections, and responsibilities.",
        ],
      },
      {
        heading: "How this differs from other environmental programs",
        paragraphs: [
          "SPCC focuses specifically on oil and oil storage. It sits alongside other obligations a site may have (stormwater, waste, air), but the documentation and inspection cadence are tuned to tanks, containers, transfer areas, and secondary containment.",
        ],
      },
      {
        heading: "Why operators invest in good records",
        paragraphs: [
          "Inspectors and auditors expect plans, amendments, and field records to tell a consistent story. Gaps between what the plan says and what happened on the ground are a common pain point—especially when records live in email threads or ad hoc files.",
        ],
      },
    ],
    keyTakeaways: [
      "SPCC is about spill prevention and countermeasures for oil storage at qualifying facilities.",
      "Plans and field activity should stay aligned over time.",
      "Strong records make inspections and audits far less disruptive.",
    ],
  },
  {
    slug: "who-needs-spcc",
    title: "Who needs an SPCC plan?",
    metaDescription:
      "Understand common triggers for SPCC planning, how oil storage is counted, and when to confirm requirements with your team or counsel.",
    description:
      "Criteria and thresholds that typically trigger SPCC planning—and when to dig deeper with your compliance team.",
    publishedAt: "2025-03-01",
    sections: [
      {
        heading: "The usual starting point",
        paragraphs: [
          "Facilities that store oil above certain aggregate thresholds generally need an SPCC plan prepared in accordance with the rule. The details depend on how oil is stored, the types of containers, and whether the facility qualifies for streamlined approaches.",
          "This article is general context only—not legal advice. Always confirm against the current rule text and your site’s facts.",
        ],
      },
      {
        heading: "Counting storage thoughtfully",
        paragraphs: [
          "Teams typically inventory tanks and containers, understand what counts toward capacity, and document exclusions where they apply. The point is a defensible, well-organized picture of on-site oil—not a back-of-the-envelope guess.",
        ],
      },
      {
        heading: "Who often shows up in scope",
        paragraphs: [
          "Manufacturing plants, terminals, power generation, data centers with backup fuel, trucking and equipment yards, and agricultural operations with bulk oil are common examples. Consultants often support multiple clients in these categories with similar inspection and documentation needs.",
        ],
      },
    ],
    keyTakeaways: [
      "Thresholds and counting methodology drive whether a plan is required.",
      "Industry examples help, but the facility-specific analysis matters most.",
    ],
  },
  {
    slug: "spcc-plan-requirements",
    title: "SPCC plan requirements",
    metaTitle: "SPCC Plan Requirements — What Belongs in the Plan",
    metaDescription:
      "Outline of what SPCC plans typically address: facility layout, oil storage, prevention measures, training, and how plans stay current after changes.",
    description:
      "What a strong SPCC plan usually covers, and how teams keep it aligned with real-world changes.",
    publishedAt: "2025-03-15",
    sections: [
      {
        heading: "Plan contents at a high level",
        paragraphs: [
          "Plans describe the facility, list oil storage, explain how spills are prevented, and document response considerations appropriate to the site. They also address administration: who reviews the plan, how amendments are made, and how personnel are trained.",
        ],
      },
      {
        heading: "Keeping the plan and the field in sync",
        paragraphs: [
          "When tanks are added, removed, or changed, the plan often needs an amendment. The same goes for significant operational changes. The operational risk is a plan that reads correctly on paper but no longer matches daily practice.",
        ],
      },
      {
        heading: "Where software helps",
        paragraphs: [
          "A structured system of record links inspections, corrective actions, and training to assets and dates. That makes it easier to show—not just assert—that the program is active and maintained.",
        ],
      },
    ],
    keyTakeaways: [
      "Plans are living documents tied to real equipment and procedures.",
      "Amendments should follow meaningful change—not only annual reminders.",
    ],
  },
  {
    slug: "environmental-outcomes-execution",
    title: "Why environmental outcomes depend on execution",
    metaTitle: "SPCC and Environmental Sustainability — Why Execution Matters",
    metaDescription:
      "Environmental outcomes at facilities depend on execution. Learn how SPCC compliance, inspections, and operational discipline reduce real-world risk.",
    description:
      "How day-to-day SPCC execution, not just policy or intent, drives real environmental outcomes at regulated facilities.",
    publishedAt: "2026-03-24",
    sections: [
      {
        heading: "Environmental impact is operational",
        paragraphs: [
          "Environmental sustainability is often discussed in terms of long-term goals and commitments. At the facility level, the reality is more immediate. Environmental outcomes are shaped by how consistently day-to-day operations are executed.",
          "For facilities storing oil, SPCC regulations define how spills are prevented, how equipment is maintained, and how records are kept. These are not abstract requirements. They are operational processes that must be carried out continuously.",
        ],
      },
      {
        heading: "The gap between policy and execution",
        paragraphs: [
          "Most facilities understand what is required. Inspections must be performed. Equipment must be maintained. Records must be kept. The challenge is not knowledge. It is consistency.",
          "Inspections are missed. Corrective actions are not followed through. Documentation becomes fragmented across spreadsheets, emails, and files. Over time, small gaps accumulate and create real risk.",
        ],
      },
      {
        heading: "Where sustainability breaks down",
        paragraphs: [
          "When compliance is treated as a periodic task instead of an operational system, preventable failures become more likely. A missed inspection can allow a leak to go unnoticed. A delayed repair can allow that leak to worsen.",
          "These failures are not edge cases. They are the most common way environmental harm occurs in regulated facilities.",
        ],
      },
      {
        heading: "SPCC as operational discipline",
        paragraphs: [
          "SPCC provides a framework for running facilities with discipline. It requires clear responsibilities, regular inspections, documented follow-through, and trained personnel.",
          "When these processes are executed consistently, they reduce both operational risk and environmental impact.",
        ],
      },
      {
        heading: "Systems matter more than reminders",
        paragraphs: [
          "Many facilities still rely on spreadsheets, email reminders, and paper checklists. These tools can work at small scale but are difficult to maintain as operations grow.",
          "A structured system changes this. Inspections are tracked. corrective actions are assigned and verified. records reflect actual conditions instead of reconstructed timelines.",
        ],
      },
      {
        heading: "Sustainability as a byproduct of consistency",
        paragraphs: [
          "There is a tendency to separate sustainability from compliance. In practice, they are closely linked.",
          "Consistent execution of compliance workflows leads to fewer preventable releases, clearer accountability, and better visibility into risk. These outcomes form the foundation of environmental sustainability at the facility level.",
        ],
      },
      {
        heading: "A more practical view",
        paragraphs: [
          "Improving environmental outcomes does not always require new commitments. In many cases, it requires doing the existing work reliably.",
          "SPCC defines what needs to happen. The real challenge is ensuring that it actually happens, every time.",
        ],
      },
    ],
    keyTakeaways: [
      "Environmental outcomes depend on consistent execution, not just policy or intent.",
      "SPCC is an operational framework for preventing real-world incidents.",
      "Most compliance failures come from breakdowns in execution, not understanding.",
      "Structured systems improve both compliance and environmental outcomes.",
    ],
  },
  {
    slug: "inspection-requirements",
    title: "SPCC inspection requirements",
    metaTitle: "SPCC Inspection Requirements — Field Records That Hold Up",
    metaDescription:
      "What periodic SPCC inspections often cover, how findings are documented, and how teams close the loop before the next audit or regulator visit.",
    description:
      "How periodic inspections fit into SPCC, what they commonly cover, and how to keep credible records.",
    publishedAt: "2025-03-01",
    sections: [
      {
        heading: "What “periodic” means in practice",
        paragraphs: [
          "Facilities run scheduled walkthroughs of tanks, secondary containment, transfer areas, and related equipment. The schedule and scope should reflect the plan and the site’s risk profile—not a generic template that never gets updated.",
        ],
      },
      {
        heading: "Documenting what you found",
        paragraphs: [
          "Good records include who performed the inspection, when it happened, what was checked, and the outcome. Photos, notes on deficiencies, and links to corrective actions turn a checkbox exercise into a traceable history.",
        ],
      },
      {
        heading: "Closing the loop",
        paragraphs: [
          "Findings should drive clear owners and due dates. Re-inspection or verification steps help demonstrate that issues were actually resolved, not just marked closed in a spreadsheet.",
        ],
      },
    ],
    keyTakeaways: [
      "Inspections should match the plan and site reality.",
      "Evidence beats memory when questions arise months later.",
    ],
  },
  {
    slug: "spcc-audit-checklist",
    title: "SPCC audit checklist",
    metaTitle: "SPCC Audit Checklist — Documentation to Have Ready",
    metaDescription:
      "A practical checklist of SPCC documentation categories teams gather for internal reviews or third-party audits: plans, inspections, training, and corrective actions.",
    description:
      "Documentation categories worth having ready before an SPCC-related audit or inspection.",
    publishedAt: "2025-03-15",
    sections: [
      {
        heading: "Plan and amendments",
        paragraphs: [
          "Current plan, amendment history, and correspondence related to significant changes. Ensure version dates and approvals are easy to follow.",
        ],
      },
      {
        heading: "Inspection and maintenance records",
        paragraphs: [
          "Completed periodic inspections, follow-up documentation, and any maintenance tied to containment or integrity. Organize by asset or date range so reviewers can sample quickly.",
        ],
      },
      {
        heading: "Training and oil-handling personnel",
        paragraphs: [
          "Rosters, training materials used, attendance or completion records, and acknowledgments where required. The goal is a clear picture of who was trained, on what, and when.",
        ],
      },
      {
        heading: "Corrective actions",
        paragraphs: [
          "Open and closed items with dates, responsible parties, and resolution evidence. Auditors often trace a failed inspection to a closed corrective action—gaps in that chain stand out.",
        ],
      },
    ],
    keyTakeaways: [
      "Think in categories: plan, field activity, people, and follow-through.",
      "Consistency across systems matters as much as any single document.",
    ],
  },
  {
    slug: "organizing-spcc-records",
    title: "How to organize SPCC records",
    metaTitle: "How to Organize SPCC Records for Inspections",
    metaDescription:
      "Practical tips for structuring SPCC records—inspections, training, and plan history—so teams can respond quickly without digging through scattered files.",
    description:
      "Keep inspection logs, training proof, and plan history easy to find before the next site visit.",
    publishedAt: "2025-03-15",
    sections: [
      {
        heading: "Start from how questions get asked",
        paragraphs: [
          "Regulators and auditors often sample by asset, date range, or topic. If your records are organized only by whoever filed them last, every request becomes a scavenger hunt.",
        ],
      },
      {
        heading: "A simple structure that scales",
        paragraphs: [
          "Many teams tie documents to facilities, assets, and dates. Inspections link to the equipment inspected; training links to roles; plan versions link to amendment events. The pattern is repeatable across one site or many.",
        ],
      },
      {
        heading: "When spreadsheets stop scaling",
        paragraphs: [
          "Shared drives and spreadsheets work until version conflicts and missed handoffs appear. A dedicated workflow for SPCC reduces the risk that a critical log lives only in someone’s inbox.",
        ],
      },
    ],
    keyTakeaways: [
      "Organize for the questions you will actually get.",
      "Link records to assets and time—not just folders.",
    ],
  },
  {
    slug: "common-failures",
    title: "Common SPCC compliance gaps",
    metaTitle: "Common SPCC Compliance Failures (and How to Avoid Them)",
    metaDescription:
      "Typical weak spots before audits: outdated plans, incomplete inspection trails, and training records that do not match oil-handling roles.",
    description:
      "Patterns teams see when documentation and field practice drift apart—and how to get ahead of them.",
    publishedAt: "2025-03-01",
    sections: [
      {
        heading: "Plan drift",
        paragraphs: [
          "The written plan no longer reflects tanks, piping, or operational reality. Amendments lag behind projects, or never quite capture what changed in the field.",
        ],
      },
      {
        heading: "Inspection trails that do not hold up",
        paragraphs: [
          "Incomplete schedules, missing signatures or timestamps, or findings that never connect to closure evidence. Under pressure, these gaps are easy for a third party to spot.",
        ],
      },
      {
        heading: "Training records that are hard to defend",
        paragraphs: [
          "Rosters that do not match actual oil-handling duties, outdated topics, or missing documentation for new hires. Training is often low drama day to day but high visibility in a review.",
        ],
      },
    ],
    keyTakeaways: [
      "Align the plan, inspections, and training narratives.",
      "Fix process before the audit forces it.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
