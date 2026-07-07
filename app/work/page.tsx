import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BusinessShowcase } from "@/components/business-showcase";
import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { OWN_BUSINESS, PORTFOLIO_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Ryan Vince Castillo",
  description:
    "Client work, product builds, and RYNXPLAY — operational SaaS for PisoNet and device rental shops.",
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
              Work · {PORTFOLIO_PROJECTS.length + OWN_BUSINESS.length}{" "}
              projects
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              Work that ships for{" "}
              <span className="text-muted-foreground">
                real businesses and products.
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              My own SaaS business, client websites, mobile apps, and internal
              tools — selected work that shows how I deliver end to end.
            </p>
          </header>
        </div>
      </main>

      {OWN_BUSINESS[0] && <BusinessShowcase project={OWN_BUSINESS[0]} />}

      <section className="w-full px-6 pb-24 sm:px-10 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              More work
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Client projects & product builds
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_PROJECTS.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </>
  );
}
