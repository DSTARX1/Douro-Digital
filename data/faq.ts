import type { FAQItem } from "@/components/faq/FAQ";

export const homeFAQ: FAQItem[] = [
  {
    question: "What exactly is an AI agent, and how is it different from a chatbot?",
    answer:
      "A chatbot follows a script. An AI agent makes decisions, takes actions, and works across your systems — booking appointments, qualifying leads, following up with customers, updating your CRM. It operates like a tireless employee who never forgets a task.",
  },
  {
    question: "How long does it take to build and deploy a custom AI agent?",
    answer:
      "Most projects go from kickoff to production in four to six weeks. Simple voice agents or intake automations can ship in two. We scope aggressively because every week your team spends on manual work is revenue left on the table.",
  },
  {
    question: "Do I need to rip out my existing software to use your solutions?",
    answer:
      "No. We build around what you already have. Our agents integrate with your CRM, EHR, scheduling system, and phone lines through APIs. If your current tools do not have APIs, we build middleware that bridges the gap.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "Healthcare, home services, legal, and professional services — any business where missed calls, slow follow-ups, or manual admin are costing real money. If your team is drowning in repetitive tasks, we can help.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "Security is architecture, not an afterthought. For healthcare clients we build HIPAA-compliant systems with end-to-end encryption, signed BAAs, and audit logging. For all clients we follow zero-trust principles and never store data we do not need.",
  },
  {
    question: "What does it cost to work with Douro Digital?",
    answer:
      "Projects typically start at $15,000 for a focused AI agent build. Ongoing platform work is scoped monthly. We do not do hourly billing — you get a fixed price for a defined outcome, agreed before any work begins.",
  },
];

export const aboutFAQ: FAQItem[] = [
  {
    question: "How big is your team?",
    answer:
      "Four people. No layers, no account managers, no hand-offs. The person you talk to on the call is the person building your system. That is deliberate — small teams ship faster and care more.",
  },
  {
    question: "Where are you based?",
    answer:
      "Porto, Portugal — but we work with clients across the US, UK, and Europe. Every engagement is remote-first. Time zones have never been a problem because we structure communication around async updates and focused sprint calls.",
  },
  {
    question: "What happens after the project launches?",
    answer:
      "We do not disappear. Every build includes a support window for bug fixes and tuning. After that, most clients move to a monthly retainer for ongoing improvements, new features, and monitoring. We treat your system like our own.",
  },
  {
    question: "Can I see examples of your work before committing?",
    answer:
      "Yes. Our case studies on this site walk through real projects with real numbers — revenue recovered, hours saved, costs reduced. We will also connect you with past clients for a reference call if you want to hear it directly.",
  },
  {
    question: "What if I am not sure what I need yet?",
    answer:
      "That is what the first call is for. We will map your workflows, identify where time and money are leaking, and recommend the highest-impact starting point. No obligation, no pitch deck — just a conversation about your business.",
  },
];
