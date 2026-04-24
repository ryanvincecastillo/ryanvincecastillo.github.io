"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Wrench, Compass } from "lucide-react";

const PILLARS = [
  {
    icon: Wrench,
    title: "Full-stack comfort",
    body: "Frontend, backend, infra, deployment. Happy owning a problem end-to-end instead of throwing it over the wall.",
  },
  {
    icon: Compass,
    title: "Calm delivery",
    body: "Honest scopes, shipped on time. I'd rather deliver a small thing that works than a big thing that doesn't.",
  },
  {
    icon: Sparkles,
    title: "AI in the loop",
    body: "I use AI to ship the boring parts faster — not as a gimmick, but as a real force multiplier on everyday work.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="w-full px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16"
        >
          {/* Left: copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              About
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Software that quietly works.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a software developer based in Davao City, Philippines.
                I work remotely with teams around the world — founders, product
                squads, and indie builders who want someone who can own a
                problem end-to-end and deliver calmly.
              </p>
              <p>
                My day-to-day is full-stack:{" "}
                <span className="text-foreground/85">
                  TypeScript and React on the front, .NET / Node on the back,
                </span>{" "}
                with Supabase or Postgres when data needs to persist. Lately
                I&apos;ve been leaning into AI-assisted workflows — not as a
                gimmick, but as a faster way to ship the boring parts so you
                can think about the interesting ones.
              </p>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {PILLARS.map((p) => (
                <li
                  key={p.title}
                  className="rounded-2xl border border-border/60 bg-card p-5"
                >
                  <p.icon className="h-5 w-5 text-foreground/70" aria-hidden />
                  <h3 className="mt-3 text-base font-semibold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: photo */}
          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card p-3 shadow-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src="/files/profile-photo.jpg"
                  alt="Ryan Vince Castillo"
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 60vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
