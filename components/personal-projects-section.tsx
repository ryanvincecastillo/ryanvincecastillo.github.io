"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { PERSONAL_PROJECTS } from "@/lib/projects";

export function PersonalProjectsSection() {
  if (PERSONAL_PROJECTS.length === 0) return null;

  return (
    <section id="personal" className="w-full px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Personal projects
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Side apps I built on my own time.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            These are personal experiments — not client or commercial work. They
            show the range of what I can ship; my professional focus is RYNXPLAY
            and client builds.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {PERSONAL_PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
