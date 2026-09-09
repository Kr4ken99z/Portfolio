"use client";

import { useState, useEffect, useCallback } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const EMAIL_ADDRESS = PERSONAL_INFO.email || "koustavmondal9641@gmail.com";
export const GMAIL_WEB_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&to=${EMAIL_ADDRESS}`;
export const MAILTO_URL = `mailto:${EMAIL_ADDRESS}`;

/**
 * Accurately detects whether the current client is a mobile or tablet device
 * across Android, iOS (including iPadOS), and other mobile platforms.
 */
export function isMobileDevice(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false;
  }
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera || "";
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua);
  const isTouchMac = /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1; // iPad Pro detection
  return Boolean(isMobileUA || isTouchMac);
}

/**
 * Handles sending email with device awareness:
 * - Desktop: Opens web-based Gmail Compose in a new browser tab.
 * - Mobile: Triggers device email handler / Gmail app via mailto:,
 *   with a fallback to Gmail web Compose if no email app is available.
 */
export function openEmail(e?: React.MouseEvent) {
  const isMobile = isMobileDevice();

  if (!isMobile) {
    if (e) {
      e.preventDefault();
    }
    window.open(GMAIL_WEB_COMPOSE_URL, "_blank", "noopener,noreferrer");
    return;
  }

  // On Mobile:
  // If the event came from an anchor whose href is already mailto:,
  // letting native navigation proceed is the cleanest way to launch the OS email app without popup blocks.
  // If triggered programmatically (e.g. Command Palette), set window.location.href.
  const isDirectMailtoLink =
    e?.currentTarget &&
    (e.currentTarget as HTMLAnchorElement).getAttribute?.("href")?.startsWith("mailto:");

  if (!isDirectMailtoLink) {
    if (e) {
      e.preventDefault();
    }
    window.location.href = MAILTO_URL;
  }

  // Graceful fallback for mobile:
  // If the device has no mail app installed, the page will remain visible and focused.
  // If an email app opens, the browser blurs or enters the background (document.hidden = true).
  const startTime = Date.now();
  let appOpened = false;

  const markOpened = () => {
    appOpened = true;
  };

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      appOpened = true;
    }
  }, { once: true });
  window.addEventListener("blur", markOpened, { once: true });
  window.addEventListener("pagehide", markOpened, { once: true });

  setTimeout(() => {
    window.removeEventListener("blur", markOpened);
    window.removeEventListener("pagehide", markOpened);
    const elapsed = Date.now() - startTime;

    // If document is still visible, blur did not fire, and timeout executed without background pause (< 2500ms)
    if (!appOpened && !document.hidden && elapsed < 2500) {
      window.location.href = GMAIL_WEB_COMPOSE_URL;
    }
  }, 1500);
}

/**
 * Custom hook providing device-aware link attributes and click handler.
 */
export function useEmailLink() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    openEmail(e);
  }, []);

  return {
    href: isMobile ? MAILTO_URL : GMAIL_WEB_COMPOSE_URL,
    target: isMobile ? undefined : "_blank",
    rel: isMobile ? undefined : "noopener noreferrer",
    onClick: handleClick,
    isMobile,
  };
}
