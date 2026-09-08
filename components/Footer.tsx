"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-outline-variant/30 text-xs text-on-surface-variant font-mono">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright & Navigation */}
        <div className="flex flex-wrap items-center gap-3 text-center sm:text-left">
          <span className="text-on-surface">© 2026 Koustav.</span>
          <span className="text-outline-variant select-none hidden sm:inline">|</span>
          <nav className="flex items-center gap-4">
            <a
              href="#projects"
              className="text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Projects
            </a>
            <a
              href="#stack"
              className="text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Stack
            </a>
            <a
              href="#education"
              className="text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Right: Minimal Social Icons matching DevLeo */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X Profile"
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a
            href={PERSONAL_INFO.socials.email}
            aria-label="Send Email"
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
