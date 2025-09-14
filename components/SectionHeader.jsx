export default function SectionHeader({ eyebrow, title, text, align = "center" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <div className="text-brand font-semibold uppercase tracking-wider text-xs">{eyebrow}</div>}
      <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      {text && <p className="mt-2 text-gray-600">{text}</p>}
    </div>
  );
}
