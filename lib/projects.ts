export type ProjectCategory = "clientBusiness" | "clientWork" | "personal";

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
};

export function getProjectLabel(project: Project): string {
  switch (project.category) {
    case "clientBusiness":
      return "Client business";
    case "clientWork":
      return "Client project";
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
    role: "Lead engineer",
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
    url: "https://sugola.vercel.app/",
    category: "clientBusiness",
    role: "Co-founder & engineer",
    highlights: [
      "Food, grocery, pharmacy, courier & custom errands",
      "Riders accept orders directly — no chat operator",
      "Serving Sto. Tomas since 2021",
    ],
  },
  {
    slug: "reynalyn-grace",
    title: "Reynalyn Grace",
    tagline: "Professional website for a virtual assistant.",
    description:
      "A client website for my wife's virtual assistant business — showcasing services like administrative support, outreach coordination, data management, and social media assistance.",
    outcome:
      "A polished web presence that helps a solo operator win clients — without the cost of a full agency build.",
    image: "/images/wix-reynalyn-grace-professional-website-homepage.png",
    tech: ["Wix"],
    url: "https://ryanvincecastillo.wixsite.com/reynalyn-grace",
    category: "clientWork",
  },
  {
    slug: "rynxpense",
    title: "RynxPense",
    tagline: "AI trip budget planner — plan every peso.",
    description:
      "Enter a destination, dates, and budget to get a day-by-day AI itinerary with estimated costs. Track spending during the trip, stay on budget in real time, and share the plan with friends or family.",
    image: "/images/rynxpense-homepage.png",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Groq AI", "Expo", "Vercel"],
    url: "https://rynxpense.com/",
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
    url: "https://inaanapp.vercel.app/",
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
  (p) => p.category === "clientBusiness" || p.category === "clientWork"
);
export const PERSONAL_PROJECTS = PROJECTS.filter((p) => p.category === "personal");
export const PROFESSIONAL_WORK = PROJECTS.filter((p) => p.category !== "personal");
