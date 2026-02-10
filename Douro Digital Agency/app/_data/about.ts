/* ─── About Hero ────────────────────────────────────────────── */
export const aboutHero = {
  prefix: "Your clinic is",
  italic: "leaking revenue.",
  suffix: "We fix it.",
  subtitle: "We build AI systems that fix it for dental and aesthetic clinics.",
};

/* ─── About Intro ───────────────────────────────────────────── */
export const aboutIntro =
  "We build AI systems for dental and aesthetic clinics that capture every lead, book every appointment, and reactivate dormant revenue\u00A0— without touching your EMR or putting your HIPAA compliance at risk.";

export interface ValueItem {
  title: string;
  description: string;
}

export const aboutValues: ValueItem[] = [
  {
    title: "Your brand voice, not a robot",
    description:
      "AI trained on your tone; patients feel like they\u2019re texting your front desk, not a chatbot.",
  },
  {
    title: "HIPAA-compliant by design",
    description:
      "We operate in the pre-patient CRM layer. No PHI storage, no diagnosis, no clinical data exposure.",
  },
  {
    title: "We act as partners, not vendors",
    description:
      "Direct founder involvement on every engagement. No account managers, no junior hand-offs.",
  },
];

/* ─── Services ──────────────────────────────────────────────── */
export interface ServiceItem {
  title: string;
  description: string;
  bullets: string[];
  placeholderColor: string;
}

export const aboutServices: ServiceItem[] = [
  {
    title: "AI Receptionist & Lead Router",
    description:
      "Multi-channel AI that responds to every call, DM, and web inquiry in under 60\u00A0seconds\u00A0\u2014 24/7, 365.",
    bullets: [
      "Instant speed-to-lead response via SMS/chat/phone",
      "After-hours coverage (40\u201350% of leads come outside business hours)",
      "Lead qualification and FAQ handling",
      "Hot lead routing to coordinators",
      "Unified lead inbox with auto-tagging and scoring",
    ],
    placeholderColor: "#D42918",
  },
  {
    title: "Smart Scheduling & Intake",
    description:
      "Automated booking that fills your calendar, reduces no-shows, and gives providers a pre-consult brief before every appointment.",
    bullets: [
      "Automated appointment booking and confirmation",
      "No-show reduction with smart reminders (25\u201330% \u2192 <15%)",
      "Pre-consult forms capturing goals/budget/timeline",
      "AI lead scoring (A/B/C leads)",
      "One-page provider brief for each consultation",
    ],
    placeholderColor: "#1a6b3c",
  },
  {
    title: "Reactivation & Follow-Up Engine",
    description:
      "Turn $380K+ in dormant treatment plans into booked revenue with automated reactivation sequences.",
    bullets: [
      "EMR integration to surface unscheduled treatment",
      "Automated reactivation campaigns for dormant plans",
      "Post-treatment follow-up and education sequences",
      "Review request automation",
      "Client recall and re-engagement",
    ],
    placeholderColor: "#1a3f6b",
  },
];

/* ─── Team ──────────────────────────────────────────────────── */
export const teamIntro =
  "We\u2019re a small team that acts as an extension of your practice. The people building your AI system are the same people you talk to\u00A0\u2014 no layers, no hand-offs.";

export interface TeamMember {
  name: string;
  role: string;
  color: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  { name: "Isaac Morgado", role: "Tech founder & software developer", color: "#D42918", image: "/images/team/isaac.jpg" },
  { name: "Danny Isakov", role: "Product & Branding Designer", color: "#1a6b3c", image: "/images/team/danny.jpg" },
  { name: "Josh Irizarry", role: "Consultant & Product Designer", color: "#1a3f6b", image: "/images/team/josh.jpg" },
];

export interface HighlightItem {
  title: string;
  description: string;
}

export const teamHighlights: HighlightItem[] = [
  {
    title: "Small team.",
    description:
      "No layers of account managers or junior hand-offs. You work directly with the people building your system.",
  },
  {
    title: "Built for clinics.",
    description:
      "Purpose-built for dental and aesthetic practices. Not a marketing tool retrofitted for healthcare.",
  },
  {
    title: "Security first.",
    description:
      "HIPAA-compliant infrastructure from day one. Your patient data stays protected with encryption, access controls, and regular audits.",
  },
];

/* ─── CTA ───────────────────────────────────────────────────── */
export const aboutCTA = {
  heading: "Let\u2019s work together to",
  accentPhrase: "stop the revenue leak.",
  subtitle:
    "Whether you\u2019re losing leads after hours or sitting on $380K in unscheduled treatment, we\u2019d love to show you how AI can fix it.",
  email: "hello@dourodigital.com",
};
