// components/ui/ButtonCTA.jsx
export default function ButtonCTA({ as: As = "a", className = "", ...props }) {
  const cls =
    "inline-flex items-center justify-center gap-2 rounded-xl2 px-5 py-3 text-white transition " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand " +
    "bg-brand-cta hover:bg-brand-cta-hover " + className;
  return <As className={cls} {...props} />;
}