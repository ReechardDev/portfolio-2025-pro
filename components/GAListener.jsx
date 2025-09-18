"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview, track } from "../lib/ga";

export default function GAListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Pageviews on route changes
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    pageview(url);
  }, [pathname, searchParams]);

  // Smart click tracking (no markup changes needed)
  useEffect(() => {
    const handler = (e) => {
      const el = e.target.closest("a, button, [data-ga]");
      if (!el) return;

      // Custom data attribute wins
      const customAction = el.getAttribute("data-ga");
      const label =
        el.getAttribute("data-ga-label") ||
        el.getAttribute("aria-label") ||
        el.textContent?.trim() ||
        el.getAttribute("href") ||
        "click";

      if (customAction) {
        track(customAction, { label });
        return;
      }

      // Otherwise infer intent for anchors
      if (el.tagName === "A") {
        const href = el.getAttribute("href") || "";
        const isDownload =
          el.hasAttribute("download") ||
          /\.(pdf|csv|zip|docx?|xlsx?)$/i.test(href);
        const isExternal =
          /^https?:\/\//i.test(href) && !href.includes(location.hostname);

        if (/wa\.me|whatsapp/i.test(href)) {
          track("contact_click", { method: "whatsapp", label: href });
        } else if (href.startsWith("mailto:")) {
          track("contact_click", { method: "email", label: href });
        } else if (isDownload) {
          track("resource_download", { label: href });
        } else if (isExternal) {
          track("outbound_click", { label: href });
        }
      }
    };

    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return null;
}
