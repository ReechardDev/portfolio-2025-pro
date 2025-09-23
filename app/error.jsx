"use client";
export default function Error({ error, reset }) {
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold text-slate-900">Something went wrong</h1>
      <p className="mt-3 text-slate-600">{error?.message || "Please try again."}</p>
      <button onClick={() => reset()} className="mt-6 inline-flex rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-slate-50">
        Try again
      </button>
    </main>
  );
}
