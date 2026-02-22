export interface CaseStudyStat {
  label: string;
  value: string;
}

export interface BeforeAfter {
  label: string;
  before: string;
  after: string;
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
  relatedBlogSlugs?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "voice-noob",
    title: "Voice Noob",
    subtitle: "AI Reception Platform",
    color: "#2a2a4e",
    image: "/images/voice-noob-product.jpeg",
    tagline: "62% of your calls go unanswered. Every one is money walking out the door.",
    projectDetails: {
      client: "Voice Noob",
      year: "2026",
      services: [
        "Figured out who to sell to and why they'd care",
        "Built the pricing so it actually makes money",
        "Mapped out the launch — first 10 customers to scale",
        "Ran the numbers on every revenue scenario",
        "Created plug-and-play sales playbooks by industry",
        "Tore apart every competitor to find the gaps",
      ],
      platform: "B2B SaaS",
      duration: "8 weeks",
    },
    imageGrid: [
      { src: "/images/voice-noob-product.jpeg", alt: "Voice Noob product interface" },
    ],
    heroStats: [
      { label: "New Customers/Month", value: "+9" },
      { label: "Customer ROI", value: "60–75x" },
      { label: "Gross Margin", value: ">60%" },
      { label: "Missed-Call Recovery", value: "100%" },
    ],
    challenge: {
      heading: "The Phone Was Ringing. Nobody Was Answering.",
      description:
        "Here's a stat that should make any business owner wince: 62% of calls go unanswered during peak hours. And 85% of those people? They never call back. They just call the next place on Google. Voicemail doesn't save you either — 82% won't bother leaving one. Every missed call from a potential customer is thousands in lifetime value, gone. The options on the market were garbage: either hire a human receptionist for $3,000–$5,600/mo, or wrestle with some developer-only API platform that costs $400–$800/mo and has no UI, no CRM, no follow-up system. Nothing for the business that just needs the damn phone answered, 24/7, at a price that makes sense.",
    },
    solution: {
      heading: "We Built the Playbook to Launch It",
      description:
        "We designed Voice Noob's entire go-to-market — an open-source AI reception platform that recovers $18K–$22.5K/mo in missed-call revenue for $299/mo. Enterprise-grade AI phone agents at prices a local business can actually stomach.",
      features: [
        "Pricing that works for solo shops AND multi-location chains — 4 tiers, >60% margins, no bill shock",
        "Industry playbooks so a new sales rep can demo in 30 minutes flat",
        "Outbound campaigns that chase reminders, follow-ups, and dormant customers automatically",
        "7 clear differentiators vs the API platforms and the expensive human services",
        "ROI calculators that make the pitch a no-brainer — 60–75x return, on paper, before the demo",
        "Full sales toolkit: objection handling, demo scripts, industry-specific pitches ready to go",
      ],
    },
    results: {
      heading: "The Results",
      items: [
        { label: "New Customers/Month", before: "Baseline (60% conversion)", after: "+9 customers (70% conversion)" },
        { label: "Monthly Revenue Recovered", before: "$0 (62% calls missed)", after: "$18K–$22.5K/mo (60–75:1 ROI)" },
        { label: "CAC Payback Period", before: "Undefined", after: "<2 months" },
      ],
    },
    cta: {
      heading: "Your next customer is calling right now. Make sure someone answers — every time, 24/7.",
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
    relatedBlogSlugs: ["ai-voice-agents-hipaa-call-handling"],
  },
  {
    slug: "pocket-agent",
    title: "Pocket Agent",
    subtitle: "AI Assistant",
    color: "#1e3348",
    image: "/images/pocket-agent-home.png",
    tagline: "Your team is drowning in admin. This fixes that.",
    projectDetails: {
      client: "Pocket Agent",
      year: "2024",
      services: ["Product strategy from scratch", "Wired in AI that actually does things", "Built the whole platform end-to-end"],
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
      heading: "18 Hours a Week, Gone on Admin",
      description:
        "Small business owners were burning 15–20 hours a week on scheduling, follow-ups, and reminders. Not growing the business — just keeping it from falling apart. Tools were scattered across calendar apps, CRMs, and email platforms with zero connection between them. Things fell through the cracks constantly. Not because anyone was lazy — because nobody has 20 hours a week to spend on admin and still run a business.",
    },
    solution: {
      heading: "One AI That Does What 3 Hires Can't Keep Up With",
      description:
        "We built an AI assistant that swallows scheduling, follow-up, and client communication into one system — handling the boring-but-critical work that buries teams.",
      features: [
        "Every consultation gets a follow-up sequence — automatically, every time, no exceptions",
        "Someone cancels? AI hits the waitlist instantly. Slot filled before you even knew it was empty",
        "Morning briefing tells you exactly what's happening today — who's coming, who's ghosting, what needs attention",
        "Two-way SMS and email so clients hear back in seconds, not hours",
        "Plugs into whatever CRM and scheduling system you're already using",
        "Dormant clients get reactivation campaigns — revenue you forgot you had",
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
    cta: {
      heading: "Every empty slot is revenue that walked out the door. AI fills the gaps your team can't get to.",
      buttonText: "Book a Call",
      buttonHref: "#",
    },
    testimonial: {
      quote: "Your team is juggling phones, check-ins, and unreturned messages. One AI assistant recovers what's falling through the cracks — and it costs less than another hire.",
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
    relatedBlogSlugs: [
      "automating-patient-intake-without-compromising-phi",
      "reducing-no-shows-ai-scheduling",
    ],
  },
  {
    slug: "social-bro",
    title: "Social Bro",
    subtitle: "Social Media Platform",
    color: "#2e1a4e",
    image: "/images/social-bro-product.jpeg",
    objectPosition: "0% 0%",
    tagline: "You're posting into the void. This makes sure someone's actually listening.",
    projectDetails: {
      client: "Social Bro",
      year: "2024",
      services: ["Built the brand from the ground up", "AI content engine that writes posts that convert", "Full platform — design through deployment"],
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
      heading: "Thousands on Social Media. Nothing to Show for It.",
      description:
        "Local businesses were throwing money at social media with zero strategy. Generic scheduling tools fired posts into the void — likes, maybe a comment from your aunt, but no connection to actual bookings or revenue. Vanity metrics everywhere, conversions nowhere.",
    },
    solution: {
      heading: "AI That Posts With a Purpose",
      description:
        "We built a social media platform where AI generates, optimizes, and measures content designed to drive bookings — not just engagement metrics that look good in a report nobody reads.",
      features: [
        "AI writes posts engineered to get DMs, calls, and bookings — not just likes",
        "Snap a before-and-after photo, AI turns it into a lead-generating post",
        "Happy customer? Automated review request hits their inbox at exactly the right moment",
        "Google Business Profile stays fed — local SEO on autopilot",
        "Analytics tied to actual revenue, not vanity metrics",
        "Multi-platform scheduling that optimizes for each platform instead of copy-pasting everywhere",
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
    cta: {
      heading: "Your next customer is scrolling right now. Make sure they stop at your business, not your competitor's.",
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
      "People are asking for recommendations right now. Your competitors are answering. You're not.",
    projectDetails: {
      client: "Viral Kid",
      year: "2026",
      services: [
        "Figured out the market positioning for a category that didn't exist yet",
        "Designed pricing that undercuts agencies by 90% and still prints margin",
        "Mapped the launch from first 10 customers to full scale",
        "Ran every revenue model until the numbers stopped lying",
        "Built sales playbooks for HVAC, dental, pizza, and real estate",
        "Found every gap the competitors left wide open",
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
      heading: "Invisible in Every Conversation That Matters",
      description:
        "Hundreds of people in your city are asking for recommendations on Twitter, Reddit, and Instagram right now. \"Anyone know a good plumber?\" \"Best pizza in [your town]?\" And your business is nowhere in those threads. Existing social tools only schedule posts to your own followers or auto-reply to comments on your own content. Nobody was automating the part that actually matters — jumping into organic conversations where real people are actively looking for what you sell. The options were: hire an agency for $1,500–$3,000/mo to manually scroll Twitter, or just... miss all of it.",
    },
    solution: {
      heading: "We Wrote the Playbook for a Brand New Category",
      description:
        "8-week strategy sprint to define everything Viral Kid needed to launch proactive social engagement automation — AI that finds real conversations and joins them on behalf of local businesses, turning social chatter into booked jobs.",
      features: [
        "Pricing that starts at $199/mo — 90% cheaper than agencies, with >59% gross margin baked in",
        "Playbooks for HVAC, dental, pizza, and real estate with engagement rules tuned per platform",
        "Compliance framework so the AI doesn't get accounts banned — rate limiting, reply variation, the works",
        "Positioning that makes agencies, schedulers, and manual engagement look prehistoric",
        "Objection handling scripts for every vertical — sales team picks up and goes",
        "Launch roadmap: 10-customer pilot → validate → scale. No guesswork.",
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
