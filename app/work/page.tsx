import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Ryan Vince Castillo",
  description:
    "Projects I've built, shipped, or shaped — web apps, mobile apps, and AI-assisted work.",
};

export default function WorkPage() {
  return (
    <>
      <ThemeToggle />
      <main className="w-full px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Ryan Vince Castillo
          </Link>

          <header className="mt-12 mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Work · {PROJECTS.length}{" "}
              {PROJECTS.length === 1 ? "project" : "projects"}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              Projects I&apos;ve built,{" "}
              <span className="text-muted-foreground">
                shipped, or shaped.
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              A rotating selection. Some are personal, some were built for
              clients, some are still evolving.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </main>
      <ContactSection />
      <SiteFooter />
    </>
  );
}
