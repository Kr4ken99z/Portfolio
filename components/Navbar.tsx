"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import ThemeToggle from "@/components/ThemeToggle";
import HyperText from "@/components/HyperText";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-black/10 dark:border-outline-variant/40 transition-colors"
    >
      <div className="flex justify-between items-center max-w-3xl mx-auto px-5 sm:px-6 h-16">
        {/* Left: Brand Monogram & Live Status */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-mono text-sm sm:text-base font-semibold tracking-tight text-on-surface hover:opacity-80 transition-opacity flex items-center group"
          >
            <HyperText
              text="devkoustav"
              duration={700}
              className="font-semibold text-on-surface tracking-tight"
            />
          </Link>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-mono text-[11px] text-primary font-medium uppercase tracking-wider">
              {PERSONAL_INFO.status}
            </span>
          </div>
        </div>

        {/* Right: Desktop Navigation Links & Theme Toggle */}
        <div className="flex items-center gap-3 sm:gap-5">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-on-surface-variant hover:text-on-surface transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-outline-variant/40 text-on-surface-variant hover:text-on-surface hover:border-outline-variant"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-5 py-4 border-b border-outline-variant/40 bg-background/95 backdrop-blur-lg flex flex-col gap-3">
          <div className="sm:hidden flex items-center gap-2 px-3 py-1.5 mb-1 rounded-full bg-surface-container-low border border-outline-variant/40 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-[10px] text-primary font-medium uppercase tracking-wider">
              {PERSONAL_INFO.status}
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-sm py-1.5 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
