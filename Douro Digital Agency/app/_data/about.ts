/* ─── About Hero ────────────────────────────────────────────── */
export const aboutHero = {
  prefix: "You\u2019re paying for ads that don\u2019t convert.",
  italic: "Leads that ghost after filling out your form.",
  suffix: "And a tech stack held together with duct tape and hope.",
  subtitle: "We fix that. With AI agents that do the work and custom software that actually talks to itself.",
};

/* ─── About Intro ───────────────────────────────────────────── */
export const aboutIntro =
  "Lemme guess...\n\nYou\u2019re running traffic. Ads are performing (ish). Leads are coming in.\n\nAnd then they vanish into the void.\n\nBecause you didn\u2019t respond in 5 minutes. Because your CRM didn\u2019t notify you. Because the lead came in at 8pm on a Saturday and your team was (rightfully) not working.\n\nOr maybe you\u2019re drowning in tools. Salesforce. HubSpot. Zapier. Calendly. Slack. Notion. Stripe. Google Analytics. Fourteen subscriptions, zero integrations, and you\u2019re STILL manually copying data between them like it\u2019s a punishment from the gods.\n\nYour team is burned out. Your margins are shrinking. And every time you ask your agency for help, you get a deck full of \u201Cinsights\u201D and zero actual solutions.\n\nHere\u2019s what we do:\n\nWe build AI agents that pick up the phone, qualify leads, book appointments, and follow up \u2014 24/7, no sick days, no vacation requests.\n\nWe build custom software that replaces your SaaS graveyard with one system that actually does what you need (not what some VC-funded startup THINKS you need).\n\nWe audit your stack, kill the bloat, and build a revenue system instead of a cost center.\n\nNo Figma files you\u2019ll never use. No \u201CPhase 2\u201D that never comes. No account managers who disappear when you actually need them.\n\nJust Isaac, Mario, Danny, and Josh \u2014 building the thing you need so your business stops leaking money.";

export interface ValueItem {
  title: string;
  description: string;
}

export const aboutValues: ValueItem[] = [
  {
    title: "We match YOUR brand voice",
    description:
      "Your AI agent sounds like YOU. Not a corporate robot. Not a script from 2004. Not some generic \u201CHow can I help you today?\u201D funeral dirge.\n\nWe train it on your actual language, tone, and workflow. If you\u2019re formal, it\u2019s formal. If you\u2019re casual, it\u2019s casual. If you swear like a sailor, well... we can work with that too.\n\nBecause the last thing you need is AI that sounds like it was programmed by someone who\u2019s never had a conversation with a human.",
  },
  {
    title: "Security & compliance by design",
    description:
      "Data breaches are expensive. Compliance violations are expensive. \u201COops we didn\u2019t encrypt that\u201D is REALLY expensive.\n\nWe build security and compliance into the foundation \u2014 not as an afterthought when your lawyer starts sweating.\n\nEncryption. Access controls. Audit logs. GDPR-ready. SOC 2 if you need it. Whatever keeps you and your customers safe.\n\nBecause \u201Cmove fast and break things\u201D works for Facebook. It doesn\u2019t work when you\u2019re handling customer data and revenue.",
  },
  {
    title: "Partners, not vendors",
    description:
      "You know what sucks? Spending 2 hours in a discovery call explaining your business to someone who \u201Cgets it\u201D... and then getting handed off to a junior who\u2019s Googling solutions in real-time.\n\nThat doesn\u2019t happen here.\n\nIsaac, Mario, Danny, and Josh. That\u2019s the team. Same people you talk to in discovery are the same people building your system. No layers. No hand-offs. No \u201Clet me check with my manager.\u201D\n\nYou get our cell numbers. You get Slack access. You get actual humans who care whether this works or not.\n\nBecause we\u2019re not trying to scale to 500 clients. We\u2019re trying to build 20 great systems a year that actually make people money.",
  },
];

/* ─── Team ──────────────────────────────────────────────────── */
export const teamIntro =
  "Small team. No layers. Same people you talk to are the ones writing code and designing interfaces.";

export interface TeamMember {
  name: string;
  role: string;
  color: string;
  image: string;
  objectPosition?: string;
  scale?: number;
}

export const teamMembers: TeamMember[] = [
  { name: "Isaac Morgado", role: "Tech founder. Builds AI agents and full-stack systems. The guy who makes \u201Ccan we automate this?\u201D turn into \u201Cyes, and here\u2019s how.\u201D Won\u2019t stop until it works in production, not just in a demo.", color: "#D42918", image: "/images/team/isaac.jpg", objectPosition: "center 25%", scale: 1.3 },
  { name: "Mario Funez", role: "Fullstack dev who actually gives a shit about UI. Background in copywriting, marketing, and CRM systems \u2014 so he builds things that convert, not just compile. His motto: \u201CJust another Tuesday, mate.\u201D", color: "#4a2c1a", image: "/images/team/mario.jpg", objectPosition: "center 15%", scale: 1.15 },
  { name: "Danny Isakov", role: "Product and branding designer. Makes sure your software doesn\u2019t look like a VC pitch deck from 2009. Function AND form. Has an eye for the details that make users trust a product before they even click anything.", color: "#1a6b3c", image: "/images/team/danny.jpg", objectPosition: "center 10%", scale: 1.1 },
  { name: "Josh Irizarry", role: "Consultant and product designer. Translates your problem into a buildable system. Keeps scope tight and timelines real. If the plan doesn\u2019t make money, he\u2019ll tell you before you waste a cent.", color: "#1a3f6b", image: "/images/team/josh.jpg", objectPosition: "center 0%", scale: 1.8 },
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
    title: "Built for results.",
    description:
      "Revenue up. Costs down. Time saved. We measure success in dollars and hours, not \u201Cengagement.\u201D",
  },
  {
    title: "Security first.",
    description:
      "Encryption, access controls, audit logs, GDPR-ready. Your data stays protected from day one.",
  },
];

/* ─── CTA ───────────────────────────────────────────────────── */
export const aboutCTA = {
  heading: "Let\u2019s build something that",
  accentPhrase: "makes you money.",
  subtitle:
    "30-minute call. No pitch deck. No \u201Clet me check with my team.\u201D\n\nWe\u2019ll look at where you\u2019re bleeding revenue, what\u2019s salvageable in your current stack, and whether we\u2019re a good fit. If we\u2019re not, we\u2019ll tell you. If we are, we\u2019ll tell you exactly what we\u2019d build and how long it\u2019ll take.",
  email: "hello@dourodigital.com",
};
