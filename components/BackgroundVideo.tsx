"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const playVideo = () => {
      const video = videoRef.current;
      if (video) {
        video.muted = true;
        video.defaultMuted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay restricted until user interaction
          });
        }
      }
    };

    playVideo();

    // In case browser requires user gesture, play on first interaction
    const handleFirstInteraction = () => {
      playVideo();
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { passive: true });
    window.addEventListener("touchstart", handleFirstInteraction, { passive: true });
    window.addEventListener("scroll", handleFirstInteraction, { passive: true });
    window.addEventListener("keydown", handleFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [mounted]);

  return (
    <>
      {/* Background Video matching LocalX */}
      {mounted && (
        <video
          ref={(el) => {
            videoRef.current = el;
            if (el) {
              el.muted = true;
              el.defaultMuted = true;
              el.play().catch(() => {});
            }
          }}
          className="page-bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          suppressHydrationWarning
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      )}

      {/* Radial Gradient Overlay matching LocalX */}
      <div className="page-video-overlay" />
    </>
  );
}
