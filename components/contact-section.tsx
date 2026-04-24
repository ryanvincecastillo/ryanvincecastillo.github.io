"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "ryanvincecastillo@gmail.com";
const GITHUB = "https://github.com/ryanvincecastillo";
const LINKEDIN = "https://www.linkedin.com/in/ryan-vince-castillo-67690b20a/";

export function ContactSection() {
  return (
    <section id="contact" className="w-full px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card p-10 text-center shadow-sm sm:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-foreground/5 blur-3xl"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Get in touch
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Have an idea worth building?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            I take a few projects at a time. Tell me about yours — scope,
            stack, deadline, or just a vague feeling. I&apos;ll reply honestly
            about whether I&apos;m the right fit.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Email me
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-border hover:bg-muted"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-border hover:bg-muted"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Replies within a day · UTC+8 · Davao City, Philippines
          </p>
        </motion.div>
      </div>
    </section>
  );
}
