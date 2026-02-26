export interface Service {
  title: string;
  description: string;
  href: string;
}

export const services: Service[] = [
  {
    title: "Systems That Run Themselves",
    description:
      "14 subscriptions. None of them talk to each other. We replace your digital chaos with one system.\n\nCustomer comes in? Handled. Payments? Automatic. Follow-ups? Running. No more Zapier duct tape. No more seven dashboards.\n\n- Custom-built for YOUR business (not templates)\n- Handles customer journey start to finish\n- Built fast, no bloated timelines\n\nProject-based. Fixed scope.",
    href: "/ai-solutions",
  },
  {
    title: "Custom Builds",
    description:
      "Shopify. Too limited. WordPress. Too clunky. No-code tools. Hit the ceiling. Freelancer on Upwork. Disappeared.\n\nWe build what off-the-shelf can't:\n\n- Marketplace platforms that don't suck\n- Booking systems with logic Calendly can't handle\n- Checkout flows for complex offers\n- Products that combine three tools into one\n\nBuilt to your specs. Fixed scope. No surprises.",
    href: "/custom-development",
  },
  {
    title: "System Audits",
    description:
      "Something's broken but you can't figure out WHERE. We audit your entire system \u2014 first click to final purchase.\n\nWhere leads leak. Where you're overpaying. Where it's held together with hope and Zapier prayers.\n\nYou get a real roadmap. Not a 50-page consultant report. \"Fix this first. Here's what it costs. Here's what it saves.\"\n\nFixed-price. Fast turnaround.",
    href: "/ai-consulting",
  },
];

export const servicesIntro =
  "We build three things: Systems that run themselves. Custom products when off-the-shelf doesn't cut it. And audits that tell you what's actually broken. No retainers. No vendor lock-in. Just real work that fixes real problems.";

export const servicesFooter =
  "Not sure which one you need? Let's talk. We'll tell you honestly what makes sense for where you are right now. No pressure. No pitch. Just real advice from people who actually build this stuff.";
