// components/ui/ButtonCTA.jsx
export default function ButtonCTA({ as: As = "a", className = "", ...props }) {
  const cls = [
    "inline-flex items-center justify-center gap-2 rounded-xl2 px-5 py-3",
    "font-medium text-white transition",
    // keep layout identical; add a transparent border so hover color doesn't shift layout
    "border border-transparent",
    // your brand tokens; same 'feel' as case studies (uses brand-cta-hover)
    "bg-brand-cta hover:bg-brand-cta-hover hover:border-brand-cta-hover",
    // existing focus ring
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand",
    className,
  ].join(" ");

  return <As className={cls} {...props} />;
}
