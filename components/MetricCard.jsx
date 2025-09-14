export default function MetricCard({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-4">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
      {hint && <div className="text-xs text-gray-400 mt-1">{hint}</div>}
    </div>
  );
}
