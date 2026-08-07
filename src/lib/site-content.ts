/* eslint-disable prettier/prettier */
export const site = {
  name: "The Native AI Group",
  short: "TNAG",
  location: "Ontario, Canada",
  primaryMessage: "We build or acquire AI-native companies",
  supporting:
    "The Native AI Group acquires, builds and scales service companies designed around artificial intelligence, automation and exceptional operators.",
  supportingLine: "Permanent ownership. Exceptional operators. Shared intelligence.",
  emails: {
    general: "hello@nativeai.group",
    acquisitions: "acquisitions@nativeai.group",
    investors: "investors@nativeai.group",
  },
  linkedin: "#",
} as const;

export const nav = [
  { to: "/model", label: "Our Model" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/ai-os", label: "AI OS" },
  { to: "/acquisitions", label: "Acquisitions" },
  { to: "/leadership", label: "Leadership" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export type Company = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  blurb: string;
  capabilities: string[];
  role: string;
  cta: string;
  href?: string;
  comingSoon?: boolean;
};

export const companies: Company[] = [
  {
    slug: "little-dragon",
    name: "Little Dragon",
    category: "Digital Marketing",
    tagline: "Digital marketing built for growth.",
    blurb:
      "Little Dragon helps businesses attract customers, strengthen their digital presence and build repeatable growth systems.",
    capabilities: [
      "Search engine optimization",
      "Paid advertising",
      "Website development",
      "Marketing automation",
      "Customer relationship management",
      "Lead generation",
      "Conversion optimization",
      "Digital strategy",
    ],
    role: "Customer acquisition and digital growth engine across the portfolio.",
    cta: "Visit Little Dragon",
  },
  {
    slug: "feed",
    name: "Feed",
    category: "Content and Creative",
    tagline: "Content and creative production at scale.",
    blurb:
      "Feed helps businesses communicate more effectively through high-quality content, creative production and brand execution.",
    capabilities: [
      "Content strategy",
      "Video production",
      "Graphic design",
      "Social content",
      "Brand creative",
      "Campaign assets",
      "Copywriting",
      "Production support",
    ],
    role: "Creative and content production for clients and portfolio companies.",
    cta: "Visit Feed",
  },
  {
    slug: "voot-sales",
    name: "Voot Sales",
    category: "Outsourced Sales",
    tagline: "Scalable outbound sales systems built to generate qualified opportunities.",
    blurb:
      "Voot Sales helps businesses generate leads, book qualified meetings and grow revenue through scalable sales systems and automation.",
    capabilities: [
      "Lead generation",
      "Appointment setting",
      "Outbound prospecting",
      "Email outreach",
      "LinkedIn outreach",
      "Sales automation",
      "Pipeline development",
      "Sales strategy",
    ],
    role: "Outsourced sales and lead generation capability across the portfolio.",
    cta: "Visit Voot Sales",
  },

  {
    slug: "spark-accounting",
    name: "Spark Accounting",
    category: "Accounting and Finance",
    tagline: "Clear financial support for growing businesses.",
    blurb:
      "Spark Accounting helps small businesses gain financial clarity and control through bookkeeping, accounting, tax and fractional CFO services.",
    capabilities: [
      "Bookkeeping",
      "Accounting",
      "Tax services",
      "Financial reporting",
      "Fractional CFO services",
      "Cash-flow management",
      "Budgeting",
      "Financial strategy",
    ],
    role: "Accounting, finance and advisory capability for businesses and portfolio companies.",
    cta: "Visit Spark Accounting",
  },
  {
    slug: "dealio",
    name: "Dealio Advisors",
    category: "Advisory and M&A",
    tagline: "Advisory for business owners, buyers and investors.",
    blurb:
      "Dealio Advisors helps entrepreneurs navigate acquisitions, sales, financing and strategic growth.",
    capabilities: [
      "Business sales",
      "Acquisitions",
      "Capital advisory",
      "Financial modeling",
      "Due diligence",
      "Deal structuring",
      "Strategic advisory",
      "Succession planning",
    ],
    role: "Origination engine — owners, buyers and capital.",
    cta: "Visit Dealio Advisors",
  },
  {
    slug: "archos",
    name: "Archos Suite",
    category: "AI Consulting and Implementation",
    tagline: "AI transformation, designed and deployed.",
    blurb:
      "Archos Suite designs and deploys practical AI systems, automations and operating workflows.",
    capabilities: [
      "AI strategy",
      "Workflow automation",
      "Data platforms",
      "Custom AI agents",
      "Knowledge systems",
      "Integration",
      "Change management",
      "Portfolio deployment",
    ],
    role: "Internal research, AI OS build-out and portfolio deployment.",
    cta: "Visit Archos Suite",
  },
];

export const modelSteps = [
  {
    n: "01",
    title: "Acquire",
    body: "We acquire profitable, founder-led service businesses with strong customer relationships, recurring revenue and meaningful growth potential.",
  },
  {
    n: "02",
    title: "Build",
    body: "We launch new AI-native service companies around strong operators, attractive markets and opportunities where our platform creates immediate advantage.",
  },
  {
    n: "03",
    title: "Transform",
    body: "We work with leadership to strengthen systems — data, workflows, automation and AI-assisted delivery — while keeping human judgment at the center.",
  },
  {
    n: "04",
    title: "Compound",
    body: "Improvements travel across the group. Each company makes the platform stronger for the next.",
  },
] as const;

export const osLayers = [
  {
    n: "01",
    title: "Knowledge",
    body: "Organize and preserve the expertise held in people, documents, proposals and project history.",
  },
  {
    n: "02",
    title: "Data",
    body: "Connect sales, marketing, finance, projects, customers and delivery into a coherent operating view.",
  },
  {
    n: "03",
    title: "Workflows",
    body: "Make the important work visible, repeatable and reliable — from lead intake to retention.",
  },
  {
    n: "04",
    title: "Automation",
    body: "Automate repetitive, rules-based activity where it improves speed, consistency or accuracy.",
  },
  {
    n: "05",
    title: "AI Agents",
    body: "Sales, marketing, finance, operations and customer success agents supporting each team.",
  },
  {
    n: "06",
    title: "Human Oversight",
    body: "Operators review, approve and refine important outputs. Accountability stays with people.",
  },
] as const;

export const footerNav = {
  Company: [
    { label: "Our Model", to: "/model" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "AI OS", to: "/ai-os" },
    { label: "Leadership", to: "/leadership" },
    { label: "Insights", to: "/insights" },
  ],
  "Partner With Us": [
    { label: "Sell Your Business", to: "/acquisitions" },
    { label: "Become an Operator", to: "/contact" },
    { label: "Strategic Partnerships", to: "/contact" },
    { label: "Investor Inquiries", to: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Use", to: "/terms" },
    { label: "Confidentiality", to: "/confidentiality" },
    { label: "Accessibility", to: "/accessibility" },
  ],
} as const;

export const footerDisclaimer =
  "Information presented on this website is for general informational purposes only and does not constitute an offer to sell or a solicitation to purchase securities. Any investment opportunity will be made only through formal offering materials and to eligible investors in accordance with applicable law.";
