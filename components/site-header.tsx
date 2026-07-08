"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Resume", href: "/resume/" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground transition hover:opacity-80"
        >
          <span className="relative h-8 w-8 overflow-hidden rounded-full border border-border/60 bg-muted">
            <Image
              src="/files/profile-photo.jpg"
              alt=""
              fill
              sizes="32px"
              className="object-cover"
              aria-hidden
            />
          </span>
          Ryan Vince Castillo
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-1 md:flex"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90 sm:inline-flex"
          >
            Free consult
          </a>
          <ThemeToggle className="relative top-0 right-0" />
        </div>
      </div>
    </header>
  );
}
