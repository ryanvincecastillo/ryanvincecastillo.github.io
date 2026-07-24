export type ProjectCategory = "clientBusiness" | "clientWork" | "business" | "personal";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  outcome?: string;
  image: string;
  tech: string[];
  url?: string;
  category: ProjectCategory;
  role?: string;
  highlights?: string[];
  /** Show an AI pill when the product uses LLM / AI features */
  usesAi?: boolean;
};

export function getProjectLabel(project: Project): string {
  switch (project.category) {
    case "clientBusiness":
      return "Client business";
    case "clientWork":
      return "Client project";
    case "business":
      return "Business";
    case "personal":
      return "Personal project";
  }
}

export const PROJECTS: Project[] = [
  {
    slug: "rynxplay",
    title: "RYNXPLAY",
    tagline: "Run your PisoNet shop from one dashboard.",
    description:
      "RYNXPLAY is a multi-tenant SaaS platform for coin-operated device rental shops in the Philippines. Shop owners manage PCs, phones, and tablets from one command center — coin drops credit sessions automatically, devices lock and unlock in real time, and every peso is tracked across branches.",
    outcome:
      "Shop owners replace manual timers and paper logs with automated coin-to-session tracking, live floor visibility, and branch-level sales reports — reducing revenue leakage and scaling without hiring more floor staff.",
    image: "/images/rynxplay-homepage.png",
    tech: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      ".NET",
      "Kotlin",
      "Flutter",
      "Railway",
    ],
    url: "https://rynxplay.com",
    category: "clientBusiness",
    role: "Full-stack engineer",
    highlights: [
      "Live device control across Windows, Android & web",
      "Coin acceptors credit sessions automatically",
      "Multi-branch ops with staff roles & reports",
    ],
  },
  {
    slug: "sugola",
    title: "SUGOLA",
    tagline: "Neighborhood delivery and errands in Sto. Tomas.",
    description:
      "SUGOLA is a local delivery platform for Sto. Tomas, Davao del Norte — food, groceries, pharmacy, courier, and custom errands. Customers book on web or mobile; nearby riders accept orders directly, with no Facebook chat operator in the middle.",
    outcome:
      "A barangay-scale alternative to national delivery apps — instant booking, local riders who know the area, and live tracking for 3K+ customers since 2021.",
    image: "/images/sugola-homepage.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    url: "https://sugola.com/",
    category: "clientBusiness",
    role: "Full-stack engineer",
    highlights: [
      "Food, grocery, pharmacy, courier & custom errands",
      "Riders accept orders directly — no chat operator",
      "Serving Sto. Tomas since 2021",
    ],
  },
  {
    slug: "ade-garage",
    title: "ADe Garage",
    tagline: "Thai concept motorcycle parts — browse online, order where you shop.",
    description:
      "ADe Garage is a multi-channel brand hub for a motorcycle parts shop in Tagum City — Yasaki, RCB, SuperKips, and genuine OEM parts for Raider, Ninja, and underbone builds. Riders browse the catalog on the site, then order on Shopee, TikTok Shop, or Messenger without paying for a monthly storefront.",
    outcome:
      "The shop gets a professional web presence that drives orders to the channels it already uses — nationwide shipping messaging, fitment help on Messenger, and room to add Lazada when it launches.",
    image: "/images/ade-garage-homepage.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shopify",
      "Vercel",
    ],
    url: "https://adegarage.vercel.app",
    category: "clientBusiness",
    role: "Full-stack engineer",
    highlights: [
      "Catalog hub linking Shopee, TikTok Shop & Messenger",
      "Shopify-ready architecture for future web checkout",
      "Logo-aligned cyan theme with animated product cards",
    ],
  },
  {
    slug: "trupeople-hr",
    title: "TruPeople HR",
    tagline: "From clock-in to payslip — HR for Philippine small businesses.",
    description:
      "TruPeople HR is a multi-tenant SaaS for sari-sari stores, cafés, and growing teams across the Philippines. Staff clock in from any phone, DTR tallies automatically, payslips go out by email, and a group-wide people registry lets owners check rehire history before hiring again.",
    outcome:
      "Owners replace spreadsheet payroll and paper DTR with one login across multiple companies — clock-in, leave, org chart, and rehire screening without enterprise HR bloat.",
    image: "/images/trupeoplehr-homepage.png",
    tech: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "Railway", "Vercel"],
    url: "https://trupeoplehr.com/",
    category: "business",
    role: "Founder & full-stack engineer",
    highlights: [
      "Clock-in, DTR, and emailed payslips from any phone",
      "Multi-company ops with org chart & people registry",
      "Rehire check across affiliated businesses",
    ],
  },
  {
    slug: "reynalyn-grace",
    title: "Reynalyn Grace",
    tagline: "Professional website for a virtual assistant.",
    description:
      "A client website for a virtual assistant business — showcasing services like administrative support, outreach coordination, data management, and social media assistance.",
    outcome:
      "A polished web presence that helps a solo operator win clients — without the cost of a full agency build.",
    image: "/images/wix-reynalyn-grace-professional-website-homepage.png",
    tech: ["Wix"],
    url: "https://ryanvincecastillo.wixsite.com/reynalyn-grace",
    category: "clientWork",
  },
  {
    slug: "tekadok",
    title: "TekaDok",
    tagline: "AI inbox for hospital rounds — paste nurse chats, confirm before anything files.",
    description:
      "Ward updates from Viber, Messenger, and SMS land in one calm patient inbox. TekaDok structures Taglish shorthand for review, keeps the original message beside every summary, and never attaches an update until you confirm — built for doctors on Philippine wards, not hospital IT projects.",
    image: "/images/tekadok-homepage.png",
    tech: ["Angular", "Supabase", "Vercel"],
    url: "https://tekadok.app/",
    category: "personal",
    usesAi: true,
  },
  {
    slug: "rynxpense",
    title: "Rynxpense",
    tagline: "Travel budget decision engine for Filipino travelers.",
    description:
      "Ask “can I afford this trip?” before you book. Set a destination and peso budget, see breathing room and free-to-spend, check purchases before you swipe, and get cost-line tradeoffs when the plan doesn’t fit — free, no account needed.",
    image: "/images/rynxpense-homepage.png",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
    url: "https://rynxpense.com/",
    category: "personal",
    usesAi: true,
  },
  {
    slug: "debtnote",
    title: "DebtNote",
    tagline: "Utang & pautang notebook that sends the awkward follow-ups for you.",
    description:
      "Track money owed to you and what you owe in one ledger. Share signed promissory agreements, schedule salary-period or paluwagan installments, and let automated email nudges (including the Shinigami Notice) do the chasing — so you don't have to be the bad guy.",
    image: "/images/debtnote-homepage.png",
    tech: ["Next.js", "Flutter", "Supabase", "Vercel"],
    url: "https://debtnote.app/",
    category: "personal",
  },
  {
    slug: "avocado-go",
    title: "Avocado Go",
    tagline: "Friends-first coordination app — from chat to actually showing up.",
    description:
      "Plan group activities, track RSVPs, share live location with avocado character markers, post recaps, and split expenses — all in one flow.",
    image: "/images/avocado-go-homepage.png",
    tech: ["Flutter", "Dart", "Supabase", "Firebase"],
    url: "https://avocado-go.vercel.app/",
    category: "personal",
  },
  {
    slug: "inaan-app",
    title: "InaanApp",
    tagline: "Relationship memory app for Filipino families.",
    description:
      "Organize godparent connections — track ninong, ninang, and inaanak relationships with birthday reminders and Pamasko mode.",
    image: "/images/inaanapp-homepage.png",
    tech: ["Flutter", "Dart", "Supabase", "Vercel"],
    url: "https://inaanapp.com/",
    category: "personal",
  },
  {
    slug: "yes-honey",
    title: "Yes Honey",
    tagline: "A couples app that turns asks into promises.",
    description:
      "One tap to ask, one tap to commit. No nagging — just a calm, shared rhythm for household life.",
    image: "/images/yes-honey-app-homepage.png",
    tech: ["Flutter", "Dart", "Supabase", "Vercel"],
    url: "https://yes-honey-app.vercel.app/",
    category: "personal",
  },
  {
    slug: "ressa-noise-detector",
    title: "Ressa Noise Detector",
    tagline: "Desktop noise detection app.",
    description:
      "Built with Electron and Vite, packaged for macOS and Windows.",
    image: "/images/ressa-homepage.png",
    tech: ["Electron", "Vite"],
    url: "https://ressa-noise-detector-app.vercel.app/",
    category: "personal",
  },
];

export const CLIENT_BUSINESS = PROJECTS.filter(
  (p) =>
    p.category === "clientBusiness" ||
    p.category === "clientWork" ||
    p.category === "business",
);
export const PERSONAL_PROJECTS = PROJECTS.filter((p) => p.category === "personal");
export const PROFESSIONAL_WORK = PROJECTS.filter((p) => p.category !== "personal");
