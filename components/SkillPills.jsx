// components/SkillPills.jsx
export default function SkillPills({ skills = [] }) {
  if (!Array.isArray(skills) || skills.length === 0) return null;

  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
      {skills.map((s) => (
        <li
          key={s}
          className="rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs text-slate-700
                     transition hover:bg-sky-50 hover:border-brand-cta-hover hover:text-slate-900"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}
