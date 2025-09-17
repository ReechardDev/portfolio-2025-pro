// app/(site)/contact/page.jsx
import SectionHeader from "../../../components/SectionHeader";
import { SITE } from "../../../lib/site";
import ButtonCTA from "../../../components/ui/ButtonCTA";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader
        eyebrow="Contact"
        title="Tell me about your project"
        text="Quickest way to get started: fill the intake form, then message me."
      />

      {/* Pre-form CTA row */}
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold text-slate-900">New client?</div>
          <p className="text-sm text-gray-600">
            Download the intake form, fill it out, and I’ll reply within 24 hours.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {/* Download (secondary, outline) */}
          <a
            href="/docs/client-intake-form.pdf"
            className="inline-flex items-center justify-center rounded-xl2 border border-gray-200 bg-white px-5 py-3 text-slate-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
            download
          >
            Download Intake Form
          </a>

          {/* WhatsApp (primary, navy → sky hover) */}
          <ButtonCTA
            as="a"
            href={SITE?.whatsappLink || "https://wa.me/233000000000"}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Me
          </ButtonCTA>

          {/* Optional booking link (secondary, outline) */}
          <a
            href={SITE?.bookingLink || "https://cal.com/yourname/intro"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl2 border border-gray-200 bg-white px-5 py-3 text-slate-900 transition hover:border-brand-cta-hover hover:text-brand-cta-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
          >
            Book a 15-min call →
          </a>
        </div>
      </div>

      {/* Response-time note */}
      <p className="mt-3 text-xs text-slate-500">I reply within 24–48 hours.</p>

      {/* Your existing contact content / form goes here */}
      {/* Keep your current form/sections exactly as-is below this line. */}
    </main>
  );
}
