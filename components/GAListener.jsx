// components/GAListener.jsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview, track } from "../lib/ga";

export default function GAListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track route changes (including query changes)
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    pageview(url);
  }, [pathname, searchParams]);

  // Delegate click tracking for elements with data-ga / data-ga-label
  useEffect(() => {
    const handler = (e) => {
      const el = e.target.closest("[data-ga]");
      if (!el) return;
      const action = el.getAttribute("data-ga") || "cta_click";
      const label =
        el.getAttribute("data-ga-label") ||
        el.getAttribute("aria-label") ||
        el.textContent?.trim() ||
        undefined;
      track(action, { label });
    };
    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
