// components/ui/ButtonCTA.jsx
"use client";

import { track } from "../../lib/ga";

export default function ButtonCTA({ as: As = "a", className = "", onClick, ...props }) {
  const cls =
    "inline-flex items-center justify-center gap-2 rounded-xl2 px-5 py-3 text-white transition " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand " +
    "bg-brand-cta hover:bg-brand-cta-hover " + className;

  const handleClick = (e) => {
    // Fire a generic CTA event unless caller provides their own handler
    try {
      const label =
        props["data-ga-label"] ||
        (typeof props.children === "string" ? props.children : props.href) ||
        "cta";
      track("cta_click", { label });
    } catch {}
    onClick?.(e);
  };

  return <As className={cls} onClick={handleClick} {...props} />;
}
