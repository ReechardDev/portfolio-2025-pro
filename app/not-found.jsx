export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you’re looking for doesn’t exist or has moved.</p>
      <a href="/" className="mt-6 inline-flex rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-slate-50">
        Go home
      </a>
    </main>
  );
}
