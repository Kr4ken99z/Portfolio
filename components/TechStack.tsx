"use client";

import { useState } from "react";
import TechIcon from "@/components/TechIcons";

interface TechItem {
  name: string;
  icon: string;
}

const ALL_TECH: TechItem[] = [
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Python", icon: "python" },
  { name: "C", icon: "c" },
  { name: "Java", icon: "java" },
  { name: "Node.js", icon: "nodejs" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Express.js", icon: "express" },
  { name: "Redux", icon: "redux" },
  { name: "Docker", icon: "docker" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" },
  { name: "REST APIs", icon: "api" },
  { name: "SQL", icon: "sql" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Vercel", icon: "vercel" },
  { name: "Postman", icon: "postman" },
  { name: "HTML5/CSS3", icon: "html" },
  { name: "Arduino / IoT", icon: "arduino" },
];

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-16 border-b border-black/15 dark:border-outline-variant/30" id="stack">
      {/* Title Header */}
      <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest font-semibold mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-text-muted inline-block"></span>
        <span>TECH STACK</span>
      </h2>

      {/* Tech Stack Container with slight black border */}
      <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-black/15 dark:border-outline-variant/50 shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-none">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
          {ALL_TECH.map((item) => (
            <div
              key={item.name}
              onMouseEnter={() => setHoveredTech(item.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className="relative flex items-center justify-center p-2 rounded-xl bg-white dark:bg-surface border border-black/10 dark:border-neutral-800 hover:border-black/30 dark:hover:border-neutral-600 transition-all duration-150 hover:scale-110 hover:-translate-y-0.5 cursor-pointer group shadow-sm"
            >
              <TechIcon name={item.icon} className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" />

              {/* Floating Minimal Tooltip */}
              {hoveredTech === item.name && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-white text-black font-mono text-[11px] font-semibold tracking-tight whitespace-nowrap shadow-lg pointer-events-none z-30 animate-in fade-in duration-150">
                  <span>{item.name}</span>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
