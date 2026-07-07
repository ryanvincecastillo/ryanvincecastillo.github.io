"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Layers,
  PiggyBank,
  Workflow,
} from "lucide-react";

const SERVICES = [
  {
    icon: Workflow,
    title: "Automate repetitive work",
    body: "Replace manual spreadsheets, copy-paste, and double-entry with tools that run the same steps every time — fewer errors, less admin time.",
    outcome: "Cut hours of weekly busywork",
  },
  {
    icon: Layers,
    title: "Build what off-the-shelf can't",
    body: "Custom dashboards, client portals, and internal apps shaped to how your team actually works — not how a generic SaaS product thinks you should.",
    outcome: "Stop paying for features you don't use",
  },
  {
    icon: Bot,
    title: "Add AI where it saves real money",
    body: "Practical AI workflows for support triage, document handling, and reporting — applied where they reduce cost, not where they look impressive.",
    outcome: "Do more without hiring another headcount",
  },
  {
    icon: PiggyBank,
    title: "One developer, full delivery",
    body: "Design, build, deploy, and maintain — no agency layers, no handoffs between five specialists. You talk to the person writing the code.",
    outcome: "Lower cost than a traditional agency",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Understand the bottleneck",
    body: "We map what's costing you time or money today — manual steps, tool sprawl, or workarounds your team built out of necessity.",
  },
  {
    step: "02",
    title: "Scope something shippable",
    body: "I propose a focused first version with a clear price and timeline. No open-ended discovery that burns budget before anything ships.",
  },
  {
    step: "03",
    title: "Build, launch, iterate",
    body: "You get working software in your hands early. We refine based on real use — not slide decks.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            How I help
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Software that pays for itself — in time saved and costs cut.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            I work with business owners who are tired of duct-taping tools together
            or paying for software that almost fits. I build lean systems that remove
            friction from daily operations.
          </p>
        </motion.div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="rounded-2xl border border-border/60 bg-card p-6 sm:p-7"
            >
              <service.icon
                className="h-5 w-5 text-foreground/70"
                aria-hidden
              />
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {service.body}
              </p>
              <p className="mt-4 text-sm font-medium text-foreground/85">
                → {service.outcome}
              </p>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20 rounded-[2rem] border border-border/60 bg-muted/40 p-8 sm:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            How engagements work
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Simple process. No surprises.
          </h3>

          <ol className="mt-8 grid gap-6 sm:grid-cols-3">
            {PROCESS.map((item) => (
              <li key={item.step}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Step {item.step}
                </p>
                <h4 className="mt-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>

          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Book a free 20-minute consult
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
