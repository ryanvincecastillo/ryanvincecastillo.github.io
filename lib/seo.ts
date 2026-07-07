import type { Metadata } from "next";
import { PROFILE } from "@/lib/profile";

const SITE_URL = "https://ryanvincecastillo.com";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Ryan Vince Castillo | Ryan Castillo — Developer for Business & AI",
    template: "%s | Ryan Vince Castillo",
  },
  description:
    "Ryan Vince Castillo (Ryan Castillo) — full-stack and AI developer in the Philippines helping business owners automate work, cut software costs, and ship custom systems. RYNXPLAY, SUGOLA, and client builds.",
  keywords: PROFILE.keywords,
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  creator: PROFILE.name,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Ryan Vince Castillo",
    title: "Ryan Vince Castillo — Developer for Business Owners & AI",
    description:
      "Full-stack and AI developer helping business owners ship software that saves time and money. Based in Davao City, Philippines.",
    images: [
      {
        url: "/files/profile-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Ryan Vince Castillo — Full-stack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Vince Castillo — Developer for Business & AI",
    description:
      "Full-stack and AI developer helping business owners automate work and ship custom systems.",
    images: ["/files/profile-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    alternateName: PROFILE.alternateNames,
    jobTitle: [
      "Full-Stack Developer",
      "AI Developer",
      "Software Developer for Business Owners",
    ],
    description: PROFILE.summary,
    url: SITE_URL,
    image: `${SITE_URL}/files/profile-photo.jpg`,
    email: `mailto:${PROFILE.email}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PH",
      addressLocality: "Davao City",
    },
    sameAs: [
      "https://github.com/ryanvincecastillo",
      "https://www.linkedin.com/in/ryan-vince-castillo-67690b20a/",
    ],
    knowsAbout: [
      "Full-stack development",
      "AI-assisted software development",
      "Business software",
      "SaaS",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      ".NET",
      "Flutter",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "Microservices",
    ],
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ryan Vince Castillo — Software Development",
    url: SITE_URL,
    image: `${SITE_URL}/files/profile-photo.jpg`,
    description:
      "Custom software, AI workflows, and full-stack development for business owners in the Philippines and worldwide.",
    areaServed: ["PH", "Worldwide"],
    founder: {
      "@type": "Person",
      name: PROFILE.name,
    },
    knowsAbout: PROFILE.keywords.slice(2),
  };
}
