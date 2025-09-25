// lib/ga.js
export const GA_TRACKING_ID = "G-Q9CMCQCW0C";

const isBrowser = typeof window !== "undefined";
const canTrack = () => isBrowser && typeof window.gtag === "function";

// Pageview on route change
export function pageview(url) {
  if (!canTrack()) return;
  window.gtag("config", GA_TRACKING_ID, { page_path: url });
}

// Generic event tracker
export function track(action, params = {}) {
  if (!canTrack()) return;
  // Recommended GA4 event shape
  window.gtag("event", action, {
    ...params,
    // Normalize common fields
    event_category: params.category || "engagement",
    event_label: params.label,
    value: params.value,
  });
}
