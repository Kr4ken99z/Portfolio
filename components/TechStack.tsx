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
    <section className="py-12 md:py-16 border-b border-outline-variant/30" id="stack">
      {/* Title Header */}
      <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest font-semibold mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-text-muted inline-block"></span>
        <span>TECH STACK</span>
      </h2>

      {/* Clean Continuous Flex Wrap (No Empty Gaps) */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {ALL_TECH.map((item) => (
          <div
            key={item.name}
            onMouseEnter={() => setHoveredTech(item.name)}
            onMouseLeave={() => setHoveredTech(null)}
            className="relative flex items-center justify-center p-1.5 rounded-lg transition-transform duration-200 hover:scale-110 hover:-translate-y-1 cursor-pointer group"
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
    </section>
  );
}
