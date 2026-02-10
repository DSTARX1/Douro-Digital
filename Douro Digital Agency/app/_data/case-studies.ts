export interface CaseStudyStat {
  label: string;
  value: string;
}

export interface BeforeAfter {
  label: string;
  before: string;
  after: string;
}

export interface PracticeApplication {
  title: string;
  description: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  color: string;
  image?: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
  tagline?: string;
  heroStats?: CaseStudyStat[];
  projectDetails?: {
    client?: string;
    year?: string;
    services?: string[];
    platform?: string;
    duration?: string;
  };
  imageGrid?: CaseStudyImage[];
  challenge?: {
    heading: string;
    description: string;
  };
  solution?: {
    heading: string;
    description: string;
    features: string[];
  };
  results?: {
    heading: string;
    items: BeforeAfter[];
  };
  practiceApplication?: {
    heading: string;
    scenarios: PracticeApplication[];
    callout: string;
  };
  cta?: {
    heading: string;
    buttonText: string;
    buttonHref: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  demoVideo?: string;
  approachImage?: string;
  galleryImages?: CaseStudyImage[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "voice-noob",
    title: "Voice Noob",
    subtitle: "AI Reception Platform",
    color: "#2a2a4e",
    image: "/images/voice-noob-product.jpeg",
    tagline: "Never miss another patient call. Turn missed calls into 60–75x ROI.",
    projectDetails: {
      client: "Voice Noob",
      year: "2026",
      services: [
        "Product Strategy & Positioning",
        "Pricing & Packaging Design",
        "Go-to-Market Planning",
        "Revenue Modeling & Unit Economics",
        "Vertical Playbook Development",
        "Competitive Analysis",
      ],
      platform: "B2B SaaS",
      duration: "8 weeks",
    },
    imageGrid: [
      { src: "/images/voice-noob-product.jpeg", alt: "Voice Noob product interface" },
    ],
    heroStats: [
      { label: "New Patients/Month", value: "+9" },
      { label: "Customer ROI", value: "60–75x" },
      { label: "Gross Margin", value: ">60%" },
      { label: "Missed-Call Recovery", value: "100%" },
    ],
    challenge: {
      heading: "The Challenge",
      description:
        "Dental clinics are bleeding revenue through their phone lines — 62% of calls go unanswered during peak hours, 85% of missed callers never call back, and 82% won't leave voicemail. Each missed new-patient call costs $2,000–$2,500 in lifetime value. Existing solutions force practices to choose between expensive human receptionists ($3,000–$5,600/mo) and developer-only API platforms ($400–$800/mo real cost) with no UI, no CRM, and no patient follow-up. The gap: clinics need 24/7 reception at predictable, budgetable prices — a complete system, not a developer toolkit.",
    },
    solution: {
      heading: "The Solution",
      description:
        "We designed Voice Noob's complete go-to-market strategy for dental and clinic verticals: an open-source AI reception platform that helps practices recover $18K–$22.5K monthly in missed-patient revenue for just $299/mo — enterprise-grade AI phone agents at clinic-friendly prices.",
      features: [
        "4-tier pricing system optimized for 70% utilization and >60% gross margin",
        "Dental-specific playbook with inbound scheduling, intake, and insurance FAQ handling",
        "Outbound campaign system for recall reminders, post-op check-ins, and reactivation",
        "Competitive positioning framework with 7 differentiators vs API platforms and human services",
        "ROI calculators showing 60–75x return for dental practices",
        "Sales enablement package with objection handling, demo scripts, and clinic-specific pitches",
      ],
    },
    results: {
      heading: "The Results",
      items: [
        { label: "New Patients/Month", before: "Baseline (60% conversion)", after: "+9 patients (70% conversion)" },
        { label: "Monthly Revenue Recovered", before: "$0 (62% calls missed)", after: "$18K–$22.5K/mo (60–75:1 ROI)" },
        { label: "CAC Payback Period", before: "Undefined", after: "<2 months" },
      ],
    },
    practiceApplication: {
      heading: "How This Applies to Your Practice",
      scenarios: [
        {
          title: "Every Patient Call Answered, 24/7",
          description:
            "Your front desk is juggling phones, check-ins, and insurance verification simultaneously — and 62% of calls are going unanswered. After-hours and weekend calls go straight to voicemail, and patients dial the next clinic on their list. Voice Noob answers every call instantly, books appointments in real-time, and routes emergencies — even at 10pm on a Saturday.",
        },
        {
          title: "Flat-Rate Pricing That Clinics Can Budget",
          description:
            "Practices budget in monthly line items, not variable costs. $299/mo is predictable — less than a single new-patient acquisition cost. Per-minute pricing from competitors creates anxiety and bill shock. We designed a 4-tier structure that works for solo practices and multi-location groups alike.",
        },
        {
          title: "Recall & Reactivation on Autopilot",
          description:
            "The real revenue isn't just answering inbound calls — it's the outbound campaigns. Automated recall reminders, post-op check-in calls, dormant patient reactivation, and review requests run without your team lifting a finger. No competitor at clinic price points offers this, turning the phone from cost center into revenue engine.",
        },
      ],
      callout:
        "One recovered new-patient call ($2,000–$2,500 LTV) pays for 8 months of Voice Noob. Nine new patients a month means $18K–$22.5K in recovered revenue — for $299/mo.",
    },
    cta: {
      heading: "Your next patient is calling right now. Make sure someone answers — every time, 24/7.",
      buttonText: "Book a Strategy Sprint",
      buttonHref: "#",
    },
    testimonial: {
      quote: "Before this strategy work, we had a great product but no clear path to market. Now we know exactly who to target first, what to charge, and how to pitch it. The vertical playbooks are gold — we can hand them to a sales rep and they're ready to demo in 30 minutes.",
      author: "Voice Noob",
      role: "Founding Team",
    },
    demoVideo: "/videos/voice-noob-demo.mp4",
    approachImage: "/images/voice-noob-product.jpeg",
    galleryImages: [
      { src: "/images/voice-noob-product.jpeg", alt: "Voice Noob product interface" },
    ],
  },
  {
    slug: "pocket-agent",
    title: "Pocket Agent",
    subtitle: "AI Assistant",
    color: "#1e3348",
    image: "/images/pocket-agent-home.png",
    tagline: "One AI assistant that handles what your front desk can't keep up with",
    projectDetails: {
      client: "Pocket Agent",
      year: "2024",
      services: ["Product Strategy", "AI Integration", "Full-Stack Development"],
      platform: "Web App",
      duration: "3 months",
    },
    imageGrid: [
      { src: "/images/pocket-agent-chat.png", alt: "Pocket Agent chat interface" },
      { src: "/images/pocket-agent-customize.png", alt: "Pocket Agent customization settings" },
      { src: "/images/pocket-agent-skills.png", alt: "Pocket Agent superpowers and skills" },
    ],
    heroStats: [
      { label: "Hours Saved / Week", value: "18" },
      { label: "Follow-Up Rate", value: "100%" },
      { label: "Cancellation Recovery", value: "73%" },
      { label: "Response Time", value: "<30s" },
    ],
    challenge: {
      heading: "The Challenge",
      description:
        "Small business owners were drowning in admin — scheduling, follow-ups, and reminders consuming 15–20 hours per week. Tools were fragmented across calendar apps, CRMs, and email platforms with no unified system to keep everything from falling through the cracks.",
    },
    solution: {
      heading: "The Solution",
      description:
        "We built an AI assistant that consolidates scheduling, follow-up, and client communication into one intelligent system — handling the work that buries front desk teams.",
      features: [
        "Automated follow-up sequences after every consultation",
        "Smart cancellation recovery with waitlist management",
        "Daily practice briefing with actionable insights",
        "Two-way SMS and email patient communication",
        "Integration with major EMR/PMS systems",
        "Dormant patient reactivation campaigns",
      ],
    },
    results: {
      heading: "The Results",
      items: [
        { label: "Weekly Admin Hours", before: "18 hrs", after: "2 hrs" },
        { label: "Follow-Up Completion", before: "34%", after: "100%" },
        { label: "Cancellation Fill Rate", before: "12%", after: "73%" },
      ],
    },
    practiceApplication: {
      heading: "How This Applies to Your Practice",
      scenarios: [
        {
          title: "Zero Missed Follow-Ups, Ever",
          description:
            "The \"sticky note on the monitor\" problem: $380K+ in unscheduled treatment sitting in your EMR. Pocket Agent's automated follow-up means every consultation gets a personalized sequence — post-procedure check-ins, recall reminders, reactivation for dormant patients. No more printing lists that never get called.",
        },
        {
          title: "Fill Every Cancellation in Minutes",
          description:
            "No-show rates hit 18–22% for new patients and 25–30% for high-ticket consultations. When someone cancels, AI instantly contacts the waitlist. No manual phone calls, no empty chairs, no lost revenue from slots that could have been filled.",
        },
        {
          title: "Your Practice Briefing, Every Morning",
          description:
            "Start each day knowing: today's appointments, patients needing pre-visit forms, outstanding treatment follow-ups, at-risk patients who haven't rebooked. Your team walks in prepared instead of firefighting through the first two hours.",
        },
      ],
      callout:
        "Your front desk is juggling phones, check-ins, insurance, and 6 unreturned voicemails. One AI assistant recovers what's falling through the cracks — and it costs less than another hire.",
    },
    cta: {
      heading: "Every empty chair is revenue that walked out the door. AI fills the gaps your team can't get to.",
      buttonText: "Book a Call",
      buttonHref: "#",
    },
    testimonial: {
      quote: "Your front desk is juggling phones, check-ins, insurance, and 6 unreturned voicemails. One AI assistant recovers what's falling through the cracks — and it costs less than another hire.",
      author: "Douro Digital",
      role: "Case Insight",
    },
    approachImage: "/images/pocket-agent-chat.png",
    galleryImages: [
      { src: "/images/pocket-agent-home.png", alt: "Pocket Agent welcome screen" },
      { src: "/images/pocket-agent-customize.png", alt: "Pocket Agent customization settings" },
      { src: "/images/pocket-agent-graph.png", alt: "Pocket Agent knowledge graph" },
      { src: "/images/pocket-agent-skills.png", alt: "Pocket Agent superpowers and skills" },
      { src: "/images/pocket-agent-chat.png", alt: "Pocket Agent chat interface" },
    ],
  },
  {
    slug: "social-bro",
    title: "Social Bro",
    subtitle: "Social Media Platform",
    color: "#2e1a4e",
    image: "/images/social-bro-product.jpeg",
    objectPosition: "0% 0%",
    tagline: "AI-driven content that turns followers into patients",
    projectDetails: {
      client: "Social Bro",
      year: "2024",
      services: ["Brand Strategy", "AI Content Engine", "Platform Development"],
      platform: "SaaS",
      duration: "5 months",
    },
    imageGrid: [
      { src: "/images/social-bro-product.jpeg", alt: "Social Bro product interface", objectPosition: "0% 0%" },
    ],
    heroStats: [
      { label: "Engagement Lift", value: "4.2x" },
      { label: "Content Output", value: "10x" },
      { label: "Lead Cost Reduction", value: "58%" },
      { label: "Review Generation", value: "+340%" },
    ],
    challenge: {
      heading: "The Challenge",
      description:
        "Local businesses were spending thousands on social media with no strategy. Generic scheduling tools posted into the void with no conversion tracking — vanity metrics with zero connection to actual bookings or revenue.",
    },
    solution: {
      heading: "The Solution",
      description:
        "We built a social media platform powered by AI that generates, optimizes, and measures content specifically designed to drive real business outcomes — not just likes.",
      features: [
        "AI-generated posts optimized for booking conversions",
        "Before-and-after content creation from case photos",
        "Automated review request sequences",
        "Local SEO integration for Google Business Profile",
        "Performance analytics tied to actual appointments",
        "Multi-platform scheduling with platform-specific optimization",
      ],
    },
    results: {
      heading: "The Results",
      items: [
        { label: "Cost Per Lead", before: "$127", after: "$53" },
        { label: "Monthly Content Output", before: "8 posts", after: "80+ posts" },
        { label: "Google Review Rating", before: "3.8 stars", after: "4.9 stars" },
      ],
    },
    practiceApplication: {
      heading: "How This Applies to Your Practice",
      scenarios: [
        {
          title: "Stop Wasting Your $3K–$10K/Month Ad Spend",
          description:
            "Clinics spend $3K–$10K+ per month on ads, but 30–80% of resulting leads are mishandled or never contacted. Social Bro's AI-driven content means every post is optimized for the actions that matter: DMs, calls, bookings — not vanity likes that never convert.",
        },
        {
          title: "Before-and-After Posts That Book Appointments",
          description:
            "For aesthetic practices, transformation content drives 4x more engagement. AI generates compliant, compelling posts from your case photos with captions optimized to drive appointment requests. Your smile gallery becomes your best salesperson.",
        },
        {
          title: "5-Star Reviews on Autopilot",
          description:
            "Reputation is everything in local search. The same AI that drives social engagement automates review requests to satisfied patients at the perfect moment — right after a successful procedure. More reviews means higher Google ranking means more patients finding you first.",
        },
      ],
      callout:
        "You're already spending $3K–$10K a month getting people to call. Social Bro makes sure they actually want to — and that when they do, your brand is the one they trust.",
    },
    cta: {
      heading: "Your next patient is scrolling right now. Make sure they stop at your practice, not your competitor's.",
      buttonText: "Book a Call",
      buttonHref: "#",
    },
    testimonial: {
      quote: "You're already spending $3K–$10K a month getting people to call. Social Bro makes sure they actually want to — and that when they do, your brand is the one they trust.",
      author: "Douro Digital",
      role: "Case Insight",
    },
    demoVideo: "/videos/social-bro-demo.mp4",
    approachImage: "/images/social-bro-product.jpeg",
    galleryImages: [
      { src: "/images/social-bro-product.jpeg", alt: "Social Bro product interface" },
    ],
  },
  {
    slug: "viral-kid",
    title: "Viral Kid",
    subtitle: "Social Engagement Platform",
    color: "#1b131e",
    image: "/images/viral-kid-product.jpeg",
    objectFit: "contain",
    tagline:
      "Join every conversation where your customers already are. Automatically.",
    projectDetails: {
      client: "Viral Kid",
      year: "2026",
      services: [
        "Product Strategy & Market Positioning",
        "Pricing & Packaging Architecture",
        "Go-to-Market Planning & Channel Strategy",
        "Revenue Modeling & Unit Economics",
        "Industry Playbook Development",
        "Competitive Differentiation",
      ],
      platform: "B2B SaaS",
      duration: "8 weeks",
    },
    imageGrid: [
      { src: "/images/viral-kid-product.jpeg", alt: "Viral Kid product interface", objectFit: "contain" },
    ],
    heroStats: [
      { label: "ROI Range", value: "382–5,120%" },
      { label: "Target SMBs", value: "6.1M" },
      { label: "Gross Margin", value: ">59%" },
      { label: "Verticals", value: "4" },
    ],
    challenge: {
      heading: "The Challenge",
      description:
        "Local businesses are invisible in the viral social conversations happening around them every day — missing 99% of high-intent discussions where potential customers are actively asking for recommendations. Existing social tools only schedule posts to owned audiences or auto-reply to comments on owned content. No tool automates proactive engagement in organic conversations at SMB-friendly prices, leaving a massive gap between expensive agency services and DIY guesswork.",
    },
    solution: {
      heading: "The Solution",
      description:
        "We ran an 8-week strategy sprint to define the go-to-market for proactive social engagement automation — a new category where AI finds and joins real conversations on behalf of local businesses, turning social chatter into booked jobs.",
      features: [
        "4-tier pricing system optimized for SMB budgets with >59% gross margin",
        "Vertical playbooks for HVAC, dental, pizza, and real estate with platform-specific engagement rules",
        "Risk mitigation framework for platform compliance and rate limiting",
        "Competitive positioning against agencies, schedulers, and manual engagement",
        "Objection handling library for sales enablement across all verticals",
        "Phased GTM roadmap from 10-customer pilot to scaled acquisition",
      ],
    },
    results: {
      heading: "The Results",
      items: [
        {
          label: "Customer ROI (HVAC)",
          before: "$0 (zero engagement)",
          after: "904–5,120% annual ROI",
        },
        {
          label: "Category Position",
          before: "No category existed",
          after: "New category: Proactive Engagement",
        },
        {
          label: "Cost vs Agency",
          before: "$1,500/mo agency",
          after: "$199–$499/mo (60–90% cheaper)",
        },
      ],
    },
    practiceApplication: {
      heading: "How This Applies to Your Business",
      scenarios: [
        {
          title: "Find Customers Already Looking for You",
          description:
            "Hundreds of people in your city are asking for HVAC repair, pizza recommendations, or dentist referrals on Twitter, Reddit, and Instagram every month. Right now, you're invisible in those conversations. Viral Kid's AI finds them automatically and gets you in front of people who are actively looking for your service — before your competitors even know the conversation exists.",
        },
        {
          title: "Authentic Engagement, Not Corporate Spam",
          description:
            "Auto-replies that sound like marketing get ignored or flagged. Viral Kid generates context-aware, natural-sounding responses with built-in reply variation and rate limiting to stay compliant. The result: engagement that feels like a real recommendation, not a bot.",
        },
        {
          title: "Agency Results at a Fraction of the Cost",
          description:
            "Marketing agencies charge $1,500–$3,000/mo and still rely on manual scrolling to find engagement opportunities. Viral Kid automates what takes an agency team 15+ hours a week — for $199–$499/mo. Better coverage, faster response times, and ROI that pays for itself from the first booked job.",
        },
      ],
      callout:
        "One HVAC job from a Twitter conversation pays for 6+ months of Viral Kid. Three booked jobs a month means $8,400+ in revenue for $299.",
    },
    cta: {
      heading:
        "Your next customer is asking for a recommendation right now. Make sure your business is the answer.",
      buttonText: "Book a Strategy Sprint",
      buttonHref: "#",
    },
    testimonial: {
      quote:
        "We were spending $1,200/month on a social media agency that posted 3 times a week and replied to our comments. They never once engaged with the hundreds of people asking for HVAC recommendations on Twitter every month. Viral-Kid found those conversations automatically and got us in front of thousands of people who were actively looking for service. First month: 8 profile visits turned into 3 booked jobs. That's $8,400 in revenue for $299. The ROI math is insane.",
      author: "HVAC Pilot Customer",
      role: "Early Adopter",
    },
    demoVideo: "/videos/viral-kid-demo.mp4",
    approachImage: "/images/viral-kid-product.jpeg",
    galleryImages: [
      { src: "/images/viral-kid-product.jpeg", alt: "Viral Kid product interface", objectFit: "contain" },
    ],
  },
];
