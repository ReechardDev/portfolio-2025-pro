// lib/wallpapers.js
// Add new items here and drop matching files in /public/wallpapers
export const WALLPAPERS = [
  {
    slug: "blue-waves",
    title: "Blue Waves",
    src: "/wallpapers/blue-waves.jpg",
    tags: ["Abstract", "Minimal"],
  },
  {
    slug: "sunset-grid",
    title: "Sunset Grid",
    src: "/wallpapers/sunset-grid.jpg",
    tags: ["Gradient", "Calm"],
  },
  {
    slug: "lines-soft",
    title: "Soft Lines",
    src: "/wallpapers/lines-soft.jpg",
    tags: ["Pattern", "Clean"],
  },
];

// Optional: small helper for tag filters later
export function allTags() {
  const t = new Set();
  WALLPAPERS.forEach(w => (w.tags || []).forEach(tag => t.add(tag)));
  return Array.from(t).sort();
}
