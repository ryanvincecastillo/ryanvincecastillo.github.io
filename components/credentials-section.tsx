"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import { ACHIEVEMENTS, CONFERENCES } from "@/lib/profile";

export function CredentialsSection() {
  const featured = ACHIEVEMENTS.slice(0, 3);

  return (
    <section id="credentials" className="w-full px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Track record
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Achievements & background
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Production software, co-founded businesses, and shipped products —
              with a full resume for hiring managers and clients.
            </p>
          </div>
          <Link
            href="/resume/"
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-border hover:bg-muted"
          >
            View resume
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <ul className="grid gap-4 sm:grid-cols-3">
          {featured.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="rounded-2xl border border-border/60 bg-card p-6"
            >
              <Award className="h-5 w-5 text-foreground/60" aria-hidden />
              {item.year && (
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {item.year}
                </p>
              )}
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </motion.li>
          ))}
        </ul>

        {CONFERENCES.length > 0 && (
          <div className="mt-12 rounded-2xl border border-border/60 bg-muted/40 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Conferences & events
            </p>
            <ul className="mt-4 space-y-3">
              {CONFERENCES.map((event) => (
                <li
                  key={`${event.name}-${event.year}`}
                  className="flex flex-wrap items-baseline justify-between gap-2 text-sm"
                >
                  <span className="font-medium text-foreground">{event.name}</span>
                  <span className="text-muted-foreground">
                    {[event.role, event.location, event.year]
                      .filter(Boolean)
                      .join(" · ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
