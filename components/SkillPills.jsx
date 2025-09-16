export default function SkillPills({ skills = [] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {skills.map((s) => (
        <span
          key={s}
          className="rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1 text-sm text-emerald-900/90 shadow-sm"
        >
          {s}
        </span>
      ))}
    </div>
  );
}
