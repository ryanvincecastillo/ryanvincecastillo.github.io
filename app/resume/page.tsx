import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, Mail } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import {
  ACHIEVEMENTS,
  BACKGROUND,
  CONFERENCES,
  EDUCATION,
  PROFILE,
  SELECTED_WORK,
  SKILLS,
} from "@/lib/profile";

export const metadata: Metadata = {
  title: "Resume — Ryan Vince Castillo | Full-Stack & AI Developer",
  description:
    "Resume of Ryan Vince Castillo (Ryan Castillo) — full-stack and AI developer in Davao City, Philippines. Selected work: RYNXPLAY, SUGOLA, ADe Garage, and client projects.",
  alternates: {
    canonical: "https://ryanvincecastillo.com/resume/",
  },
};

export default function ResumePage() {
  return (
    <>
      <SiteHeader />
      <main className="w-full px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Ryan Vince Castillo
          </Link>

          <header className="mt-12 border-b border-border/60 pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Resume
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {PROFILE.name}
            </h1>
            <p className="mt-1 text-lg text-muted-foreground">
              Also known as Ryan Castillo · {PROFILE.location}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-foreground/85">
              {PROFILE.headline}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-80"
              >
                <Mail className="h-4 w-4" />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                <Download className="h-4 w-4" />
                Download full CV (PDF)
              </a>
            </div>
          </header>

          <section className="py-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Summary
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {PROFILE.summary}
            </p>
          </section>

          <section className="border-t border-border/60 py-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Selected work
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Client and product builds with live links.{" "}
              <Link href="/work/" className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground/60">
                View portfolio →
              </Link>
            </p>
            <ul className="mt-6 space-y-8">
              {SELECTED_WORK.map((item) => (
                <li key={`${item.company}-${item.role}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.company}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-foreground/80">
                    {item.role}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:opacity-80"
                    >
                      {item.company === "Independent / client work"
                        ? "View all work"
                        : "Visit site"}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-border/60 py-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Background
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {BACKGROUND}
            </p>
          </section>

          <section className="border-t border-border/60 py-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Highlights
            </h2>
            <ul className="mt-6 space-y-5">
              {ACHIEVEMENTS.map((item) => (
                <li key={item.title}>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    {item.year && (
                      <span className="text-sm text-muted-foreground">
                        {item.year}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {CONFERENCES.length > 0 && (
            <section className="border-t border-border/60 py-10">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Conferences & events
              </h2>
              <ul className="mt-6 space-y-4">
                {CONFERENCES.map((event) => (
                  <li key={`${event.name}-${event.year}`}>
                    <h3 className="font-semibold text-foreground">{event.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {[event.role, event.location, event.year]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="border-t border-border/60 py-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Education
            </h2>
            <div className="mt-4">
              <h3 className="font-semibold text-foreground">{EDUCATION.school}</h3>
              <p className="mt-1 text-sm text-foreground/80">{EDUCATION.degree}</p>
              <p className="mt-1 text-sm text-muted-foreground">{EDUCATION.period}</p>
            </div>
          </section>

          <section className="border-t border-border/60 py-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Skills
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Core stack for client work. See the PDF for the full technical list.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border/60 bg-card px-3 py-1 text-sm font-medium text-foreground/80"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <ContactSection />
      <SiteFooter />
    </>
  );
}
