import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BusinessShowcase } from "@/components/business-showcase";
import { PersonalProjectsSection } from "@/components/personal-projects-section";
import { ProjectRow } from "@/components/project-row";
import { SiteHeader } from "@/components/site-header";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import {
  CLIENT_WORK,
  OWN_BUSINESS,
  PERSONAL_PROJECTS,
  PROFESSIONAL_WORK,
} from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Ryan Vince Castillo",
  description:
    "RYNXPLAY, client work, and personal projects — professional software and websites I've built.",
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
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
              Work · {PROFESSIONAL_WORK.length} professional ·{" "}
              {PERSONAL_PROJECTS.length} personal
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              Professional work first.{" "}
              <span className="text-muted-foreground">
                Side projects on the side.
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              RYNXPLAY is my SaaS business. Reynalyn Grace is real client work.
              The rest are personal apps I built for fun and learning.
            </p>
          </header>
        </div>
      </main>

      {OWN_BUSINESS[0] && <BusinessShowcase project={OWN_BUSINESS[0]} />}

      {CLIENT_WORK.length > 0 && (
        <section className="w-full px-6 pb-24 sm:px-10 sm:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Client work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Built for someone else&apos;s business.
              </h2>
            </div>

            <div className="space-y-24 sm:space-y-32">
              {CLIENT_WORK.map((p, i) => (
                <ProjectRow key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <PersonalProjectsSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
