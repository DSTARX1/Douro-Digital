export interface Service {
  title: string;
  description: string;
  href: string;
}

export const services: Service[] = [
  {
    title: "The Money Printer",
    description:
      "We reverse-engineer how your best customers find and buy from you, then automate the whole damn thing. Think of it like building a vending machine that sells $5k\u2013$50k services instead of Snickers bars.",
    href: "/ai-solutions",
  },
  {
    title: "AI That Doesn't Sound Braindead",
    description:
      "Voice AI that answers calls faster than your competitor's intern can Google the answer. Social media bots that don't sound like they're having a stroke. Systems that actually work (crazy concept, right?).",
    href: "/custom-development",
  },
  {
    title: "The Bleed Audit",
    description:
      "We'll tell you exactly where your current setup is hemorrhaging money. No bullshit. No upsell. Just \"here's what's broken and here's how to fix it.\" Like a health checkup, but for your business. Except we won't judge you for ignoring the problem for 18 months.",
    href: "/ai-consulting",
  },
];

export const servicesIntro =
  "We build three things: Systems that run themselves. Custom products when off-the-shelf doesn't cut it. And audits that tell you what's actually broken. No retainers. No vendor lock-in. Just real work that fixes real problems.";

export const servicesFooter =
  "Not sure which one you need? Let's talk. We'll tell you honestly what makes sense for where you are right now. No pressure. No pitch. Just real advice from people who actually build this stuff.";
