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
  "Look.\n\nWe're not an agency.\n\nWe're four people who know how to build software that actually works.\n\nIsaac makes sure it doesn't break at 2am.\nMario makes sure it converts.\nDanny makes sure it looks professional.\nJosh makes sure we build the right thing.\n\nThat's it. No sales team. No account managers. No layers of people between you and the work (like some corporate version of a game of telephone where your message turns into gibberish by the time it reaches someone who can actually code).\n\nYou tell us what you need. We build it. It works.\n\nWe've built Voice Noob, Pocket Agent, Social Bro, and Viral Kid. Real products. Real users. Real revenue.\n\nNot consulting projects where we made a roadmap and disappeared like your last developer.\n\nNot white-labeled solutions with your logo slapped on (the software equivalent of reheating leftovers and calling it a gourmet meal).\n\nProducts we built from scratch, shipped, and people paid money for.\n\nVoice Noob taught us that voice automation breaks at scale—not because of the tech, but because of edge cases nobody thinks about until 10,000 people try to book appointments at once. That's why Pocket Agent has fallback logic baked in from day one. Social Bro showed us content scheduling is the easy part... the hard part is making sure posts don't look like they came from a bot run by someone's nephew who \"knows computers.\" Viral Kid? That one taught us distribution matters more than creation. Nobody cares how good your content is if seven people see it.\n\nThat's our experience. Not PowerPoint presentations about \"best practices\" or \"digital transformation strategies.\"\n\nReal products. Real lessons. Real battle scars.\n\nAnd now we build custom systems for businesses that are tired of babysitting their subscription circus.\n\n8-12 weeks. Direct access. Zero bullshit.\n\nIf you're done dealing with developers who ghost you, agencies that bleed you dry, and tools that break when you need them most, you're in the right place.\n\nOtherwise? We'll be here when you're ready.";

export interface ValueItem {
  title: string;
  description: string;
}

export const aboutValues: ValueItem[] = [
  {
    title: "We Build It, We Own It",
    description:
      "When something breaks, you don't get a ticket number and a 48-hour SLA.\n\nYou get Isaac fixing it before you even notice it was broken.\n\nWhen something needs to change, you don't submit a feature request and wait three months while it sits in a \"backlog\" nobody looks at.\n\nYou tell us. We update it. Done.\n\nWhen you have a question, you don't email support@agency.com and hope someone responds by next Tuesday.\n\nYou message us directly. We answer. Usually within an hour (unless we're sleeping, because we're human, not ChatGPT).\n\nThat's the difference between working with four people who actually built your system versus an agency where you're account number 247 in a CRM nobody checks.\n\nWe built it. We know how it works. We care whether it works.\n\nNo handoffs. No \"let me check with the team.\" No passing your problem up the chain like some bureaucratic nightmare.\n\nJust direct access to the people who wrote the code.\n\nThink about how rare that is. When's the last time you got to talk directly to the person who built something you paid for? Exactly.",
  },
  {
    title: "No Retainer Hell",
    description:
      "You know the game.\n\nAgency charges you a retainer. Every month. Whether you need work done or not.\n\nYou ask for a small change. \"We'll add that to the sprint.\"\n\nThree weeks later. \"Still in the backlog.\"\n\nTwo months later. Still nothing.\n\nBut the invoice? That shows up on time. Every. Single. Month. Like clockwork. More reliable than the actual work.\n\nIt's like a gym membership you never use but keep paying for because canceling requires filling out forms and talking to a retention specialist who makes you feel guilty.\n\nWe don't do that.\n\nProject-based pricing. Fixed scope. Clear timeline.\n\nYou know what you're getting. You know what it costs. You know when it'll be done.\n\nNo open-ended retainers where you're paying forever and getting nothing.\n\nNo \"minimum three-month commitment\" where you're locked in whether we deliver or not.\n\nJust clean projects with clear outcomes.\n\nWe build it. You own it. Done.\n\nNeed updates later? Sure. We'll quote it. You decide if it's worth it. No pressure. No guilt trips. No \"well you really should be on our maintenance plan\" sales pitches.\n\nThat's how it should work. Simple. Honest. No games.",
  },
  {
    title: "Built for YOUR Business (Not Templates)",
    description:
      "You've seen it before.\n\n\"Custom solution\" that's actually a template with your logo.\n\n\"Fully customizable\" that means you get to pick the button color (wow, such flexibility).\n\n\"Built specifically for you\" that looks exactly like their last three clients (because it literally is the same product).\n\nIt's like going to a restaurant and ordering custom pasta, and they bring you Kraft mac and cheese with parsley on top and call it \"artisanal.\"\n\nWe don't do that.\n\nWhen we say custom, we mean custom.\n\nBuilt for how YOUR business works. Not how we think businesses should work. Not how some template assumes businesses work.\n\nYour customer journey. Your workflow. Your logic. Your weird edge cases that don't fit into normal systems.\n\nNot forced into someone else's template because \"that's how the system works.\"\n\nIf your checkout needs seven steps because that's what converts for your offer, we build seven steps. Not three because \"best practices say shorter is better.\"\n\nIf your booking system needs complex logic that Calendly can't handle (deposits, multi-step intake, conditional availability, team coordination), we build that logic.\n\nIf your member area needs features that don't exist in off-the-shelf platforms (custom progress tracking, gamification, community features), we build those features.\n\nNo compromises. No \"close enough.\" No \"we can make that work if you just change your entire process to fit our limitations.\"\n\nYour business. Your system. Your rules.\n\nThat's what custom actually means. Not a marketing term. A reality.",
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
    role: "Isaac is the reason your software won't shit the bed at 2am on a Saturday when you're three drinks deep and can't remember if you even deployed the new update. He's obsessed with things ACTUALLY working in the real world, not just demos that look pretty in a pitch deck but fall apart under load. If something breaks, he's already fixing it before you even notice. If it's not broken, he's probably making it faster anyway (because he's got that itch). You know those moments when your system just works? When traffic spikes don't crash everything? When edge cases get handled gracefully instead of throwing error messages? That's his specialty. The unglamorous, behind-the-scenes magic that keeps your business running while you're sleeping. Like a really good plumber\u2014you don't think about the pipes until something goes wrong, and with Isaac, nothing goes wrong.",
    color: "#D42918",
    image: "/images/team/isaac.jpg",
    objectPosition: "center 25%",
    scale: 1.3,
  },
  {
    name: "Mario Funez",
    role: "Mario's got a marketing brain and builds software, which is a dangerous combo because everything he touches actually CONVERTS instead of just looking cool and doing nothing. He's seen too many beautiful products that don't make a dime (the digital equivalent of art that nobody buys), so he builds stuff that looks good AND makes you money. His motto? \"Just another Tuesday, mate.\" Which is exactly how he makes complex stuff feel. Routine. Not because it's easy, but because he's done it so many times it's muscle memory. The kind of guy who makes building a checkout flow that doesn't suck feel like ordering coffee\u2014straightforward, no drama, gets the job done. You know that rare person who understands both the technical side AND the business side? That's Mario. He won't build something technically impressive that nobody uses. He builds things people actually pay for.",
    color: "#4a2c1a",
    image: "/images/team/mario.jpg",
    objectPosition: "center 15%",
    scale: 1.15,
  },
  {
    name: "Danny Isakov",
    role: "Danny makes your product look professional enough that people actually trust it with their credit card instead of clicking away thinking it's a scam. No diva energy. No \"let me explain my creative vision\" monologues that waste 45 minutes of your life. Just clean design that converts. He handles the visual stuff so you don't have to think about whether your checkout button is the wrong shade of blue or your landing page screams \"built in 2003 by someone who learned HTML from a library book.\" You get a product that looks like it belongs in the market, not like it escaped from a time capsule of terrible design decisions. Think Apple Store clean, not Craigslist from 2007. That's Danny's work. Professional. Trustworthy. Doesn't make people's eyes hurt. Higher bar than you'd think in this industry.",
    color: "#1a6b3c",
    image: "/images/team/danny.jpg",
    objectPosition: "center 10%",
    scale: 1.1,
  },
  {
    name: "Josh Irizarry",
    role: "Josh makes sure you build the RIGHT thing, not just the thing you THINK you want at 2am after three coffees and watching a YouTube video about someone who made a million dollars with a SaaS product. He's honest about timelines (no \"yeah we can do that in a week\" when it's actually a month), keeps scope creep from turning your project into a three-year odyssey where you're still adding features in 2027, and makes sure nothing falls through the cracks. Not a gatekeeper. Not a hardass. Just the guy who keeps things moving so you're not still talking about features in six months when you should already be making money. He's like that friend who tells you the truth even when you don't want to hear it\u2014\"No, adding a blockchain feature won't make your product better, it'll just add three months and $50k to the timeline for something nobody wants.\" That level of honesty. Rare. Valuable.",
    color: "#1a3f6b",
    image: "/images/team/josh.jpg",
    objectPosition: "center 0%",
    scale: 1.8,
  },
];

export interface HighlightItem {
  title: string;
  description: string;
}

export const teamHighlights: HighlightItem[] = [
  {
    title: "Voice Noob",
    description: "Built and shipped voice automation platform",
  },
  {
    title: "Pocket Agent",
    description: "Customer service system that runs 24/7",
  },
  {
    title: "Social Bro",
    description: "Social media management product",
  },
  {
    title: "Viral Kid",
    description: "Content distribution system",
  },
  {
    title: "15+ years combined",
    description:
      "Shipping actual products (not consulting on someone else's vision)",
  },
  {
    title: "On-time delivery",
    description:
      "Every project delivered on time or we eat the cost (that's our standard, not a marketing gimmick)",
  },
];

/* ─── CTA ───────────────────────────────────────────────────── */
export const aboutCTA = {
  heading: "Ready to Work With People Who",
  accentPhrase: "Actually Show Up?",
  subtitle:
    "No sales pitch. No strategy session that's actually a pitch in disguise (*cough* every agency discovery call). Just an honest conversation about what you need and whether we're the right fit. If we're not, we'll tell you. If we are, we'll tell you exactly what it costs, how long it takes, and what you're getting. No games. No pressure. Just clarity.",
  email: "hello@dourodigital.com",
};
