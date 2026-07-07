"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, CheckCircle2 } from "lucide-react";
import type { Project } from "@/lib/projects";

export function BusinessShowcase({ project }: { project: Project }) {
  return (
    <section id="business" className="w-full px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            My business
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            I don&apos;t just build for clients — I run my own.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            RYNXPLAY is live software serving real shop owners. It&apos;s proof
            I can take a business problem from zero to production — not just
            deliver a one-off project.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-xl"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[16/11] bg-muted lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={project.image}
                alt={`${project.title} product screenshot`}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/80">
                  <Building2 className="h-3.5 w-3.5" aria-hidden />
                  My business · Live product
                </span>
                {project.role && (
                  <span className="rounded-full border border-border/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                    {project.role}
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-3 text-lg text-foreground/85">{project.tagline}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <ul className="mt-6 space-y-2.5">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground/85"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-foreground/50"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {project.outcome && (
                <p className="mt-6 rounded-xl border border-border/60 bg-muted/50 px-4 py-3 text-sm leading-relaxed text-foreground/85">
                  <span className="font-semibold">Business outcome:</span>{" "}
                  {project.outcome}
                </p>
              )}

              {project.tech.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border/60 bg-background px-3 py-1 text-xs font-medium text-foreground/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  Visit rynxplay.com
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
