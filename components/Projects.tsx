"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ScrollReveal from "@/components/ScrollReveal";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <section className="py-12 md:py-18 border-b border-black/15 dark:border-outline-variant/30" id="projects">
      {/* Header */}
      <ScrollReveal>
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-text-muted inline-block"></span>
            <span>FEATURED PROJECTS</span>
          </h2>
          <span className="font-mono text-xs text-text-muted">
            0{PROJECTS.length} Selected
          </span>
        </div>
      </ScrollReveal>

      {/* 2-Column Clean Minimal Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visibleProjects.map((project: Project, index) => (
          <ScrollReveal
            key={project.id}
            delay={index * 0.08}
            duration={0.45}
            className="h-full"
          >
            <div
              className="group bg-surface-container-low border border-black/15 dark:border-outline-variant/40 hover:border-black/35 dark:hover:border-outline-variant rounded-xl p-4 sm:p-5 transition-all duration-150 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-none h-full"
            >
            <div className="flex flex-col gap-2">
              {/* Top Row: Category + Direct Action Links */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-text-muted font-medium">
                  0{index + 1} // {project.category}
                </span>

                <div className="flex items-center gap-2">
                  {project.liveUrl && project.liveUrl !== "#" && project.liveUrl !== "" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      aria-label={`Open ${project.title} live demo`}
                      className="text-on-surface-variant hover:text-on-surface transition-colors p-0.5"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  {project.githubUrl && project.githubUrl !== "" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Repository"
                      aria-label={`View ${project.title} source code`}
                      className="text-on-surface-variant hover:text-on-surface transition-colors p-0.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.statusBadge ? (
                    <span className="font-mono text-[10px] text-text-muted px-1.5 py-0.5 rounded bg-surface-container border border-black/15 dark:border-outline-variant/40">
                      {project.statusBadge}
                    </span>
                  ) : !project.liveUrl && !project.githubUrl ? (
                    <span className="font-mono text-[10px] text-text-muted px-1.5 py-0.5 rounded bg-surface-container border border-black/15 dark:border-outline-variant/40">
                      Offline
                    </span>
                  ) : null}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-sm sm:text-[15px] font-semibold text-primary group-hover:text-primary-tint transition-colors tracking-tight">
                {project.title}
              </h3>

              {/* Concise Description */}
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Bottom Tech Tags */}
            <div className="pt-3 mt-3 border-t border-black/10 dark:border-outline-variant/30 flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-text-muted">
              {project.tags.map((tag, idx) => (
                <span key={tag} className="flex items-center gap-1.5">
                  <span className="text-on-surface-variant">{tag}</span>
                  {idx < project.tags.length - 1 && (
                    <span className="text-outline-variant select-none">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
        ))}
      </div>

      {/* Show more projects toggle */}
      {PROJECTS.length > 4 && (
        <ScrollReveal delay={0.1} className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 rounded-lg bg-surface-container-low border border-black/15 dark:border-outline-variant/60 hover:border-black/35 dark:hover:border-outline-variant text-on-surface font-mono text-xs hover:text-white transition-all flex items-center gap-2 active:scale-95 group shadow-sm"
          >
            <span>{showAll ? "Show less projects" : "Show more projects"}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-on-surface-variant group-hover:text-white transition-transform duration-200 ${
                showAll ? "rotate-180" : "group-hover:translate-y-0.5"
              }`}
            />
          </button>
        </ScrollReveal>
      )}

      {/* Minimalist Underlined Link (exactly matching user's screenshot) */}
      <ScrollReveal delay={0.15} className="mt-8 pt-2">
        <a
          href="https://github.com/Kr4ken99z?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs sm:text-sm text-on-surface-variant hover:text-on-surface underline underline-offset-4 transition-colors inline-flex items-center gap-1"
        >
          <span>Show all projects</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </ScrollReveal>
    </section>
  );
}
