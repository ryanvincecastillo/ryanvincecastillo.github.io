export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  url?: string;
};

export type Achievement = {
  title: string;
  detail: string;
  year?: string;
};

export type Conference = {
  name: string;
  location?: string;
  year: string;
  role?: string;
};

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export const PROFILE = {
  name: "Ryan Vince Castillo",
  alternateNames: ["Ryan Castillo", "Ryan Vince Castillo"],
  location: "Davao City, Philippines",
  headline:
    "Full-stack & AI developer helping business owners ship software that saves time and money.",
  summary:
    "Full-stack developer based in Davao City, Philippines. I build web apps, mobile apps, backend systems, and AI-assisted workflows for business owners — from local delivery platforms to multi-tenant SaaS. I work directly with clients end to end: design, build, deploy, and maintain.",
  email: "ryanvincecastillo@gmail.com",
  cvPdfUrl: "/files/cv-2025.pdf",
  keywords: [
    "Ryan Castillo",
    "Ryan Vince Castillo",
    "developer for business",
    "full-stack developer Philippines",
    "AI developer",
    "business software developer",
    "freelance developer Davao",
    "SaaS developer",
    "custom software developer",
  ],
};

/** One-line pointer — detailed history in PDF CV. */
export const BACKGROUND =
  "Earlier roles include Marsman Drysdale Agribusiness Group and Southwood Mindanao Corporation. Full employment history and technical detail are in my downloadable CV.";

export const CURRENT_ROLE: Experience = {
  company: "Jairosoft Inc.",
  role: "Software Developer / Line Manager",
  period: "2021 — Present",
  summary:
    "Enterprise full-stack development for client deployments. Currently on Stevenson Systems — building and maintaining TruSpace and related commercial property / space-accounting applications (Next.js, .NET, Azure, SQL Server).",
};

export const EDUCATION: Education = {
  school: "University of Southeastern Philippines",
  degree: "Bachelor of Science in Information Technology",
  period: "2014 — 2018",
};

/** Products and client builds — separate from full-time role at Jairosoft. */
export const SELECTED_WORK: Experience[] = [
  {
    company: "RYNXPLAY",
    role: "Full-stack engineer",
    period: "Present",
    summary:
      "Multi-tenant SaaS for PisoNet and device rental shops — web console, Windows/Android agents, realtime device control, and branch-level reporting.",
    url: "https://rynxplay.com",
  },
  {
    company: "SUGOLA",
    role: "Full-stack engineer",
    period: "2021 — Present",
    summary:
      "Local delivery and errands platform for Sto. Tomas, Davao del Norte — web booking, rider dispatch, and mobile apps serving 3K+ customers.",
    url: "https://sugola.vercel.app/",
  },
  {
    company: "ADe Garage",
    role: "Full-stack engineer",
    period: "2025 — Present",
    summary:
      "Multi-channel brand hub for a motorcycle parts shop in Tagum City — product catalog, Shopee/TikTok/Messenger ordering, and Shopify-ready architecture.",
    url: "https://adegarage.vercel.app",
  },
  {
    company: "Independent / client work",
    role: "Full-stack developer",
    period: "Ongoing",
    summary:
      "Websites, mobile apps, and internal tools for business owners — including Reynalyn Grace, automations, and AI-assisted workflows.",
    url: "https://ryanvincecastillo.com/work/",
  },
];

/** @deprecated Use SELECTED_WORK — kept for any legacy imports */
export const EXPERIENCE = SELECTED_WORK;

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "TruSpace platform development",
    detail:
      "Full-stack work on Stevenson Systems' TruSpace refresh — property management, space accounting, and internal reporting (Next.js, .NET, Azure).",
    year: "2024",
  },
  {
    title: "Shipped RYNXPLAY to production",
    detail:
      "Live multi-platform SaaS with NestJS API, Next.js console, Windows and Android agents, and realtime device management.",
    year: "2024",
  },
  {
    title: "Shipped SUGOLA platform",
    detail:
      "Built and maintained a neighborhood delivery platform in Sto. Tomas, serving 3K+ customers since 2021.",
    year: "2021",
  },
  {
    title: "Launched ADe Garage brand hub",
    detail:
      "Client site for a Tagum City motorcycle parts shop — catalog, marketplace channel links, and logo-aligned brand experience.",
    year: "2025",
  },
  {
    title: "End-to-end product delivery",
    detail:
      "Designed, built, and deployed client websites and mobile apps across Flutter, Next.js, and .NET.",
  },
];

/** Add conferences, talks, or community events here when ready. */
export const CONFERENCES: Conference[] = [];

/** Client-relevant skills — full list in cv-2025.pdf */
export const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  ".NET",
  "Flutter",
  "PostgreSQL",
  "Shopify",
  "AI-assisted development",
  "Docker",
  "Azure",
  "Vercel",
];
