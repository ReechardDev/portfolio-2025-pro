import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader
        eyebrow="About"
        title="Website builder for service businesses"
        text=""
      />
      <div className="prose max-w-none">
        <p className="text-gray-700">
          I help service businesses—landscaping, salons, senior care, trades, and local shops—get
          websites that actually drive calls, WhatsApp chats, and bookings. My focus is simple:
          clear structure, trustworthy design, fast performance, and measurable results.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-5">
            <div className="font-semibold">Speed & Clarity</div>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li>Fast loads, solid Core Web Vitals</li>
              <li>Clean copy hierarchy</li>
              <li>Mobile-first layouts</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <div className="font-semibold">Lead Ready</div>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li>Sticky CTAs & forms</li>
              <li>WhatsApp & call click tracking</li>
              <li>SEO basics + OG polish</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <div className="font-semibold">Easy to Maintain</div>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li>Next.js + Tailwind stack</li>
              <li>Vercel hosting & previews</li>
              <li>Simple content updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
