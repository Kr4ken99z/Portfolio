"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  Github,
  Linkedin,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);

    try {
      confetti({
        particleCount: 36,
        spread: 50,
        origin: { y: 0.85 },
        colors: ["#10B981", "#4EDEA3", "#FFFFFF"],
      });
    } catch {}

    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="py-12 md:py-20 border-b border-outline-variant/30 relative" id="contact">
      {/* Top Monospace Tag */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
        <h2 className="font-mono text-xs text-primary uppercase tracking-widest font-semibold">
          GET IN TOUCH
        </h2>
      </div>

      {/* Main Headline (Anjishnu Style with Outline/Stroke Accent) */}
      <div className="text-left md:text-center mb-8 sm:mb-12">
        <h3 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-on-surface leading-tight">
          <span>Contact </span>
          <span
            className="text-primary tracking-tight font-extrabold"
            style={{
              textShadow:
                "0 0 20px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.2)",
            }}
          >
            me
          </span>
        </h3>
        <p className="font-mono text-xs sm:text-sm text-on-surface-variant max-w-lg mx-auto mt-2.5 leading-relaxed">
          Have an opportunity, an idea, or just want to connect? Explore my cosmic orbit or reach out directly below.
        </p>
      </div>

      {/* Cosmic Galaxy / Planetary Orbits (Inspired by Anjishnu Ganguly) */}
      <div className="relative w-full max-w-xl mx-auto h-[380px] sm:h-[460px] md:h-[500px] flex items-center justify-center overflow-hidden select-none">
        {/* Ambient Cosmic Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.12) 0%, transparent 70%)",
          }}
        />

        {/* Center: Cosmic Core (Avatar) */}
        <div className="relative z-20 flex items-center justify-center group/center">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-surface border-2 border-primary/60 shadow-[0_0_30px_rgba(16,185,129,0.35)] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover/center:scale-105">
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
              <div className="w-full h-full rounded-full bg-surface-container flex flex-col items-center justify-center">
                <span className="font-mono font-bold text-lg text-primary">KM</span>
              </div>
            )}
          </div>

          {/* Central Orbit Pulse Halo */}
          <div className="absolute -inset-2 rounded-full border border-primary/30 animate-ping pointer-events-none opacity-25" />

          {/* Center Tooltip on Hover */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover/center:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap px-2.5 py-0.5 rounded-full bg-surface-container border border-outline-variant/60 font-mono text-[10px] text-primary shadow-lg z-30">
            Koustav Mondal
          </div>
        </div>

        {/* ================= Orbit 2: Inner Planetary Ring ================= */}
        <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[310px] md:h-[310px] rounded-full border border-dashed border-primary/35 animate-orbit-medium pause-on-hover pointer-events-none z-10">
          {/* Inner Glow Ring */}
          <div className="absolute inset-0 rounded-full border border-primary/15 opacity-60" />

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
                className="group/icon relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-surface border border-outline-variant/60 hover:border-primary text-on-surface-variant hover:text-primary transition-all duration-200 hover:scale-115 shadow-[0_4px_16px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <Linkedin className="w-5 h-5 transition-transform group-hover/icon:scale-110" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded bg-surface text-on-surface border border-outline-variant/60 font-mono text-[10px] shadow-lg">
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
                className="group/icon relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-surface border border-outline-variant/60 hover:border-primary text-on-surface-variant hover:text-primary transition-all duration-200 hover:scale-115 shadow-[0_4px_16px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <FileText className="w-5 h-5 transition-transform group-hover/icon:scale-110" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded bg-surface text-on-surface border border-outline-variant/60 font-mono text-[10px] shadow-lg">
                  Resume
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= Orbit 1: Outer Planetary Ring ================= */}
        <div className="absolute w-[330px] h-[330px] sm:w-[410px] sm:h-[410px] md:w-[470px] md:h-[470px] rounded-full border border-dashed border-primary/30 animate-orbit-slow pause-on-hover pointer-events-none z-10">
          {/* Subtle Outer Glow Accent */}
          <div className="absolute inset-0 rounded-full border border-primary/10" />

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
                className="group/icon relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-surface border border-outline-variant/60 hover:border-primary text-on-surface-variant hover:text-primary transition-all duration-200 hover:scale-115 shadow-[0_6px_20px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover/icon:scale-110" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded bg-surface text-on-surface border border-outline-variant/60 font-mono text-[10px] shadow-lg">
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
                className="group/icon relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-surface border border-outline-variant/60 hover:border-primary text-on-surface-variant hover:text-primary transition-all duration-200 hover:scale-115 shadow-[0_6px_20px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform group-hover/icon:scale-110" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded bg-surface text-on-surface border border-outline-variant/60 font-mono text-[10px] shadow-lg">
                  Twitter / X
                </span>
              </a>
            </div>
          </div>

          {/* Node 1C: Direct Email (Click to Copy + Confetti Tooltip) */}
          <div
            className="absolute top-[70%] left-[8%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            title="Email (Click to Copy)"
          >
            <div className="animate-counter-rotate-slow">
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy Email Address"
                className="group/icon relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-surface border border-outline-variant/60 hover:border-primary text-on-surface-variant hover:text-primary transition-all duration-200 hover:scale-115 shadow-[0_6px_20px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                {copied ? (
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                ) : (
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover/icon:scale-110" />
                )}

                {/* Interactive Tooltip / Copied Badge */}
                <span
                  className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded font-mono text-[10px] shadow-lg transition-all duration-200 pointer-events-none ${
                    copied
                      ? "opacity-100 scale-100 bg-primary text-background font-semibold"
                      : "opacity-0 group-hover/icon:opacity-100 bg-surface text-on-surface border border-outline-variant/60"
                  }`}
                >
                  {copied ? "Copied!" : "Copy Email"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Quick-Reach Bar below the Cosmic Galaxy */}
      <div className="mt-6 max-w-xl mx-auto p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-outline-variant/50 flex flex-col sm:flex-row items-center justify-between gap-3.5 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-mono text-[11px] text-text-muted">Direct Email</span>
            <span className="font-mono text-xs sm:text-sm text-on-surface font-medium select-all">
              {PERSONAL_INFO.email}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-surface border border-outline-variant/60 hover:border-primary/60 text-on-surface hover:text-primary font-mono text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>

          <a
            href={PERSONAL_INFO.socials.email}
            className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-primary text-background font-mono text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>Say Hello</span>
            <Send className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
