import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (

export const metadata = {
  title: "Inemesit David — Portfolio",
  description: "Conversion-focused websites in Next.js & Tailwind. Clear UX, on-page SEO, and measurable analytics.",
};


    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader eyebrow="Who I am" title="About" text="" />

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 p-6 bg-white">
          <p className="text-gray-700">
            I’m a web designer/developer and digital marketer who builds clean, conversion-ready
            websites with Next.js and Tailwind. I care about simple UX, clear copy, and measurable
            results. I’ve rebuilt service business sites (senior care, landscaping, Bread Store,
            Affiliate Marketing link site), created reusable design systems in Canva, and set up GA4
            tracking to see what actually moves the numbers. My process is: audit → structure the content
            → design components → wire analytics → ship and iterate.
          </p>
          <p className="mt-4 text-gray-700">
            I’m based in Accra and collaborate smoothly with U.S. teams (Denver). If you need a fast,
            focused site revamp or an MVP you can launch this week, let’s ship it.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6 bg-white">
          <h3 className="font-semibold">Hard Skills</h3>
          <p className="mt-2 text-sm text-gray-700">
            HTML · CSS · JavaScript · React · Next.js · TailwindCSS · shadcn/ui · Lucide Icons ·
            Vercel · Netlify · Git · GitHub · ESLint/Prettier · GA4 · GTM (basic) · On-page SEO ·
            Performance basics · Canva · Wireframes · Copywriting · Content Strategy · Excel (cert) ·
            A/B testing basics
          </p>

          <h3 className="mt-6 font-semibold">Soft Skills</h3>
          <p className="mt-2 text-sm text-gray-700">
            Client communication · Product thinking · Grit &amp; ownership · Documentation ·
            Collaboration · Learning agility
          </p>
        </div>
      </div>
    </section>
  );
}
