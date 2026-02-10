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
    description: "HIPAA regulations, audits, and staying compliant with AI tools",
    color: "#D42918",
  },
  {
    slug: "ai-automation",
    label: "AI Automation",
    description: "Workflow automation, AI agents, and intelligent process design",
    color: "#3B82F6",
  },
  {
    slug: "data-security",
    label: "Data Security",
    description: "Encryption, access controls, and protecting patient data",
    color: "#22C55E",
  },
  {
    slug: "healthcare-ops",
    label: "Healthcare Ops",
    description: "Scheduling, intake, billing, and operational efficiency",
    color: "#EAB308",
  },
  {
    slug: "industry-trends",
    label: "Industry Trends",
    description: "Regulatory changes, market shifts, and emerging technology",
    color: "#A855F7",
  },
];

export function getCategoryMeta(slug: BlogCategory): BlogCategoryMeta {
  return blogCategories.find((c) => c.slug === slug) ?? blogCategories[0];
}
