"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [videoMounted, setVideoMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setVideoMounted(true);
  }, []);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.play().catch(() => {});
    }
  };

  return (
    <section className="py-10 md:py-14 border-b border-outline-variant/30" id="contact">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
        <h2 className="font-mono text-xs text-primary uppercase tracking-widest font-semibold">
          GET IN TOUCH
        </h2>
      </div>

      {/* Minimal Card with hover-activated video animation */}
      <div
        onMouseEnter={handleMouseEnter}
        className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-7 shadow-2xl bg-surface-container-low border border-outline-variant/50 hover:border-primary/40 transition-all duration-500 cursor-default"
      >
        {/* Hover-Activated Video Animation */}
        {videoMounted && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            suppressHydrationWarning
            className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-out"
            style={{
              filter: "saturate(1.15) contrast(1.08) brightness(1.06)",
            }}
          >
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>
        )}

        {/* Ambient Gradient Vignette Active on Hover */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, var(--vignette-start) 0%, var(--vignette-end) 100%)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col gap-4 sm:gap-5">
          {/* Header Text */}
          <div className="text-left flex flex-col gap-1.5">
            <h2 className="text-lg sm:text-xl font-bold text-on-surface tracking-tight">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-xs sm:text-[13px] text-on-surface-variant font-mono leading-relaxed max-w-xl">
              Open to engineering opportunities and collaborative projects. Reach out directly below.
            </p>
          </div>

          {/* Minimal Channel Cards List */}
          <div className="flex flex-col gap-2 pt-0.5">
            {/* 1. GitHub */}
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/item flex items-center justify-between py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-xl bg-surface-container/50 hover:bg-surface-container border border-outline-variant/40 hover:border-primary/40 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <Github className="w-4 h-4 text-on-surface shrink-0 group-hover/item:text-primary transition-colors" />
                <span className="text-xs sm:text-sm font-medium text-on-surface group-hover/item:text-primary transition-colors">
                  GitHub
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-text-muted hidden sm:inline">
                  @Kr4ken99z
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover/item:text-primary group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
              </div>
            </a>

            {/* 2. Direct Email */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                PERSONAL_INFO.email
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/item flex items-center justify-between py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-xl bg-surface-container/50 hover:bg-surface-container border border-outline-variant/40 hover:border-primary/40 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-on-surface shrink-0 group-hover/item:text-primary transition-colors" />
                <span className="text-xs sm:text-sm font-medium text-on-surface group-hover/item:text-primary transition-colors">
                  Email
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-text-muted hidden sm:inline">
                  {PERSONAL_INFO.email}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover/item:text-primary group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
              </div>
            </a>

            {/* 3. LinkedIn */}
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group/item flex items-center justify-between py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-xl bg-surface-container/50 hover:bg-surface-container border border-outline-variant/40 hover:border-primary/40 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-on-surface shrink-0 group-hover/item:text-primary transition-colors" />
                <span className="text-xs sm:text-sm font-medium text-on-surface group-hover/item:text-primary transition-colors">
                  LinkedIn
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-text-muted hidden sm:inline">
                  /in/koustav07
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover/item:text-primary group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
              </div>
            </a>

            {/* 4. X / Twitter */}
            <a
              href={PERSONAL_INFO.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="group/item flex items-center justify-between py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-xl bg-surface-container/50 hover:bg-surface-container border border-outline-variant/40 hover:border-primary/40 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-3.5 h-3.5 shrink-0 fill-current text-on-surface group-hover/item:text-primary transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-on-surface group-hover/item:text-primary transition-colors">
                  X (Twitter)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-text-muted hidden sm:inline">
                  @devkoustav
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover/item:text-primary group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
