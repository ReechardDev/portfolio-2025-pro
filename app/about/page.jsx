export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="mt-4 text-gray-700">
        I’m Inemesit David — a product‑minded web developer based in Accra. I care about building
        clean, accessible, high‑performing websites that actually move business metrics.
      </p>
      <p className="mt-3 text-gray-700">
        Tooling: Next.js, Tailwind, shadcn/ui, GA4, Vercel, and a11y best practices.
      </p>
    </section>
  );
}
