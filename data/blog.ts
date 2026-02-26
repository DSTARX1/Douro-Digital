export type BlogCategory =
  | "compliance"
  | "ai-automation"
  | "data-security"
  | "healthcare-ops"
  | "industry-trends";

export interface BlogCategoryMeta {
  slug: BlogCategory;
  label: string;
  description: string;
  color: string;
}

export const blogCategories: BlogCategoryMeta[] = [
  {
    slug: "compliance",
    label: "Compliance",
    description: "GDPR, data privacy, and how not to get sued",
    color: "#D42918",
  },
  {
    slug: "ai-automation",
    label: "AI Automation",
    description:
      "What works, what\u2019s hype, and what\u2019ll actually save you time",
    color: "#3B82F6",
  },
  {
    slug: "data-security",
    label: "Data Security",
    description: "Encryption, access controls, and not getting hacked",
    color: "#22C55E",
  },
  {
    slug: "healthcare-ops",
    label: "Operations",
    description: "Systems, workflows, and killing inefficiency",
    color: "#EAB308",
  },
  {
    slug: "industry-trends",
    label: "Industry Trends",
    description: "What\u2019s real vs what\u2019s VC-funded vaporware",
    color: "#A855F7",
  },
];

export function getCategoryMeta(slug: BlogCategory): BlogCategoryMeta {
  return blogCategories.find((c) => c.slug === slug) ?? blogCategories[0];
}
