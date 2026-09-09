"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Sparkles, Terminal, X } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenAbout = () => {
      const stackElement = document.getElementById("stack");
      if (stackElement) {
        try {
          stackElement.scrollIntoView({ behavior: "smooth" });
        } catch (e) {}
      }
      setIsOpen(true);
    };

    (window as any).openAbout = handleOpenAbout;
    window.addEventListener("open-about", handleOpenAbout);
    return () => {
      delete (window as any).openAbout;
      window.removeEventListener("open-about", handleOpenAbout);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const highlights = [
    { label: "Full-Stack Web", icon: Layers },
    { label: "MERN Stack", icon: Sparkles },
    { label: "Embedded IoT", icon: Cpu },
    { label: "REST Architecture", icon: Terminal },
  ];

  const coreStack = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Java",
    "Python",
    "C",
    "SQL",
    "Tailwind CSS",
    "Docker",
    "Git",
    "Arduino / IoT",
  ];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => setIsOpen(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] as const }}
        className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface-container-low border border-black/15 dark:border-outline-variant/60 shadow-2xl p-6 sm:p-7 flex flex-col gap-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-black/10 dark:border-outline-variant/40 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            <h2 className="font-mono text-xs sm:text-sm text-on-surface uppercase tracking-widest font-semibold">
              ABOUT // 01 Background
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            title="Close (Esc)"
            className="p-1.5 rounded-lg hover:bg-surface-container text-text-muted hover:text-on-surface transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Narrative Bio */}
        <p className="font-mono text-xs sm:text-[13px] text-on-surface-variant leading-relaxed sm:leading-[1.9] text-justify sm:text-left">
          {PERSONAL_INFO.aboutExtended}
        </p>

        {/* Competency Badges */}
        <div className="pt-2 border-t border-black/10 dark:border-outline-variant/30 flex flex-wrap items-center gap-2">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container border border-black/10 dark:border-neutral-800 text-on-surface font-mono text-[11px] transition-colors hover:border-black/30 dark:hover:border-neutral-600 shadow-sm"
              >
                <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Core Tech Stack in About */}
        <div className="pt-2 border-t border-black/10 dark:border-outline-variant/30 flex flex-col gap-2.5">
          <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
            Technologies &amp; Tools
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {coreStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-surface-container border border-black/10 dark:border-outline-variant/40 text-on-surface font-mono text-[10px] sm:text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Hint */}
        <div className="flex items-center justify-between text-[11px] font-mono text-text-muted pt-1 border-t border-black/10 dark:border-outline-variant/30">
          <span>{PERSONAL_INFO.educationSummary}</span>
          <kbd className="px-1.5 py-0.5 rounded bg-surface-container border border-outline-variant/40 text-[10px]">
            ESC to close
          </kbd>
        </div>
      </motion.div>
    </div>
  );
}
