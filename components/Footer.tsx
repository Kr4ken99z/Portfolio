"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useEmailLink } from "@/lib/emailClient";

export default function Footer() {
  const emailLink = useEmailLink();
  const footerNavLinks = [
    { label: "About", href: "#about", isAction: true },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof footerNavLinks[0]) => {
    if (link.isAction) {
      e.preventDefault();
      if (typeof window !== "undefined") {
        if ((window as any).openAbout) {
          (window as any).openAbout();
        } else {
          window.dispatchEvent(new CustomEvent("open-about"));
        }
      }
    }
  };

  return (
    <footer id="footer" className="py-8 border-t border-outline-variant/30 text-xs text-on-surface-variant font-mono">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright & Synchronized Navigation */}
        <div className="flex flex-wrap items-center gap-3 text-center sm:text-left">
          <span className="text-on-surface">© 2026 Koustav.</span>
          <span className="text-outline-variant select-none hidden sm:inline">|</span>
          <nav className="flex items-center gap-4">
            {footerNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Minimal Social Icons including Discord */}
        <div className="flex items-center gap-3.5">
          {PERSONAL_INFO.socials.discord && (
            <a
              href={PERSONAL_INFO.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord Profile"
              className="text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          )}

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
            href={emailLink.href}
            onClick={emailLink.onClick}
            target={emailLink.target}
            rel={emailLink.rel}
            aria-label="Send Email"
            title="Compose Email"
            className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
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
