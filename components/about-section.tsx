"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, PiggyBank, ShieldCheck } from "lucide-react";

const PILLARS = [
  {
    icon: PiggyBank,
    title: "Built to reduce cost",
    body: "I focus on what removes manual work or replaces expensive tools — not features that look good in a demo but never get used.",
  },
  {
    icon: Clock,
    title: "Shipped on honest timelines",
    body: "Clear scope, regular updates, working software early. You always know where things stand and what you're paying for.",
  },
  {
    icon: ShieldCheck,
    title: "One person, end to end",
    body: "You work directly with the developer — no account managers, no handoffs. Faster decisions, fewer misunderstandings.",
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
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              About
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              A developer who speaks business, not just code.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I&apos;m Ryan Vince Castillo, based in Davao City, Philippines
                and working remotely with business owners worldwide. Most of my
                clients aren&apos;t technical — they care about outcomes: less
                admin, fewer mistakes, lower software bills, and systems that
                actually match how their team works.
              </p>
              <p>
                I handle everything from customer-facing websites to internal
                tools, automations, and AI-assisted workflows. You get one
                person who can design, build, deploy, and maintain — which
                typically costs far less than hiring an agency or juggling
                multiple freelancers.
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
            <p className="mt-4 text-center text-sm text-muted-foreground lg:text-left">
              Replies within a day · Remote worldwide · UTC+8
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
