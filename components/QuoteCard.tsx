"use client";

import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface QuoteItem {
  quote: string;
  author: string;
}

const QUOTES: QuoteItem[] = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson & Gerald Jay Sussman",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
  {
    quote: "The computer is a bicycle for the mind.",
    author: "Steve Jobs",
  },
];

export default function QuoteCard() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Randomize quote on page load
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setIndex(randomIndex);
  }, []);

  const currentQuote = QUOTES[index];

  return (
    <div className="py-10 border-b border-black/15 dark:border-outline-variant/30 flex items-center justify-center">
      <ScrollReveal delay={0.1} className="w-full">
        <div className="w-full p-5 sm:p-6 rounded-2xl bg-surface-container-low border border-black/15 dark:border-outline-variant/40 hover:border-black/35 dark:hover:border-outline-variant transition-all duration-150 shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-none relative group">
        <div className="flex items-start gap-3 min-w-0">
          <span className="font-mono text-text-muted text-base select-none mt-0.5 shrink-0">
            “
          </span>
          <div>
            <p
              className="font-mono text-xs sm:text-sm text-on-surface leading-relaxed"
              suppressHydrationWarning
            >
              {mounted ? currentQuote.quote : QUOTES[0].quote}
            </p>
            <p
              className="font-mono text-[11px] text-text-muted mt-2 flex items-center gap-1.5"
              suppressHydrationWarning
            >
              <span>—</span>
              <span className="text-on-surface font-medium">
                {mounted ? currentQuote.author : QUOTES[0].author}
              </span>
            </p>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </div>
  );
}
