// components/SkillPills.jsx
export default function SkillPills({ skills = [] }) {
  if (!Array.isArray(skills) || skills.length === 0) return null;

  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
      {skills.map((s) => (
        <li
          key={s}
          className="rounded-full border border-brand-cta-hover bg-sky-50 px-3 py-1.5
                     text-xs text-slate-900 transition hover:bg-sky-100"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}
