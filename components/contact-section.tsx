"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "ryanvincecastillo@gmail.com";
const GITHUB = "https://github.com/ryanvincecastillo";
const LINKEDIN = "https://www.linkedin.com/in/ryan-vince-castillo-67690b20a/";

const PROMPTS = [
  "What's eating your team's time every week?",
  "What tool are you paying for that almost fits?",
  "What would change if this process just worked?",
];

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
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Tell me what&apos;s costing your business time or money.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            I take a few projects at a time. Send a short note about your
            business and what&apos;s not working — no technical jargon required.
            I&apos;ll reply within a day with an honest take on whether I can
            help and what it might cost.
          </p>

          <ul className="mx-auto mt-8 flex max-w-lg flex-col gap-2 text-left text-sm text-muted-foreground">
            {PROMPTS.map((prompt) => (
              <li key={prompt} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                {prompt}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}?subject=Business%20consultation&body=Hi%20Ryan%2C%0A%0AMy%20business%3A%20%0AWhat's%20not%20working%3A%20%0AWhat%20success%20looks%20like%3A%20`}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Email me
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Free%2020-minute%20consult&body=Hi%20Ryan%2C%20I'd%20like%20to%20book%20a%20quick%20consult.%0A%0AMy%20business%3A%20%0AWhat%20I'd%20like%20to%20discuss%3A%20`}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-border hover:bg-muted"
            >
              <Calendar className="h-4 w-4" />
              Book a free consult
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
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-border hover:bg-muted"
            >
              <Github className="h-4 w-4" />
              GitHub
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
