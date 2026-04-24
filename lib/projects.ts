export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  url?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "inaan-app",
    title: "InaanApp",
    tagline: "Relationship memory app for Filipino families.",
    description:
      "Organize godparent connections — track ninong, ninang, and inaanak relationships with birthday reminders and Pamasko mode.",
    image: "/images/inaanapp-homepage.png",
    tech: ["Flutter", "Dart", "Supabase", "Vercel"],
    url: "https://inaanapp.vercel.app/",
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
  },
  {
    slug: "reynalyn-grace",
    title: "Reynalyn Grace",
    tagline: "Professional portfolio for a virtual assistant.",
    description:
      "Showcasing services like administrative support, outreach coordination, data management, and social media assistance.",
    image: "/images/wix-reynalyn-grace-professional-website-homepage.png",
    tech: ["Wix"],
    url: "https://ryanvincecastillo.wixsite.com/reynalyn-grace",
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
  },
];
