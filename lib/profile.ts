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

export const PROFILE = {
  name: "Ryan Vince Castillo",
  alternateNames: ["Ryan Castillo", "Ryan Vince Castillo"],
  location: "Davao City, Philippines",
  headline:
    "Full-stack & AI developer helping business owners ship software that saves time and money.",
  summary:
    "Full-stack developer based in Davao City, Philippines. I build web apps, mobile apps, backend systems, and AI-assisted workflows for business owners — from local delivery platforms to multi-tenant SaaS. I work directly with clients end to end: design, build, deploy, and maintain.",
  email: "ryanvincecastillo@gmail.com",
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

export const EXPERIENCE: Experience[] = [
  {
    company: "RYNXPLAY",
    role: "Lead engineer",
    period: "Present",
    summary:
      "Multi-tenant SaaS for PisoNet and device rental shops — web console, Windows/Android agents, realtime device control, and branch-level reporting.",
    url: "https://rynxplay.com",
  },
  {
    company: "SUGOLA",
    role: "Co-founder & engineer",
    period: "2021 — Present",
    summary:
      "Local delivery and errands platform for Sto. Tomas, Davao del Norte — web booking, rider dispatch, and mobile apps serving 3K+ customers.",
    url: "https://sugola.vercel.app/",
  },
  {
    company: "Independent / client work",
    role: "Full-stack developer",
    period: "Ongoing",
    summary:
      "Websites, mobile apps, and internal tools for business owners and solo operators — including client sites, automations, and AI workflows.",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Shipped RYNXPLAY to production",
    detail:
      "Live multi-platform SaaS with NestJS API, Next.js console, Windows and Android agents, and realtime device management.",
    year: "2024",
  },
  {
    title: "Co-founded SUGOLA",
    detail:
      "Built and grew a neighborhood delivery platform in Sto. Tomas, trusted by 3K+ customers since 2021.",
    year: "2021",
  },
  {
    title: "End-to-end product delivery",
    detail:
      "Designed, built, and deployed client websites and mobile apps — from Reynalyn Grace to multiple Flutter and Next.js products.",
  },
];

/** Add conferences, talks, or community events here when ready. */
export const CONFERENCES: Conference[] = [];

export const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  ".NET",
  "Flutter",
  "PostgreSQL",
  "Supabase",
  "AI-assisted development",
  "Docker",
  "Azure",
  "Railway",
  "Vercel",
];
