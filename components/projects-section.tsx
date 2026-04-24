import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectRow } from "@/components/project-row";
import { PROJECTS } from "@/lib/projects";

const FEATURED_COUNT = 4;

export function ProjectsSection() {
  const featured = PROJECTS.slice(0, FEATURED_COUNT);
  const hasMore = PROJECTS.length > FEATURED_COUNT;

  return (
    <section id="work" className="w-full px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Featured work
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              A few things I&apos;ve shipped.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A curated selection. Personal, client, or still evolving.
            </p>
          </div>
          <Link
            href="/work/"
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-border hover:bg-muted"
          >
            {hasMore ? "View all projects" : "See the archive"}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="space-y-24 sm:space-y-32">
          {featured.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
