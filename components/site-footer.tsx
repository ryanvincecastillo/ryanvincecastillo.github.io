import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "ryanvincecastillo@gmail.com";
const GITHUB = "https://github.com/ryanvincecastillo";
const LINKEDIN = "https://www.linkedin.com/in/ryan-vince-castillo-67690b20a/";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/60 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <Link
            href="/"
            className="font-medium text-foreground/80 hover:text-foreground transition"
          >
            Ryan Vince Castillo
          </Link>
          <span aria-hidden>·</span>
          <p>© {new Date().getFullYear()}</p>
          <span aria-hidden className="hidden sm:inline">
            ·
          </span>
          <p className="hidden sm:block">Built in Davao City · Remote worldwide</p>
        </div>

        <div className="flex items-center gap-1">
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
