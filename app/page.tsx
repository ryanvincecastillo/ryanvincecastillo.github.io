"use client";

import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiDocker,
  SiPostgresql,
  SiGithub,
  SiVercel,
  SiSupabase,
  SiDotnet,
  SiOpenai,
  SiAnthropic,
  SiClaude,
  SiGooglegemini,
  SiWix,
  SiWordpress,
} from "react-icons/si";
import {
  FloatingIconsHero,
  type FloatingIconsHeroProps,
} from "@/components/ui/floating-icons-hero-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

const icons: FloatingIconsHeroProps["icons"] = [
  // Tech stack
  { id: 1, icon: SiTypescript, color: "#3178C6", className: "top-[8%] left-[10%]" },
  { id: 2, icon: SiReact, color: "#61DAFB", className: "top-[18%] right-[12%]" },
  { id: 3, icon: SiNextdotjs, className: "top-[72%] left-[8%]" },
  { id: 4, icon: SiNodedotjs, color: "#5FA04E", className: "top-[10%] left-[34%]" },
  { id: 5, icon: SiDotnet, color: "#8864DC", className: "bottom-[12%] right-[10%]" },
  { id: 6, icon: SiPython, color: "#3776AB", className: "top-[5%] right-[32%]" },
  { id: 7, icon: SiTailwindcss, color: "#06B6D4", className: "top-[42%] left-[14%]" },
  { id: 8, icon: SiDocker, color: "#2496ED", className: "top-[58%] right-[8%]" },
  { id: 9, icon: SiPostgresql, color: "#6EA4E0", className: "top-[80%] right-[28%]" },
  { id: 10, icon: SiSupabase, color: "#3FCF8E", className: "top-[32%] right-[28%]" },
  { id: 11, icon: SiGithub, className: "bottom-[6%] left-[38%]" },
  { id: 12, icon: SiVercel, className: "top-[88%] left-[68%]" },
  // Platforms
  { id: 17, icon: SiWix, color: "#0C6EFC", className: "top-[14%] left-[48%]" },
  { id: 18, icon: SiWordpress, color: "#21759B", className: "top-[90%] left-[24%]" },
  // AI
  { id: 13, icon: SiOpenai, color: "#10A37F", className: "top-[52%] right-[18%]" },
  { id: 14, icon: SiAnthropic, color: "#D97757", className: "top-[50%] left-[4%]" },
  { id: 15, icon: SiClaude, color: "#D97757", className: "top-[24%] left-[52%]" },
  { id: 16, icon: SiGooglegemini, color: "#8AB4F8", className: "top-[68%] left-[48%]" },
];

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <FloatingIconsHero
        title="RYAN VINCE CASTILLO"
        subtitle="I'm Ryan Vince Castillo — a software developer from Davao City, Philippines, building modern web apps, backend systems, and AI-assisted workflows for teams around the world."
        ctaText="Start a project"
        ctaHref="#contact"
        icons={icons}
      />
      <ProjectsSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
