// app/not-found.jsx
export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-600">Try the Work page to see recent projects.</p>
      <a className="inline-block mt-6 underline" href="/work">Browse Work</a>
    </main>
  );
}
