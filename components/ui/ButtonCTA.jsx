"use client";

import Link from "next/link";
import { useCallback } from "react";

export default function ButtonCTA({
  href = "#",
  label,
  children,              // backward compatible
  variant = "primary",   // "primary" | "ghost"
  className = "",
  target,
  rel,
  prefetch = true,

  // GA4 (strings only — safe to pass from Server Components)
  gaEvent,               // e.g., "click", "download"
  gaCategory = "cta",    // default category
  gaLabel,               // e.g., "home_pitch_watch"
  ariaLabel,
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Primary: solid black → blue fill on hover (matches live site)
  // Ghost: blue outline → subtle blue fill on hover
  const styles =
    variant === "ghost"
      ? "border border-sky-300 text-sky-700 hover:bg-sky-50 focus:ring-sky-300"
      : "bg-gray-900 text-white hover:bg-sky-600 focus:ring-sky-300 active:bg-sky-700";

  const content = children ?? label ?? "Get started";

  const handleClick = useCallback(() => {
    if (gaEvent && typeof window !== "undefined") {
      window.gtag?.("event", gaEvent, {
        event_category: gaCategory,
        event_label: gaLabel,
      });
    }
  }, [gaEvent, gaCategory, gaLabel]);

  return (
    <Link
      href={href}
      prefetch={prefetch}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={`${base} ${styles} ${className}`}
    >
      {content}
    </Link>
  );
}
