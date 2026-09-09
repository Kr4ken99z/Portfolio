"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import ThemeToggle from "@/components/ThemeToggle";
import HyperText from "@/components/HyperText";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const [brandHovered, setBrandHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      // Smoothly hide header navbar when user reaches the footer navbar area
      setIsAtFooter(scrollPosition >= documentHeight - 240);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", isAction: true },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
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
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className={`sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-black/10 dark:border-outline-variant/40 transition-all duration-300 ${
        isAtFooter ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="flex justify-between items-center max-w-3xl mx-auto px-5 sm:px-6 h-16">
        {/* Left: Brand Monogram & Live Status */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            onMouseEnter={() => setBrandHovered(true)}
            onMouseLeave={() => setBrandHovered(false)}
            className="font-mono text-sm sm:text-base font-semibold tracking-tight text-on-surface hover:text-primary transition-colors flex items-center group focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md cursor-pointer"
          >
            <HyperText
              text="devkoustav"
              trigger={brandHovered}
              duration={450}
              className="font-semibold text-on-surface group-hover:text-primary transition-colors tracking-tight cursor-pointer"
            />
          </Link>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-black/15 dark:border-outline-variant/40">
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
          <nav className="hidden md:flex items-center gap-5 sm:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="font-mono text-xs text-on-surface-variant hover:text-on-surface transition-colors tracking-wide py-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded cursor-pointer"
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
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-black/15 dark:border-outline-variant/40 text-on-surface-variant hover:text-on-surface hover:border-black/30 dark:hover:border-outline-variant focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-5 py-4 border-b border-black/15 dark:border-outline-variant/40 bg-background/98 backdrop-blur-lg flex flex-col gap-2">
          <div className="sm:hidden flex items-center gap-2 px-3 py-1.5 mb-2 rounded-full bg-surface-container-low border border-black/15 dark:border-outline-variant/40 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-[10px] text-primary font-medium uppercase tracking-wider">
              {PERSONAL_INFO.status}
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="font-mono text-sm py-2 px-1 text-on-surface-variant hover:text-on-surface transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
