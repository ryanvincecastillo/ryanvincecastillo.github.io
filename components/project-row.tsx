"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const flipped = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid items-center gap-10 sm:gap-14 lg:grid-cols-2"
    >
      <div className={flipped ? "lg:order-2" : ""}>
        <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card p-3 shadow-xl">
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-muted">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 90vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className={flipped ? "lg:order-1 lg:pr-6" : "lg:pl-6"}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Case {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-3 text-lg text-foreground/80">{project.tagline}</p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.tech.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-foreground/70"
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
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:opacity-80"
          >
            Visit live
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
