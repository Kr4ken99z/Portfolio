"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import HyperText from "@/components/HyperText";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [localTime, setLocalTime] = useState<string>("");
  const [imageError, setImageError] = useState(false);
  const [nameHovered, setNameHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setLocalTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-black/15 dark:border-outline-variant/30">
      {/* Left Column: Core Introduction */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="md:col-span-7 flex flex-col gap-5"
      >
        {/* Monospace Pill */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-black/15 dark:border-outline-variant/60 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            <span className="font-mono text-[11px] text-on-surface-variant font-medium tracking-wide uppercase">
              {PERSONAL_INFO.tagline}
            </span>
          </div>
        </motion.div>

        {/* Main Headline (JetBrains Mono style from Mehbub) */}
        <motion.h1
          variants={itemVariants}
          className="font-mono text-xl sm:text-2xl md:text-[1.75rem] font-semibold tracking-tight text-on-surface leading-snug"
        >
          Building full-stack web applications, scalable systems, and engineering hardware.
        </motion.h1>

        {/* Bio Paragraph (JetBrains Mono style from Mehbub screenshot) */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-xs sm:text-[13px] text-on-surface-variant leading-relaxed sm:leading-[1.85]"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* Action & Social Strip */}
        <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2.5 rounded-xl bg-on-surface text-background font-medium text-xs hover:opacity-90 transition-all active:scale-[0.98] flex items-center gap-1.5 shadow-sm font-mono focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <span>Get in Touch</span>
          </a>

          <a
            href="#projects"
            className="px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-black/15 dark:border-outline-variant/50 text-on-surface font-mono text-xs hover:border-black/35 dark:hover:border-outline-variant transition-all active:scale-[0.98] flex items-center gap-1.5 shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-black/15 dark:border-outline-variant/50 text-on-surface font-mono text-xs hover:border-black/35 dark:hover:border-outline-variant transition-all active:scale-[0.98] flex items-center gap-1.5 shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-1.5 pl-1">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 rounded-lg bg-surface-container-low border border-black/15 dark:border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:border-black/35 transition-all active:scale-95 shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-8 h-8 rounded-lg bg-surface-container-low border border-black/15 dark:border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:border-black/35 transition-all active:scale-95 shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) Profile"
              className="w-8 h-8 rounded-lg bg-surface-container-low border border-black/15 dark:border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:border-black/35 transition-all active:scale-95 shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href={PERSONAL_INFO.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord Server"
              title="Join Discord Community"
              className="w-8 h-8 rounded-lg bg-surface-container-low border border-black/15 dark:border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:border-black/35 transition-all active:scale-95 shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={(e) => {
                const isMobile =
                  typeof navigator !== "undefined" &&
                  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                if (!isMobile) {
                  e.preventDefault();
                  window.open(
                    `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }
              }}
              aria-label="Send Email"
              title="Compose Email"
              className="w-8 h-8 rounded-lg bg-surface-container-low border border-black/15 dark:border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:border-black/35 transition-all active:scale-95 shadow-sm cursor-pointer"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column: Clickable Profile Card -> GitHub */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="md:col-span-5"
      >
        <a
          href={PERSONAL_INFO.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          title="View GitHub (@Kr4ken99z)"
          className="bg-surface-container-low border border-black/15 dark:border-outline-variant/50 hover:border-black/35 dark:hover:border-outline-variant rounded-2xl p-4 sm:p-5 flex flex-col gap-3.5 shadow-2xl relative overflow-hidden group transition-all duration-200 hover:-translate-y-0.5 cursor-pointer block"
        >
          {/* Avatar & Name Row */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-surface-container border border-black/15 dark:border-outline-variant/70 flex items-center justify-center overflow-hidden relative shrink-0 shadow-inner">
              {!imageError ? (
                <Image
                  src="/images/avatar.jpg"
                  alt="Koustav"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
                  onError={() => setImageError(true)}
                  priority
                  unoptimized
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-2">
                  <span className="font-semibold text-base tracking-tight text-on-surface">
                    K
                  </span>
                  <span className="font-mono text-[9px] text-text-muted mt-0.5">DEV</span>
                </div>
              )}
            </div>

            <div>
              {/* Profile Card Header: Exclusively Green */}
              <div
                className="inline-block cursor-pointer"
                onMouseEnter={() => setNameHovered(true)}
                onMouseLeave={() => setNameHovered(false)}
              >
                <h2 className="text-base sm:text-lg font-semibold tracking-normal text-primary flex items-center">
                  <HyperText
                    text="Koustav"
                    trigger={nameHovered}
                    duration={450}
                    className="font-semibold text-primary cursor-pointer"
                  />
                </h2>
              </div>
              <p className="font-mono text-xs text-on-surface-variant mt-0.5">{PERSONAL_INFO.role}</p>
            </div>
          </div>

          {/* Clean Location Row */}
          <div className="border-t border-outline-variant/40 pt-2.5 flex items-center gap-1.5 text-on-surface-variant text-xs font-mono">
            <MapPin className="w-3.5 h-3.5 text-on-surface-variant shrink-0" />
            <span className="truncate">{PERSONAL_INFO.location}</span>
          </div>

          {/* Live Local Clock */}
          <div className="border-t border-outline-variant/40 pt-2.5">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container border border-outline-variant/40 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="font-mono text-on-surface font-medium">Kolkata (IST)</span>
              </div>
              <span className="font-mono text-on-surface font-medium" suppressHydrationWarning>
                {mounted && localTime ? localTime : "IST (Kolkata)"}
              </span>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
