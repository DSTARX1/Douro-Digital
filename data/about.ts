/* ─── About Hero ────────────────────────────────────────────── */
export const aboutHero = {
  prefix: "Four People Who Build Software",
  italic: "That Actually Works",
  suffix: "",
  subtitle:
    "No account managers. No retainer hell. No 'I'll check with the team' runaround. Just Isaac, Mario, Danny, and Josh. You talk to us. We build it. It works. That's the whole pitch.",
};

/* ─── About Intro ───────────────────────────────────────────── */
export const aboutIntro =
  "We're not an agency. We're four people who know how to build software that actually works.\n\nIsaac makes sure it doesn't break at 2am. Mario makes sure it converts. Danny makes sure it looks professional. Josh makes sure we build the right thing.\n\nNo sales team. No account managers. No layers between you and the work.\n\nWe've built Voice Noob, Pocket Agent, Social Bro, and Viral Kid. Real products. Real users. Real revenue. Not consulting projects where we made a roadmap and disappeared.\n\nDirect access. Zero bullshit.\n\nIf you're done with developers who ghost, agencies that bleed you dry, and tools that break when you need them most \u2014 you're in the right place.";

export interface ValueItem {
  title: string;
  description: string;
}

export const aboutValues: ValueItem[] = [
  {
    title: "We Build It, We Own It",
    description:
      'When something breaks, you don\'t get a ticket number and a 48-hour SLA. You get Isaac fixing it before you even notice.\n\nWhen something needs to change, you tell us. We update it. Done. When you have a question, you message us directly.\n\nNo handoffs. No "let me check with the team." Just direct access to the people who wrote the code.',
  },
  {
    title: "No Retainer Hell",
    description:
      "Agencies charge retainers every month whether you need work done or not. You ask for a small change \u2014 \"we'll add that to the sprint.\" Ages later: still in the backlog. But the invoice? On time. Every. Single. Month.\n\nWe don't do that. Project-based pricing. Fixed scope. Clear timeline. You know what you're getting, what it costs, and when it'll be done.\n\nNeed updates later? We'll quote it. You decide. No pressure.",
  },
  {
    title: "Built for YOUR Business (Not Templates)",
    description:
      '"Custom solution" that\'s actually a template with your logo. "Fully customizable" that means you pick the button color. "Built specifically for you" that looks exactly like their last three clients.\n\nWe don\'t do that. When we say custom, we mean custom. Your customer journey. Your workflow. Your weird edge cases. If your checkout needs seven steps because that\'s what converts, we build seven steps.\n\nYour business. Your system. Your rules.',
  },
];

/* ─── Team ──────────────────────────────────────────────────── */
export const teamIntro =
  "Four people. No layers. Same people you talk to are the ones building your software.";

export interface TeamMember {
  name: string;
  role: string;
  color: string;
  image: string;
  objectPosition?: string;
  scale?: number;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Isaac Morgado",
    role: "The reason your software won't shit the bed at 2am. If something breaks, he's already fixing it before you notice. Traffic spikes, edge cases, the unglamorous magic that keeps your business running while you sleep.",
    color: "#D42918",
    image: "/images/team/isaac.jpg",
    objectPosition: "center 55%",
    scale: 1.7,
  },
  {
    name: "Mario Funez",
    role: "Marketing brain that builds software \u2014 dangerous combo because everything he touches actually CONVERTS. Understands both the technical side and the business side. Builds things people actually pay for.",
    color: "#4a2c1a",
    image: "/images/team/mario.jpg",
    objectPosition: "center 2%",
    scale: 1.5,
  },
  {
    name: "Danny Isakov",
    role: "Makes your product look professional enough that people trust it with their credit card. No diva energy. Just clean design that converts. Apple Store clean, not Craigslist from 2007.",
    color: "#1a6b3c",
    image: "/images/team/danny2.jpg",
    objectPosition: "center 75%",
    scale: 2,
  },
  {
    name: "Josh Irizarry",
    role: "Makes sure you build the RIGHT thing, not the thing you think you want at 2am after three coffees and a YouTube video about passive income. Honest about timelines. Keeps scope creep from turning your project into a three-year odyssey.",
    color: "#1a3f6b",
    image: "/images/team/josh-new.jpg",
    objectPosition: "center 15%",
    scale: 2.5,
  },
];

export interface HighlightItem {
  title: string;
  description: string;
}

export interface ProjectHighlight {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const teamProjects: ProjectHighlight[] = [
  {
    title: "Voice Noob",
    description: "24/7 AI receptionist",
    image: "/images/voice-noob-product.jpeg",
    link: "/case-studies/voice-noob",
  },
  {
    title: "Pocket Agent",
    description: "Sales process in your pocket",
    image: "/images/pocket-agent-home.png",
    link: "/case-studies/pocket-agent",
  },
  {
    title: "Social Bro",
    description: "Social media on autopilot",
    image: "/images/social-bro-product.jpeg",
    link: "/case-studies/social-bro",
  },
  {
    title: "Viral Kid",
    description: "Viral content without the cringe",
    image: "/images/viral-kid-product.jpeg",
    link: "/case-studies/viral-kid",
  },
];

export const teamHighlights: HighlightItem[] = [
  {
    title: "15+ years combined",
    description:
      "Shipping actual products (not consulting on someone else's vision)",
  },
  {
    title: "On-time delivery",
    description: "Every project delivered on time or we eat the cost",
  },
];

/* ─── CTA ───────────────────────────────────────────────────── */
export const aboutCTA = {
  heading: "Ready to Work With People Who",
  accentPhrase: "Actually Show Up?",
  subtitle:
    "No sales pitch. Just an honest conversation about what you need and whether we're the right fit. If we're not, we'll tell you.",
  email: "support@wearedouro.com",
};
