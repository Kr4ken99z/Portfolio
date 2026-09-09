"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface HyperTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: "span" | "div" | "h1" | "h2" | "h3";
  animateOnHover?: boolean;
  animateOnLeave?: boolean;
  startOnMount?: boolean;
  trigger?: boolean;
}

const DEFAULT_CHARSET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

export default function HyperText({
  text,
  className = "",
  duration = 450,
  delay = 0,
  as: Component = "span",
  animateOnHover = true,
  animateOnLeave = false,
  startOnMount = false,
  trigger,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState<string[]>(() => text.split(""));
  const animRef = useRef<number | null>(null);
  const isRunningRef = useRef(false);

  // Core animation runner: guaranteed to end on the actual text
  const runScramble = useCallback(() => {
    if (animRef.current !== null) {
      cancelAnimationFrame(animRef.current);
    }
    isRunningRef.current = true;

    const length = text.length;
    const startTime = performance.now();

    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const revealedCount = Math.floor(progress * length);

      const next = text.split("").map((char, i) => {
        if (char === " ") return " ";
        if (i < revealedCount || progress >= 1) return text[i];
        return DEFAULT_CHARSET[Math.floor(Math.random() * DEFAULT_CHARSET.length)];
      });

      setDisplayText(next);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(frame);
      } else {
        setDisplayText(text.split(""));
        isRunningRef.current = false;
        animRef.current = null;
      }
    };

    animRef.current = requestAnimationFrame(frame);
  }, [text, duration]);

  // Synchronize with text prop changes
  useEffect(() => {
    if (animRef.current !== null) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
      isRunningRef.current = false;
    }
    setDisplayText(text.split(""));
  }, [text]);

  // Handle trigger prop changes (e.g., when logo or name hovered/unhovered)
  const prevTrigger = useRef(trigger);
  useEffect(() => {
    if (trigger !== undefined) {
      if (prevTrigger.current !== undefined && trigger !== prevTrigger.current) {
        // Runs on both mouse enter (false -> true) and mouse leave (true -> false)
        runScramble();
      } else if (prevTrigger.current === undefined && trigger) {
        runScramble();
      }
      prevTrigger.current = trigger;
    }
  }, [trigger, runScramble]);

  // Handle startOnMount
  useEffect(() => {
    if (startOnMount) {
      const t = setTimeout(() => {
        runScramble();
      }, delay);
      return () => clearTimeout(t);
    }
  }, [startOnMount, delay, runScramble]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animRef.current !== null) {
        cancelAnimationFrame(animRef.current);
        animRef.current = null;
        isRunningRef.current = false;
      }
    };
  }, []);

  const handleMouseEnter = () => {
    // Only self-trigger if animateOnHover is enabled AND not externally driven by trigger
    if (animateOnHover && trigger === undefined) {
      runScramble();
    }
  };

  const handleMouseLeave = () => {
    // Self-trigger on mouse leave if animateOnLeave is enabled AND not externally driven by trigger
    if (animateOnLeave && trigger === undefined) {
      runScramble();
    }
  };

  return (
    <Component
      className={`inline-flex overflow-hidden cursor-default select-none ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText.map((char, idx) => (
        <span
          key={idx}
          className={`font-mono inline-block ${
            char === " " ? "w-[0.3em]" : ""
          }`}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}
