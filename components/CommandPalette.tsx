"use client";

import { useEffect, useState, useRef } from "react";
import {
  ArrowUpRight,
  Check,
  Code,
  Copy,
  ExternalLink,
  FileText,
  FolderGit2,
  GraduationCap,
  Layers,
  Mail,
  Search,
  Send,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import confetti from "canvas-confetti";

interface CommandItem {
  id: string;
  category: "Email & Connect" | "Navigation" | "Links";
  title: string;
  subtitle: string;
  icon: any;
  action: () => void;
  shortcut?: string;
  isExternal?: boolean;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    setIsMac(typeof navigator !== "undefined" && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setIsAtFooter(scrollPosition >= documentHeight - 240);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle palette on Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // Close on Escape
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchQuery("");
    }
  }, [isOpen]);

  if (!mounted) return null;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      try {
        confetti({
          particleCount: 30,
          spread: 45,
          origin: { y: 0.8 },
          colors: ["#FFFFFF", "#D4D4D8", "#A1A1AA"],
        });
      } catch {}
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const commands: CommandItem[] = [
    {
      id: "gmail-email",
      category: "Email & Connect",
      title: "Direct Email (Gmail)",
      subtitle: `Open Gmail compose for ${PERSONAL_INFO.email}`,
      icon: Mail,
      action: () => {
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            PERSONAL_INFO.email
          )}`,
          "_blank",
          "noopener,noreferrer"
        );
        setIsOpen(false);
      },
      shortcut: "↵",
      isExternal: true,
    },
    {
      id: "copy-email",
      category: "Email & Connect",
      title: copied ? "Email Copied!" : "Copy Email Address",
      subtitle: PERSONAL_INFO.email,
      icon: copied ? Check : Copy,
      action: copyEmail,
    },
    {
      id: "nav-about",
      category: "Navigation",
      title: "About Koustav",
      subtitle: "Background, core competencies, and engineering ethos",
      icon: Sparkles,
      action: () => {
        setIsOpen(false);
        window.dispatchEvent(new CustomEvent("open-about"));
      },
    },
    {
      id: "nav-projects",
      category: "Navigation",
      title: "Featured Projects",
      subtitle: "Jump to engineered works and case studies",
      icon: FolderGit2,
      action: () => scrollToSection("projects"),
    },
    {
      id: "nav-stack",
      category: "Navigation",
      title: "Tech Stack",
      subtitle: "Languages, frameworks, and developer tools",
      icon: Layers,
      action: () => scrollToSection("stack"),
    },
    {
      id: "nav-education",
      category: "Navigation",
      title: "Education & Certifications",
      subtitle: "B.Tech ECE, coursework, and credentials",
      icon: GraduationCap,
      action: () => scrollToSection("education"),
    },
    {
      id: "nav-contact",
      category: "Navigation",
      title: "Contact Section",
      subtitle: "Send a direct message or connect",
      icon: Mail,
      action: () => scrollToSection("contact"),
    },
    {
      id: "action-theme",
      category: "Navigation",
      title: "Toggle Theme (Light / Dark)",
      subtitle: "Switch between pure black dark mode and clean light mode",
      icon: Sun,
      action: () => {
        const isDark = document.documentElement.classList.contains("dark");
        if (isDark) {
          document.documentElement.classList.remove("dark");
          document.documentElement.style.colorScheme = "light";
          document.documentElement.style.backgroundColor = "#FFFFFF";
          try {
            localStorage.setItem("theme", "light");
          } catch (e) {}
          const meta = document.querySelector('meta[name="theme-color"]');
          if (meta) meta.setAttribute("content", "#FFFFFF");
        } else {
          document.documentElement.classList.add("dark");
          document.documentElement.style.colorScheme = "dark";
          document.documentElement.style.backgroundColor = "#000000";
          try {
            localStorage.setItem("theme", "dark");
          } catch (e) {}
          const meta = document.querySelector('meta[name="theme-color"]');
          if (meta) meta.setAttribute("content", "#000000");
        }
        setIsOpen(false);
      },
    },
    {
      id: "link-resume",
      category: "Links",
      title: "View Resume",
      subtitle: "Open Koustav's latest resume (PDF)",
      icon: FileText,
      action: () => {
        window.open("/resume.pdf", "_blank", "noopener,noreferrer");
        setIsOpen(false);
      },
      isExternal: true,
    },
    {
      id: "link-github",
      category: "Links",
      title: "GitHub Profile",
      subtitle: "github.com/Kr4ken99z",
      icon: Code,
      action: () => {
        window.open(PERSONAL_INFO.socials.github, "_blank", "noopener,noreferrer");
        setIsOpen(false);
      },
      isExternal: true,
    },
    {
      id: "link-linkedin",
      category: "Links",
      title: "LinkedIn Profile",
      subtitle: "linkedin.com/in/koustav07",
      icon: ExternalLink,
      action: () => {
        window.open(PERSONAL_INFO.socials.linkedin, "_blank", "noopener,noreferrer");
        setIsOpen(false);
      },
      isExternal: true,
    },
    {
      id: "link-x",
      category: "Links",
      title: "X / Twitter",
      subtitle: "x.com/devkoustav",
      icon: ExternalLink,
      action: () => {
        window.open(PERSONAL_INFO.socials.x, "_blank", "noopener,noreferrer");
        setIsOpen(false);
      },
      isExternal: true,
    },
    {
      id: "action-uma",
      category: "Links",
      title: "Ask UMA (AI Assistant)",
      subtitle: "Instant interactive answers about Koustav's work & skills",
      icon: Sparkles,
      action: () => {
        setIsOpen(false);
        window.dispatchEvent(new CustomEvent("open-uma"));
      },
    },
  ];

  const filteredCommands = commands.filter(
    (c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Floating Bottom-Right Trigger Dock */}
      <div
        className={`fixed bottom-5 right-5 z-40 select-none flex items-center gap-2 transition-all duration-300 ${
          isAtFooter ? "translate-y-16 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      >
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent("open-uma"))}
          className="group flex items-center gap-2 px-3 py-2 rounded-full bg-surface-container-low/95 backdrop-blur-md border border-black/15 dark:border-outline-variant/60 hover:border-primary text-on-surface shadow-2xl transition-all duration-200 active:scale-95 cursor-pointer"
          aria-label="Ask UMA AI Assistant"
          title="Ask UMA (AI Portfolio Assistant)"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-mono text-xs text-on-surface font-medium">Ask UMA</span>
        </button>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-container-low/95 backdrop-blur-md border border-black/15 dark:border-outline-variant/60 hover:border-outline text-on-surface shadow-2xl transition-all duration-200 active:scale-95 cursor-pointer"
          aria-label="Open Command Palette"
          title="Open Contact / Command Palette (Ctrl+K)"
        >
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="font-mono text-xs text-on-surface font-medium">Contact</span>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-outline-variant/60 bg-surface-container font-mono text-[10px] text-text-muted group-hover:text-on-surface group-hover:border-outline-variant transition-colors">
            <span>{isMac ? "⌘" : "Ctrl"}</span>
            <span>K</span>
          </kbd>
        </button>
      </div>

      {/* Command Palette Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-background/70 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-surface-container-low border border-outline-variant/70 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-outline-variant/50">
              <Search className="w-4 h-4 text-on-surface-variant shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type a command or search actions..."
                className="w-full bg-transparent text-sm text-on-surface placeholder:text-text-muted/60 focus:outline-none font-mono"
              />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-text-muted hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
                aria-label="Close Command Palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List of Results */}
            <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-outline-variant/20">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center font-mono text-xs text-text-muted">
                  No commands found matching "{searchQuery}"
                </div>
              ) : (
                <div className="py-1">
                  {filteredCommands.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={item.action}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-surface-container hover:text-white transition-colors text-left group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-surface-container border border-outline-variant/50 flex items-center justify-center shrink-0 group-hover:border-outline text-text-muted group-hover:text-white transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-mono text-xs sm:text-[13px] font-medium text-on-surface group-hover:text-white truncate">
                              {item.title}
                            </p>
                            <p className="font-mono text-[11px] text-text-muted truncate">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="shrink-0 flex items-center gap-1.5 ml-2">
                          {item.isExternal && (
                            <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-white" />
                          )}
                          {item.shortcut && (
                            <span className="font-mono text-[10px] text-text-muted px-1.5 py-0.5 rounded bg-surface-container border border-outline-variant/40">
                              {item.shortcut}
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer Tip Bar */}
            <div className="px-4 py-2 bg-surface-container/60 border-t border-outline-variant/40 flex items-center justify-between text-[11px] font-mono text-text-muted">
              <span>Navigate or click any action</span>
              <kbd className="px-1 py-0.5 rounded bg-surface-container border border-outline-variant/50 text-[10px]">
                ESC to close
              </kbd>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
