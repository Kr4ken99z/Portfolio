"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import HyperText from "@/components/HyperText";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [localTime, setLocalTime] = useState<string>("");
  const [imageError, setImageError] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

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
      <div className="md:col-span-7 flex flex-col gap-5">
        {/* Monospace Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-black/15 dark:border-outline-variant/60 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-text-muted"></span>
          <span className="font-mono text-[11px] text-on-surface-variant font-medium tracking-wide uppercase">
            {PERSONAL_INFO.tagline}
          </span>
        </div>

        {/* Main Headline (JetBrains Mono style from Mehbub) */}
        <h1 className="font-mono text-xl sm:text-2xl md:text-[1.75rem] font-semibold tracking-tight text-on-surface leading-snug">
          Building reliable web applications, robust REST APIs, and intuitive digital tools.
        </h1>

        {/* Bio Paragraph (JetBrains Mono style from Mehbub screenshot) */}
        <p className="font-mono text-xs sm:text-[13px] text-on-surface-variant leading-relaxed sm:leading-[1.85]">
          {PERSONAL_INFO.bio}
        </p>

        {/* Action & Social Strip */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-on-surface text-background font-medium text-xs hover:opacity-90 transition-all active:scale-[0.98] flex items-center gap-1.5 shadow-sm font-mono"
          >
            <span>Get in Touch</span>
          </a>

          <a
            href="#projects"
            className="px-3.5 py-2 rounded-xl bg-surface-container-low border border-black/15 dark:border-outline-variant/50 text-on-surface font-mono text-xs hover:border-black/35 dark:hover:border-outline-variant transition-all active:scale-[0.98] flex items-center gap-1.5 shadow-sm"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-surface-container-low border border-black/15 dark:border-outline-variant/50 text-on-surface font-mono text-xs hover:border-black/35 dark:hover:border-outline-variant transition-all active:scale-[0.98] flex items-center gap-1.5 shadow-sm"
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
              href={PERSONAL_INFO.socials.email}
              aria-label="Send Email"
              className="w-8 h-8 rounded-lg bg-surface-container-low border border-black/15 dark:border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:border-black/35 transition-all active:scale-95 shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Clickable Profile Card -> GitHub */}
      <div className="md:col-span-5">
        <a
          href={PERSONAL_INFO.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          title="View GitHub (@Kr4ken99z)"
          onMouseEnter={() => setIsCardHovered(true)}
          onMouseLeave={() => setIsCardHovered(false)}
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
              <h2 className="text-base sm:text-lg font-semibold tracking-normal text-primary flex items-center">
                <HyperText
                  text="Koustav"
                  trigger={isCardHovered}
                  duration={600}
                  className="font-semibold text-primary"
                />
              </h2>
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
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-text-muted opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-text-muted"></span>
                </span>
                <span className="font-mono text-on-surface font-medium">Kolkata (IST)</span>
              </div>
              <span className="font-mono text-on-surface font-medium" suppressHydrationWarning>
                {mounted && localTime ? localTime : "IST (Kolkata)"}
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
