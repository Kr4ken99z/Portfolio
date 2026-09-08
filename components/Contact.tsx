"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [imageError, setImageError] = useState(false);

  // Direct Gmail Compose URL
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PERSONAL_INFO.email
  )}`;

  return (
    <section className="py-12 md:py-20 border-b border-outline-variant/30 relative" id="contact">
      {/* Top Monospace Tag */}
      <ScrollReveal>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-text-muted inline-block"></span>
          <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest font-semibold">
            GET IN TOUCH
          </h2>
        </div>

        {/* Main Headline (Clean Monochrome Anjishnu Style) */}
        <div className="text-left md:text-center mb-8 sm:mb-12">
          <h3 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-on-surface leading-tight">
            <span>Contact </span>
            <span className="text-on-surface font-extrabold tracking-tight">
              me
            </span>
          </h3>
          <p className="font-mono text-xs sm:text-sm text-on-surface-variant max-w-lg mx-auto mt-2.5 leading-relaxed">
            Have an opportunity, an idea, or just want to connect? Explore my cosmic orbit or reach out directly below.
          </p>
        </div>
      </ScrollReveal>

      {/* Cosmic Galaxy / Planetary Orbits (Inspired by Anjishnu Ganguly) */}
      <ScrollReveal delay={0.1}>
        <div className="relative w-full max-w-xl mx-auto h-[380px] sm:h-[460px] md:h-[500px] flex items-center justify-center overflow-hidden select-none">
        {/* Ambient Cosmic Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
          }}
        />

        {/* Center: Cosmic Core (Avatar) - High Contrast for both Light & Dark */}
        <div className="relative z-20 flex items-center justify-center group/center">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-white dark:bg-surface border-2 border-neutral-400 dark:border-neutral-700 shadow-md dark:shadow-[0_0_24px_rgba(255,255,255,0.08)] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover/center:scale-105">
            {!imageError ? (
              <Image
                src="/images/avatar.jpg"
                alt="Koustav Mondal"
                width={96}
                height={96}
                className="w-full h-full object-cover object-center rounded-full"
                onError={() => setImageError(true)}
                priority
                unoptimized
              />
            ) : (
              <div className="w-full h-full rounded-full bg-neutral-100 dark:bg-surface-container flex flex-col items-center justify-center">
                <span className="font-mono font-bold text-lg text-neutral-900 dark:text-white">KM</span>
              </div>
            )}
          </div>

          {/* Central Orbit Pulse Halo */}
          <div className="absolute -inset-2 rounded-full border border-neutral-400 dark:border-neutral-700 animate-ping pointer-events-none opacity-20" />

          {/* Center Tooltip on Hover */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover/center:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap px-2.5 py-0.5 rounded-full bg-white dark:bg-surface-container border border-neutral-300 dark:border-outline-variant/60 font-mono text-[10px] text-neutral-900 dark:text-on-surface shadow-lg z-30">
            Koustav Mondal
          </div>
        </div>

        {/* ================= Orbit 2: Inner Planetary Ring (High-Contrast in Light & Dark Mode) ================= */}
        <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[310px] md:h-[310px] rounded-full border border-dashed border-neutral-400/80 dark:border-neutral-700/60 animate-orbit-medium pause-on-hover pointer-events-none z-10">
          {/* Node 2A: LinkedIn */}
          <div
            className="absolute top-[8%] left-[76%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            title="LinkedIn Profile"
          >
            <div className="animate-counter-rotate-medium">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group/icon relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white dark:bg-surface border-2 border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-115 shadow-md dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <Linkedin className="w-5 h-5 transition-transform group-hover/icon:scale-110" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded bg-white dark:bg-surface text-neutral-900 dark:text-on-surface border border-neutral-300 dark:border-outline-variant/60 font-mono text-[10px] shadow-lg">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Node 2B: Resume / CV */}
          <div
            className="absolute top-[90%] left-[26%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            title="Resume / CV"
          >
            <div className="animate-counter-rotate-medium">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume"
                className="group/icon relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white dark:bg-surface border-2 border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-115 shadow-md dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <FileText className="w-5 h-5 transition-transform group-hover/icon:scale-110" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded bg-white dark:bg-surface text-neutral-900 dark:text-on-surface border border-neutral-300 dark:border-outline-variant/60 font-mono text-[10px] shadow-lg">
                  Resume
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= Orbit 1: Outer Planetary Ring (High-Contrast in Light & Dark Mode) ================= */}
        <div className="absolute w-[330px] h-[330px] sm:w-[410px] sm:h-[410px] md:w-[470px] md:h-[470px] rounded-full border border-dashed border-neutral-400/80 dark:border-neutral-700/60 animate-orbit-slow pause-on-hover pointer-events-none z-10">
          {/* Node 1A: GitHub */}
          <div
            className="absolute top-[9%] left-[24%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            title="GitHub Profile"
          >
            <div className="animate-counter-rotate-slow">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group/icon relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-surface border-2 border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-115 shadow-md dark:shadow-[0_6px_20px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover/icon:scale-110" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded bg-white dark:bg-surface text-neutral-900 dark:text-on-surface border border-neutral-300 dark:border-outline-variant/60 font-mono text-[10px] shadow-lg">
                  GitHub
                </span>
              </a>
            </div>
          </div>

          {/* Node 1B: X / Twitter */}
          <div
            className="absolute top-[80%] left-[84%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            title="X / Twitter Profile"
          >
            <div className="animate-counter-rotate-slow">
              <a
                href={PERSONAL_INFO.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) Profile"
                className="group/icon relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-surface border-2 border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-115 shadow-md dark:shadow-[0_6px_20px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform group-hover/icon:scale-110" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded bg-white dark:bg-surface text-neutral-900 dark:text-on-surface border border-neutral-300 dark:border-outline-variant/60 font-mono text-[10px] shadow-lg">
                  Twitter / X
                </span>
              </a>
            </div>
          </div>

          {/* Node 1C: Direct Gmail Compose in Circle */}
          <div
            className="absolute top-[70%] left-[8%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            title="Send Mail"
          >
            <div className="animate-counter-rotate-slow">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send Mail"
                className="group/icon relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-surface border-2 border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-115 shadow-md dark:shadow-[0_6px_20px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover/icon:scale-110" />

                {/* Interactive Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded bg-white dark:bg-surface text-neutral-900 dark:text-on-surface border border-neutral-300 dark:border-outline-variant/60 font-mono text-[10px] shadow-lg">
                  Send Mail
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>

      {/* Accessible Direct Reach Bar below the Cosmic Galaxy (No Copy Email button as requested) */}
      <ScrollReveal delay={0.15}>
        <div className="mt-6 max-w-xl mx-auto p-4 sm:p-5 rounded-2xl bg-neutral-100 dark:bg-surface-container-low border border-neutral-300 dark:border-outline-variant/50 flex flex-col sm:flex-row items-center justify-between gap-3.5 shadow-md dark:shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white dark:bg-surface-container border border-neutral-300 dark:border-outline-variant/60 flex items-center justify-center text-neutral-900 dark:text-on-surface shrink-0 shadow-sm">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-mono text-[11px] text-text-muted">Direct Email</span>
              <span className="font-mono text-xs sm:text-sm text-neutral-900 dark:text-on-surface font-medium select-all">
                {PERSONAL_INFO.email}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black font-mono text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Send Mail</span>
              <Send className="w-3 h-3" />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
