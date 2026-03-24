/**
 * Site articles — edit titles, descriptions, dates, and section copy here.
 * Add a new entry and a matching route will work at /blog/{slug}.
 */

export type ArticleSection = {
  heading: string;
  /** One or more paragraphs (plain text). */
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  /** Shown on home resource cards and blog index. */
  description: string;
  publishedAt: string;
  sections: ArticleSection[];
  /** Optional bullet list at the end of the article. */
  keyTakeaways?: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "what-is-spcc",
    title: "What is SPCC?",
    description: "A short overview of the Spill Prevention, Control, and Countermeasure program.",
    publishedAt: "2025-03-01",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Replace this paragraph with a clear definition of SPCC and why facilities care about it. Keep the tone aligned with your product voice.",
          "Optional second paragraph: context for readers who are new to environmental compliance.",
        ],
      },
      {
        heading: "Who regulates it",
        paragraphs: [
          "Placeholder: summarize the regulatory framework (e.g. EPA, applicable rules) at a high level. Link to official sources where helpful.",
        ],
      },
      {
        heading: "What this means for operators",
        paragraphs: [
          "Placeholder: bridge from regulation to day-to-day obligations — plans, inspections, training, and documentation.",
        ],
      },
    ],
    keyTakeaways: [
      "Replace with a concise bullet (e.g. core obligation).",
      "Replace with another takeaway.",
      "Replace or delete bullets you do not need.",
    ],
  },
  {
    slug: "who-needs-spcc",
    title: "Who needs an SPCC plan?",
    description: "Criteria and thresholds that typically trigger SPCC planning requirements.",
    publishedAt: "2025-03-01",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Placeholder: explain when SPCC applies in plain language before diving into thresholds.",
        ],
      },
      {
        heading: "Oil storage thresholds",
        paragraphs: [
          "Placeholder: describe relevant capacity thresholds and how they are counted.",
          "Placeholder: note exceptions or nuances your readers should confirm with counsel or the rule text.",
        ],
      },
      {
        heading: "Facility types",
        paragraphs: [
          "Placeholder: give examples of industries or sites that commonly need a plan.",
        ],
      },
    ],
    keyTakeaways: [
      "Placeholder takeaway one.",
      "Placeholder takeaway two.",
    ],
  },
  {
    slug: "common-failures",
    title: "Common compliance failures",
    description: "Typical gaps teams see before audits and inspections — and how to avoid them.",
    publishedAt: "2025-03-01",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Placeholder: frame why failure patterns matter (risk, citations, operational disruption).",
        ],
      },
      {
        heading: "Documentation and plan currency",
        paragraphs: [
          "Placeholder: outdated plans, missing amendments, or weak change management.",
        ],
      },
      {
        heading: "Inspections and secondary containment",
        paragraphs: [
          "Placeholder: routine inspection gaps, containment issues, or housekeeping problems.",
        ],
      },
    ],
    keyTakeaways: [
      "Placeholder: top failure mode #1.",
      "Placeholder: top failure mode #2.",
    ],
  },
  {
    slug: "inspection-requirements",
    title: "Inspection requirements explained",
    description: "What periodic inspections usually cover and how to evidence them.",
    publishedAt: "2025-03-01",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Placeholder: set expectations — this is general guidance, not legal advice.",
        ],
      },
      {
        heading: "What to inspect",
        paragraphs: [
          "Placeholder: tanks, transfer areas, containment, drainage, and related equipment.",
        ],
      },
      {
        heading: "Records and follow-up",
        paragraphs: [
          "Placeholder: how findings should be logged, assigned, and closed out.",
        ],
      },
    ],
    keyTakeaways: [
      "Placeholder: inspection frequency reminder.",
      "Placeholder: recordkeeping tip.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
