"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>

        {project.tech.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border/60 bg-background px-2.5 py-0.5 text-xs font-medium text-foreground/70"
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
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:opacity-80"
          >
            Visit live
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
