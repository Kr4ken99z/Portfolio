"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse), disable on touchscreens
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setMounted(true);

    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    mousePos.current = { x: initialX, y: initialY };
    currentPos.current = { x: initialX, y: initialY };

    let rafId: number;
    const lerpFactor = 0.15; // Smooth interpolation speed

    const animate = () => {
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * lerpFactor;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'button, a, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor-hover]'
      );
      setIsHovered(!!interactive);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-[99999] rounded-full mix-blend-difference bg-white transition-[width,height,opacity,box-shadow] duration-200 ease-out will-change-transform ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${
        isHovered
          ? "w-7 h-7 -ml-3.5 -mt-3.5 shadow-[0_0_16px_rgba(255,255,255,0.35)]"
          : "w-2.5 h-2.5 -ml-[5px] -mt-[5px]"
      }`}
      style={{
        transform: `translate3d(-100px, -100px, 0)`,
      }}
    />
  );
}
