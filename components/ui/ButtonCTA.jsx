// components/ui/ButtonCTA.jsx
import Link from "next/link";

export default function ButtonCTA({
  href = "#",
  label,            // preferred
  children,         // backward-compatible
  variant = "primary", // "primary" | "ghost"
  className = "",
  target,
  rel,
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Primary: solid black base → blue fill on hover/focus
  // Ghost: blue outline → subtle blue fill on hover
  const styles =
    variant === "ghost"
      ? "border border-sky-300 text-sky-700 hover:bg-sky-50 focus:ring-sky-300"
      : "bg-gray-900 text-white hover:bg-sky-600 focus:ring-sky-300 active:bg-sky-700";

  const content = children ?? label ?? "Get started";

  return (
    <Link href={href} target={target} rel={rel} className={`${base} ${styles} ${className}`}>
      {content}
    </Link>
  );
}
