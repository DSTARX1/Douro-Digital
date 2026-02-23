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
  "We're not an agency. We're four people who know how to build software that actually works.\n\nIsaac makes sure it doesn't break at 2am. Mario makes sure it converts. Danny makes sure it looks professional. Josh makes sure we build the right thing.\n\nNo sales team. No account managers. No layers of people between you and the work.\n\nYou tell us what you need. We build it. It works.\n\nWe've built Voice Noob, Pocket Agent, Social Bro, and Viral Kid. Real products. Real users. Real revenue. Not consulting projects where we made a roadmap and disappeared. Products we built from scratch, shipped, and people paid money for.\n\nEach one taught us something. Voice Noob taught us voice automation breaks at scale because of edge cases nobody thinks about. Pocket Agent has fallback logic baked in from day one because of it. Social Bro showed us the hard part isn't scheduling \u2014 it's making posts not look like they came from a bot. Viral Kid taught us distribution matters more than creation.\n\nReal products. Real lessons. Real battle scars.\n\n8-12 weeks. Direct access. Zero bullshit.\n\nIf you're done with developers who ghost, agencies that bleed you dry, and tools that break when you need them most \u2014 you're in the right place.";

export interface ValueItem {
  title: string;
  description: string;
}

export const aboutValues: ValueItem[] = [
  {
    title: "We Build It, We Own It",
    description:
      "When something breaks, you don't get a ticket number and a 48-hour SLA. You get Isaac fixing it before you even notice.\n\nWhen something needs to change, you don't submit a feature request and wait three months. You tell us. We update it. Done.\n\nWhen you have a question, you don't email support@agency.com. You message us directly. Usually within an hour.\n\nWe built it. We know how it works. We care whether it works.\n\nNo handoffs. No \"let me check with the team.\" Just direct access to the people who wrote the code.\n\nWhen's the last time you talked directly to the person who built something you paid for? Exactly.",
  },
  {
    title: "No Retainer Hell",
    description:
      "Agency charges you a retainer. Every month. Whether you need work done or not.\n\nYou ask for a small change. \"We'll add that to the sprint.\" Three weeks later: \"Still in the backlog.\" But the invoice? Shows up on time. Every. Single. Month.\n\nWe don't do that.\n\nProject-based pricing. Fixed scope. Clear timeline. You know what you're getting, what it costs, and when it'll be done.\n\nNo open-ended retainers. No \"minimum three-month commitment.\" Just clean projects with clear outcomes.\n\nWe build it. You own it. Done.\n\nNeed updates later? We'll quote it. You decide. No pressure. No guilt trips.",
  },
  {
    title: "Built for YOUR Business (Not Templates)",
    description:
      "\"Custom solution\" that's actually a template with your logo. \"Fully customizable\" that means you pick the button color. \"Built specifically for you\" that looks exactly like their last three clients.\n\nWe don't do that.\n\nWhen we say custom, we mean custom. Built for how YOUR business works. Your customer journey. Your workflow. Your weird edge cases that don't fit normal systems.\n\nIf your checkout needs seven steps because that's what converts, we build seven steps. If your booking system needs logic Calendly can't handle, we build that logic.\n\nNo compromises. No \"close enough.\"\n\nYour business. Your system. Your rules.",
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
    role: "The reason your software won't shit the bed at 2am on a Saturday. Obsessed with things ACTUALLY working in the real world, not just demos that look pretty in pitch decks. If something breaks, he's already fixing it before you notice. Traffic spikes, edge cases, the unglamorous behind-the-scenes magic that keeps your business running while you sleep. Like a really good plumber \u2014 nothing goes wrong.",
    color: "#D42918",
    image: "/images/team/isaac.jpg",
    objectPosition: "center 45%",
    scale: 1.7,
  },
  {
    name: "Mario Funez",
    role: "Marketing brain that builds software \u2014 dangerous combo because everything he touches actually CONVERTS instead of just looking cool. He's seen too many beautiful products that don't make a dime, so he builds stuff that looks good AND makes money. His motto? \"Just another Tuesday, mate.\" The rare person who understands both the technical side AND the business side. Builds things people actually pay for.",
    color: "#4a2c1a",
    image: "/images/team/mario.jpg",
    objectPosition: "center 2%",
    scale: 1.5,
  },
  {
    name: "Danny Isakov",
    role: "Makes your product look professional enough that people trust it with their credit card. No diva energy. No \"let me explain my creative vision\" monologues. Just clean design that converts. Your checkout button won't be the wrong shade of blue. Your landing page won't scream \"built in 2003.\" Think Apple Store clean, not Craigslist from 2007. Professional. Trustworthy. Higher bar than you'd think.",
    color: "#1a6b3c",
    image: "/images/team/danny.jpg",
    objectPosition: "center 15%",
    scale: 1,
  },
  {
    name: "Josh Irizarry",
    role: "Makes sure you build the RIGHT thing, not just the thing you THINK you want at 2am after three coffees and a YouTube video about passive income. Honest about timelines, keeps scope creep from turning your project into a three-year odyssey. That friend who tells you the truth \u2014 \"No, adding blockchain won't help. It'll just add three months and $50k for something nobody wants.\" That level of honesty. Rare. Valuable.",
    color: "#1a3f6b",
    image: "/images/team/josh.jpg",
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
    description: "Voice automation platform",
    image: "/images/voice-noob-product.jpeg",
    link: "/case-studies/voice-noob",
  },
  {
    title: "Pocket Agent",
    description: "24/7 customer service system",
    image: "/images/pocket-agent-home.png",
    link: "/case-studies/pocket-agent",
  },
  {
    title: "Social Bro",
    description: "Social media management",
    image: "/images/social-bro-product.jpeg",
    link: "/case-studies/social-bro",
  },
  {
    title: "Viral Kid",
    description: "Content distribution system",
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
    description:
      "Every project delivered on time or we eat the cost",
  },
];

/* ─── CTA ───────────────────────────────────────────────────── */
export const aboutCTA = {
  heading: "Ready to Work With People Who",
  accentPhrase: "Actually Show Up?",
  subtitle:
    "No sales pitch. No strategy session that's actually a pitch in disguise. Just an honest conversation about what you need and whether we're the right fit. If we're not, we'll tell you. If we are, we'll tell you exactly what it costs, how long it takes, and what you're getting.",
  email: "hello@dourodigital.com",
};
