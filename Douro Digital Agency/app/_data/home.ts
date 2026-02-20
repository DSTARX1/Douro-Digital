export const heroHeadline = {
  prefix: "AI that actually DOES shit",
  italic: "— while you sleep, travel, or run your business",
  suffix: "",
};

export const missionText =
  "We build AI agents and custom software for businesses that are tired of paying for tools that don't DO anything. Not a \"boutique digital agency.\" Not consultants who hand you a Figma file and disappear. We're Isaac (tech founder who won't stop until it works in production), Mario (fullstack dev who makes things convert, not just compile), Danny (designer with an eye for the details that make users trust a product), and Josh (product guy who'll tell you if the plan doesn't make money). Four people. No layers. No hand-offs. You talk to us, we build it, you make money.";

export interface AboutTopic {
  title: string;
  description: string;
}

export const aboutTopics: AboutTopic[] = [
  {
    title: "Our Approach",
    description:
      "We work in tight, cross-functional sprints alongside your team. Every project begins with a discovery phase to map your goals, constraints, and opportunities\u2014then we move fast from prototype to production with continuous feedback loops.",
  },
  {
    title: "Our Values",
    description:
      "Transparency, craft, and measurable outcomes. We believe great work comes from honest communication, relentless attention to detail, and a shared commitment to results that actually move the needle for your business.",
  },
  {
    title: "Our Process",
    description:
      "Discovery, design, build, launch, iterate. We follow a lean, milestone-driven process that keeps scope tight and delivery predictable\u2014while leaving room for the creative problem-solving that separates good products from great ones.",
  },
];

export interface CtaText {
  text: string;
  description: string;
}

export const ctaTexts: CtaText[] = [
  { text: "missed calls", description: "40% of business happens outside 9-5 \u2014 you\u2019re literally asleep while revenue walks away" },
  { text: "lead response time", description: "After 5 minutes, odds of qualifying a lead drop 80%. You\u2019re at 30 minutes. Do the math." },
  { text: "tool graveyard", description: "Paying for 14 subscriptions and still copying data manually? Sounds exhausting." },
  { text: "follow-up black hole", description: "80% of sales need 5+ follow-ups. 44% of reps give up after one. Your AI agent doesn\u2019t." },
];

export const testimonials = [
  {
    quote:
      "We were burning $8K/month on ads and losing 40% of leads to slow follow-up. Douro built us an AI phone system that responds in under 60 seconds \u2014 now we\u2019re closing deals we would\u2019ve missed entirely. Added $47K in revenue the first month alone.",
    author: "Marcus Chen",
    role: "Founder, Apex Logistics (Portland, OR)",
  },
  {
    quote:
      "I was paying for Salesforce, HubSpot, Calendly, Zapier, and still manually copying data between them like it\u2019s 2003. Douro built a custom CRM that does everything in one place. We\u2019re saving $2,400/month in subscriptions and my team got back 22 hours/week. Best investment we\u2019ve made.",
    author: "Sarah Patel",
    role: "CEO, Summit Real Estate Group (Austin, TX)",
  },
  {
    quote:
      "Most agencies sell you the dream and hand you off to some junior who\u2019s Googling solutions in real-time. Isaac, Mario, Danny, and Josh built our entire platform themselves \u2014 10 weeks from kickoff to launch. Revenue\u2019s up 63% because our checkout flow doesn\u2019t suck anymore. Turns out that matters.",
    author: "James O\u2019Reilly",
    role: "COO, Peak Performance Supplements (Dublin, Ireland)",
  },
];

export const videoTestimonials = [
  {
    name: "Marcus Chen",
    role: "Founder",
    company: "Apex Logistics",
  },
  {
    name: "Sarah Patel",
    role: "CEO",
    company: "Summit Real Estate Group",
  },
  {
    name: "James O\u2019Reilly",
    role: "COO",
    company: "Peak Performance Supplements",
  },
];

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export const footerDescription =
  "Douro Digital builds AI agents and custom software for businesses tired of paying for tools that don\u2019t do anything. We\u2019re Isaac (systems + AI), Mario (fullstack + CRM), Danny (design + product), and Josh (product + strategy). Four people. No account managers. No hand-offs. Just systems that work. If your business is bleeding revenue through missed calls, slow follow-up, or a tech stack held together with duct tape \u2014 we can fix that.";

export const footerContact = {
  email: "hello@dourodigital.com",
  phone: "+351 123 456 789",
  address: "Available worldwide (yes, even if you\u2019re in a timezone we have to Google)",
};

export const footerNav = [
  { label: "Work", href: "/work" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/book-a-call" },
];
