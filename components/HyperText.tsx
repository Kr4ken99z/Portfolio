"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface HyperTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: "span" | "div" | "h1" | "h2" | "h3";
  animateOnHover?: boolean;
  startOnMount?: boolean;
  trigger?: boolean;
}

const DEFAULT_CHARSET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

export default function HyperText({
  text,
  className = "",
  duration = 600,
  delay = 0,
  as: Component = "span",
  animateOnHover = true,
  startOnMount = false,
  trigger,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState<string[]>(() => text.split(""));
  const [isAnimating, setIsAnimating] = useState(false);
  const iterations = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  const startAnimation = useCallback(() => {
    if (isAnimating) return;
    iterations.current = 0;
    setIsAnimating(true);
  }, [isAnimating]);

  // Initial trigger on mount if requested
  useEffect(() => {
    if (startOnMount) {
      const timer = setTimeout(() => {
        startAnimation();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [startOnMount, delay, startAnimation]);

  // External trigger (e.g. parent card hover)
  useEffect(() => {
    if (trigger !== undefined && trigger) {
      startAnimation();
    }
  }, [trigger, startAnimation]);

  // When text changes
  useEffect(() => {
    setDisplayText(text.split(""));
  }, [text]);

  // Scramble animation loop
  useEffect(() => {
    if (!isAnimating) return;

    const length = text.length;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      iterations.current = progress * length;

      const nextChars = text.split("").map((char, index) => {
        if (char === " ") return " ";
        if (index <= iterations.current) {
          return text[index];
        }
        return DEFAULT_CHARSET[Math.floor(Math.random() * DEFAULT_CHARSET.length)];
      });
      setDisplayText(nextChars);

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(text.split(""));
        setIsAnimating(false);
      }
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isAnimating, text, duration]);

  const handleMouseEnter = () => {
    if (animateOnHover && !isAnimating) {
      startAnimation();
    }
  };

  return (
    <Component
      className={`inline-flex overflow-hidden cursor-default select-none ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayText.map((char, idx) => (
        <span
          key={idx}
          className={`font-mono transition-colors duration-75 inline-block ${
            char === " " ? "w-[0.3em]" : ""
          }`}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}
