export const heroHeadline = {
  prefix: "Build a Business That Runs Itself So Well,",
  italic: "You Forget You Own It",
  suffix:
    "(Until You Check Your Bank Account and Remember Why You Started This Thing)",
};

export const missionText =
  "Look.\n\nRunning a business is hard enough without your software mess turning into a full-time babysitting job.\n\nYou've got 14 different tools\u2014Shopify, Stripe, Zapier, Calendly, Klaviyo\u2014each one costs $49/month, each one breaks in its own special way. It's like playing whack-a-mole, except each mole costs money and pops up at 2am.\n\nMeanwhile, your last developer ghosted you at 73% complete. Your freelancer disappeared after promising \"just two more days\" for the fifteenth time. Your agency \"partner\" turned into a black hole where $8,500/month goes in and crickets come out.\n\nYou don't need more tools. You don't need another \"strategy session\" (*cough* sales pitch). You need a system that works. That makes money. That runs 24/7 while you sleep.\n\nThat's us.\n\nFour people. Not 40. Just Isaac, Mario, Danny, and Josh. No account managers. No runaround. You talk to us, we build it, it works.\n\nWe've built Voice Noob, Pocket Agent, Social Bro, and Viral Kid. Real products. Real users. Real revenue.\n\nWe build systems that replace your subscription circus, save you 22 hours a week, and actually make you money without needing a degree in software engineering.\n\nNo vendor lock-in. No retainer hell. Just software that works.\n\n8-12 weeks. Direct access. We take 4 new projects per quarter.\n\nReady to stop babysitting your tool graveyard? Apply here. Otherwise? We'll be here when you're ready.";

export interface AboutTopic {
  title: string;
  description: string;
}

export const aboutTopics: AboutTopic[] = [
  {
    title: "Why We Only Work With Four People",
    description:
      'You know why most projects fail? Too many cooks.\n\nAccount managers who "manage" but don\'t build. Junior devs who copy-paste and hope for the best. "Strategists" who\'ve never shipped a product.\n\nIsaac builds backend systems that don\'t shit the bed at 2am. Mario builds products that convert. Danny makes it look professional enough that people trust it and BUY. Josh makes sure we build the RIGHT thing.\n\nFour people. Zero bullshit.\n\nYou tell us what you need. We build it. It works. No games of telephone. No "let me check with the team." Direct access. Real answers. Actual progress.',
  },
  {
    title: "What Happens When You Work With Us",
    description:
      "Week 1: We figure out what you ACTUALLY need.\n\nWeeks 2-8: We build it. You see progress every week. Not \"coming soon\" promises. Actual working features you can click on and test.\n\nWeeks 8-12: We test, polish, and make sure nothing breaks when real people start using it.\n\nThen you launch.\n\nNo six-month timelines that turn into eighteen months. No scope creep. Just clean, working software.\n\nAnd when something breaks? You don't get a ticket number and a 48-hour SLA. You get Isaac fixing it before you even notice.\n\nThat's the difference between four people who care and an agency where you're account number 247.",
  },
  {
    title: "Products That Work, Not Promises That Don't",
    description:
      'We\'ve built Voice Noob. Pocket Agent. Social Bro. Viral Kid.\n\nReal products. Real users. Real revenue.\n\nNot case studies where we "consulted" and took credit. Not white-labeled solutions we slapped your logo on. Actual products we built from scratch, shipped, and people paid money for.\n\nAnyone can TALK about building software. Anyone can sell you a "roadmap" and a "comprehensive digital transformation strategy."\n\nWe just build the damn thing. And it works.\n\nThat\'s our whole pitch.',
  },
];

export interface CtaText {
  text: string;
  description: string;
}

export const ctaTexts: CtaText[] = [
  {
    text: "One System. Works While You Sleep.",
    description:
      "You're spending 15 hours a week keeping Zapier from falling apart. That's not scaling. That's suffering.\n\n8-12 weeks. One system. Works while you sleep.",
  },
  {
    text: "Four People. Direct Access. No Bullshit.",
    description:
      "Another 'just two more days' promise. Another deadline missed. Another invoice for work that doesn't exist.\n\nFour people. Direct access. No bullshit. Let's talk.",
  },
  {
    text: "Replace Your Tool Graveyard",
    description:
      "Zapier, Stripe, Shopify, Calendly, Klaviyo, and nine other tools holding your business together with digital duct tape. One breaks, the whole thing collapses.\n\nWe build systems that work. You run a business that doesn't need you.",
  },
  {
    text: "Software That Doesn't Break When It Matters",
    description:
      "Every launch is Russian roulette. Will the payment processor work? Will you lose $15,000 because something broke at the worst possible time?\n\nWe take 4 new projects per quarter. If you're ready, apply here.",
  },
];

export const testimonials = [
  {
    quote:
      "I was spending more time managing my tools than running my business. Every week something new broke. I felt like a full-time IT department for my own company.",
    author: "Founder",
    role: "E-commerce Business",
  },
  {
    quote:
      "My last developer promised three weeks. Six months later, half a product and a bill for twice what we agreed. Then he just... disappeared. No warning. Just gone.",
    author: "CEO",
    role: "SaaS Startup",
  },
  {
    quote:
      "I'm paying for Shopify, Klaviyo, Zapier, Slack, Notion, Calendly, Stripe, ClickFunnels, and four other things I can't even remember. None of them talk to each other. I'm just... tired.",
    author: "Owner",
    role: "Service Business",
  },
];

export const videoTestimonials = [
  {
    name: "Founder",
    role: "Owner",
    company: "E-commerce Business",
  },
  {
    name: "CEO",
    role: "CEO",
    company: "SaaS Startup",
  },
  {
    name: "Owner",
    role: "Owner",
    company: "Service Business",
  },
];

export const navLinks = [
  { label: "Work", href: "/work", index: "01" },
  { label: "Blog", href: "/resources", index: "02" },
  { label: "About", href: "/about", index: "03" },
];

export const footerDescription =
  "Four people who build software that works. No account managers. No retainer hell. No vendor lock-in. Just Isaac, Mario, Danny, and Josh shipping products in 8-12 weeks that replace your subscription circus and actually make you money.";

export const footerContact = {
  email: "hello@dourodigital.com",
  phone: "+351 123 456 789",
  address: "Remote (We work with clients globally)",
};

export const footerNav = [
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/book-a-call" },
];
