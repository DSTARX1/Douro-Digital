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
    subtitle: "Voice Automation Platform That Actually Works",
    color: "#2a2a4e",
    image: "/images/voice-noob-product.jpeg",
    tagline:
      "Voice automation was either too technical or too limited. Small businesses needed something in between.",
    projectDetails: {
      client: "Voice Noob",
      year: "2026",
      services: [
        "Built voice automation platform from scratch",
        "Drag-and-drop workflow builder for non-technical users",
        "Adaptive voice recognition that learns from usage",
        "Fallback logic for graceful human handoff",
        "24/7 customer intake and appointment booking",
        "Visual if-then logic flows without coding",
      ],
      platform: "B2B SaaS",
      duration: "",
    },
    imageGrid: [
      {
        src: "/images/voice-noob-product.jpeg",
        alt: "Voice Noob product interface",
      },
    ],
    heroStats: [
      { label: "New Customers/Month", value: "+9" },
      { label: "Customer ROI", value: "60\u201375x" },
      { label: "Gross Margin", value: ">60%" },
      { label: "Missed-Call Recovery", value: "100%" },
    ],
    challenge: {
      heading: "Voice Automation Was Either Too Technical or Too Limited",
      description:
        "Voice automation tools were either too technical (required coding and looked like the Matrix) or too limited (could barely handle 'press 1 for sales'). Small businesses needed something in between \u2014 powerful enough to handle real logic but simple enough that a non-technical person could build workflows.\n\nThe system had to handle different accents, unexpected customer requests, and let non-technical users build complex multi-step logic. All without writing code.",
    },
    solution: {
      heading: "A Platform Non-Technical Users Can Actually Use",
      description:
        "Built Voice Noob. Non-technical users build voice automation workflows without code, with enough flexibility for complex business logic.\n\nAdaptive recognition that learns from usage. Fallback logic that routes to humans gracefully. Visual builder that makes if-then logic obvious without programming. Set it up in an afternoon and it just works.",
      features: [
        "Voice workflow builder (drag and drop, no coding required)",
        "Automatic appointment booking (syncs with calendars, sends confirmations)",
        "Customer intake without human involvement",
        "Graceful human handoff when needed",
        "Works 24/7 (no staffing costs, no missed calls)",
      ],
    },
    results: {
      heading: "The Results",
      items: [
        {
          label: "New Customers/Month",
          before: "Baseline (60% conversion)",
          after: "+9 customers (70% conversion)",
        },
        {
          label: "Monthly Revenue Recovered",
          before: "$0 (62% calls missed)",
          after: "$18K\u2013$22.5K/mo (60\u201375:1 ROI)",
        },
        {
          label: "CAC Payback Period",
          before: "Undefined",
          after: "<2 months",
        },
      ],
    },
    cta: {
      heading:
        "Want to build something that handles customer intake automatically? Let's talk.",
      buttonText: "Book a Strategy Sprint",
      buttonHref: "#",
    },
    testimonial: {
      quote:
        "Before this strategy work, we had a great product but no clear path to market. Now we know exactly who to target first, what to charge, and how to pitch it. The vertical playbooks are gold.",
      author: "Voice Noob",
      role: "Founding Team",
    },
    demoVideo: "/videos/voice-noob-demo.mp4",
    approachImage: "/images/voice-noob-product.jpeg",
    galleryImages: [
      {
        src: "/images/voice-noob-product.jpeg",
        alt: "Voice Noob product interface",
      },
    ],
    relatedBlogSlugs: ["ai-voice-agents-hipaa-call-handling"],
  },
  {
    slug: "pocket-agent",
    title: "Pocket Agent",
    subtitle: "Customer Service System That Runs While You Sleep",
    color: "#1e3348",
    image: "/images/pocket-agent-home.png",
    tagline:
      "Customers expect instant answers. You can't be available 24/7. Miss a question at 9pm and you lose the sale.",
    projectDetails: {
      client: "Pocket Agent",
      year: "2024",
      services: [
        "Built automated customer service system from scratch",
        "Dynamic response system that adapts tone",
        "Confidence scoring for intelligent escalation",
        "Multi-channel support (email, chat, social)",
        "Customizable routing logic per business",
        "Full conversation context for human handoff",
      ],
      platform: "Web App",
      duration: "",
    },
    imageGrid: [
      {
        src: "/images/pocket-agent-chat.png",
        alt: "Pocket Agent chat interface",
      },
      {
        src: "/images/pocket-agent-customize.png",
        alt: "Pocket Agent customization settings",
      },
      {
        src: "/images/pocket-agent-skills.png",
        alt: "Pocket Agent superpowers and skills",
      },
    ],
    heroStats: [
      { label: "Hours Saved", value: "18/wk" },
      { label: "Follow-Up Rate", value: "100%" },
      { label: "Cancellation Recovery", value: "73%" },
      { label: "Response Time", value: "<30s" },
    ],
    challenge: {
      heading: "Customers Expect Instant Answers. You Can't Be Available 24/7.",
      description:
        "Small businesses can't afford 24/7 support staff, but customers expect immediate responses. Miss a question at 9pm and you lose the sale to a competitor who answered in five minutes.\n\nThe system had to sound human, know when it couldn't help and hand off gracefully, and handle different support workflows across different business types.",
    },
    solution: {
      heading: "Automated Support That Sounds Human and Knows Its Limits",
      description:
        "Built Pocket Agent. Handles common questions instantly, escalates complex issues intelligently, never sleeps.\n\nDynamic response system that adapts tone based on the question. Confidence scoring that routes to human when uncertain. Customizable routing so each business defines their own escalation rules.",
      features: [
        "Instant responses to common questions (pricing, shipping, returns, hours)",
        "Smart escalation (knows when to hand off to human)",
        "Full conversation context (no customer repeating themselves)",
        "Works across email, chat, and social media",
        "Learns from responses (gets smarter over time)",
      ],
    },
    results: {
      heading: "The Results",
      items: [
        {
          label: "Admin Hours",
          before: "18 hrs",
          after: "2 hrs",
        },
        {
          label: "Follow-Up Completion",
          before: "34%",
          after: "100%",
        },
        {
          label: "Cancellation Fill Rate",
          before: "12%",
          after: "73%",
        },
      ],
    },
    cta: {
      heading:
        "Tired of missing sales because you're not available 24/7? Let's talk.",
      buttonText: "Book a Call",
      buttonHref: "#",
    },
    testimonial: {
      quote:
        "Your team is juggling phones, check-ins, and unreturned messages. One AI assistant recovers what's falling through the cracks \u2014 and it costs less than another hire.",
      author: "Douro Digital",
      role: "Case Insight",
    },
    approachImage: "/images/pocket-agent-chat.png",
    galleryImages: [
      {
        src: "/images/pocket-agent-home.png",
        alt: "Pocket Agent welcome screen",
      },
      {
        src: "/images/pocket-agent-customize.png",
        alt: "Pocket Agent customization settings",
      },
      {
        src: "/images/pocket-agent-graph.png",
        alt: "Pocket Agent knowledge graph",
      },
      {
        src: "/images/pocket-agent-skills.png",
        alt: "Pocket Agent superpowers and skills",
      },
      {
        src: "/images/pocket-agent-chat.png",
        alt: "Pocket Agent chat interface",
      },
    ],
    relatedBlogSlugs: [
      "automating-patient-intake-without-compromising-phi",
      "reducing-no-shows-ai-scheduling",
    ],
  },
  {
    slug: "social-bro",
    title: "Social Bro",
    subtitle: "Content Research and Repurposing That Actually Works",
    color: "#2e1a4e",
    image: "/images/social-bro-product.jpeg",
    objectPosition: "0% 0%",
    tagline:
      "Creating content from scratch is brutal. The best creators don't start from zero — they study what's already working and make it their own.",
    projectDetails: {
      client: "Social Bro",
      year: "2024",
      services: [
        "Built content research and repurposing platform from scratch",
        "Cross-platform video search (YouTube, Instagram, TikTok)",
        "Automatic transcript extraction with timestamps",
        "AI-powered hook generation with alternates",
        "One-click content repurposing engine",
        "Scripts library and saved search management",
      ],
      platform: "SaaS",
      duration: "",
    },
    imageGrid: [
      {
        src: "/images/social-bro-product.jpeg",
        alt: "Social Bro product interface",
        objectPosition: "0% 0%",
      },
    ],
    heroStats: [
      { label: "Engagement Lift", value: "4.2x" },
      { label: "Content Output", value: "10x" },
      { label: "Lead Cost Reduction", value: "58%" },
      { label: "Review Generation", value: "+340%" },
    ],
    challenge: {
      heading: "Creating Content From Scratch Is a Full-Time Job Nobody Has Time For",
      description:
        "Creators and businesses know they need consistent content. But starting from a blank page every time is brutal. The alternative? Spend hours watching competitor videos, manually transcribing what works, and trying to reverse-engineer why it performed.\n\nMeanwhile, the best creators aren't reinventing the wheel. They're studying what's already working across YouTube, Instagram, and TikTok — then making it their own. But doing that manually means seven browser tabs, no organization, and zero system.",
    },
    solution: {
      heading: "Search Any Platform. Extract the Transcript. Repurpose Instantly.",
      description:
        "Built Social Bro. Search YouTube, Instagram, and TikTok for high-performing content by topic, creator, or URL. Extract transcripts automatically. Generate AI-powered hooks. Repurpose into ready-to-use scripts.\n\nPaste a URL or search by keyword — the system pulls the transcript, generates multiple hook alternatives, and repurposes the content into your own scripts. All stored in one library you can access anytime.",
      features: [
        "Cross-platform search (YouTube, Instagram, TikTok by topic, creator, or URL)",
        "Automatic transcript extraction with timestamps and word counts",
        "AI hook generation (multiple alternates, one-click retry)",
        "One-click repurposing (transcript becomes ready-to-use scripts)",
        "Scripts library (all originals and repurposed content in one place)",
      ],
    },
    results: {
      heading: "The Results",
      items: [
        {
          label: "Cost Per Lead",
          before: "$127",
          after: "$53",
        },
        {
          label: "Monthly Content Output",
          before: "8 posts",
          after: "80+ posts",
        },
        {
          label: "Google Review Rating",
          before: "3.8 stars",
          after: "4.9 stars",
        },
      ],
    },
    cta: {
      heading:
        "Tired of staring at a blank page? Let's talk about turning existing content into yours.",
      buttonText: "Book a Call",
      buttonHref: "#",
    },
    testimonial: {
      quote:
        "You're already spending $3K\u2013$10K a month getting people to call. Social Bro makes sure they actually want to \u2014 and that when they do, your brand is the one they trust.",
      author: "Douro Digital",
      role: "Case Insight",
    },
    demoVideo: "/videos/social-bro-demo.mp4",
    approachImage: "/images/social-bro-product.jpeg",
    galleryImages: [
      {
        src: "/images/social-bro-product.jpeg",
        alt: "Social Bro product interface",
      },
    ],
  },
  {
    slug: "viral-kid",
    title: "Viral Kid",
    subtitle: "AI Engagement Automation That Finds Your Customers For You",
    color: "#1b131e",
    image: "/images/viral-kid-product.jpeg",
    objectFit: "contain",
    tagline:
      "Your customers are already talking online. About your industry, your competitors, your exact service. You're just not in the conversation.",
    projectDetails: {
      client: "Viral Kid",
      year: "2026",
      services: [
        "Built AI engagement automation platform from scratch",
        "Multi-platform monitoring (Twitter, YouTube, Reddit)",
        "Keyword-based conversation discovery with engagement filters",
        "AI-powered auto-replies with customizable persona",
        "Configurable scheduling and style controls",
        "Multi-account management per platform",
      ],
      platform: "B2B SaaS",
      duration: "",
    },
    imageGrid: [
      {
        src: "/images/viral-kid-product.jpeg",
        alt: "Viral Kid product interface",
        objectFit: "contain",
      },
    ],
    heroStats: [
      { label: "ROI Range", value: "382\u20135,120%" },
      { label: "Target SMBs", value: "6.1M" },
      { label: "Gross Margin", value: ">59%" },
      { label: "Verticals", value: "4" },
    ],
    challenge: {
      heading: "Your Customers Are Already Talking. You're Just Not There.",
      description:
        "People are asking for recommendations on Twitter right now. They're commenting on YouTube videos in your niche. They're posting on Reddit about problems you solve. But you're not in those conversations because manually monitoring and replying across platforms is a full-time job nobody has time for.\n\nHiring a social media agency costs $1,500/month and they post three times a week. They never engage with the people actually asking for what you sell.",
    },
    solution: {
      heading: "Set Your Keywords. Configure Your AI. Let It Engage 24/7.",
      description:
        "Built Viral Kid. Monitors Twitter, YouTube, and Reddit for conversations matching your keywords. Filters by engagement threshold. Auto-replies using AI that sounds human \u2014 not like a bot.\n\nSet your search terms, minimum likes threshold, and schedule. Configure an AI persona with style controls (no hashtags, no emojis, casual grammar). Test responses before going live. The system finds relevant conversations and replies automatically.",
      features: [
        "Keyword monitoring across Twitter, YouTube, and Reddit",
        "Engagement filters (only target posts above a minimum likes threshold)",
        "AI auto-replies with customizable system prompt and persona",
        "Style controls (no hashtags, no emojis, no caps, casual grammar)",
        "Configurable schedule (every 5 minutes to every hour per platform)",
      ],
    },
    results: {
      heading: "The Results",
      items: [
        {
          label: "Customer ROI (HVAC)",
          before: "$0 (zero engagement)",
          after: "904\u20135,120% annual ROI",
        },
        {
          label: "Category Position",
          before: "No category existed",
          after: "New category: Proactive Engagement",
        },
        {
          label: "Cost vs Agency",
          before: "$1,500/mo agency",
          after: "$199\u2013$499/mo (60\u201390% cheaper)",
        },
      ],
    },
    cta: {
      heading:
        "Your customers are already asking for what you sell. Let's make sure you're in the conversation.",
      buttonText: "Book a Strategy Sprint",
      buttonHref: "#",
    },
    testimonial: {
      quote:
        "We were spending $1,200/month on a social media agency that posted 3 times a week. They never engaged with people asking for HVAC recommendations on Twitter. Viral-Kid found those conversations automatically. First month: 3 booked jobs. $8,400 in revenue for $299.",
      author: "HVAC Pilot Customer",
      role: "Early Adopter",
    },
    demoVideo: "/videos/viral-kid-demo.mp4",
    approachImage: "/images/viral-kid-product.jpeg",
    galleryImages: [
      {
        src: "/images/viral-kid-product.jpeg",
        alt: "Viral Kid product interface",
        objectFit: "contain",
      },
    ],
  },
];

export const caseStudiesIntro =
  "These are products we built. Not consulting projects. Not white-labeled platforms with a logo slapped on. Real products built from scratch that real people use and pay for. This is our track record. Not case studies. Not testimonials. Products.";

export const caseStudiesFooter =
  "Want to build something like this for your business? Something custom that does exactly what you need? Let's talk. No pitch. No pressure. Just an honest conversation about whether custom software makes sense for where you are.";
