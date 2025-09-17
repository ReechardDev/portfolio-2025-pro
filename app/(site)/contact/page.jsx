import Link from "next/link";
import SectionHeader from "../../../components/SectionHeader";
import { SITE } from "../../../lib/site";
import ButtonCTA from "../../../components/ui/ButtonCTA";
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader
        eyebrow="Contact"
        title="Tell me about your project"
        text="Quickest way to get started: fill the intake form, then message me."
      />

      {/* Pre-form CTA row */}
      <div className="mt-6 rounded-2xl border border-gray-200 p-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div>
          <div className="font-semibold">New client?</div>
          <p className="text-sm text-gray-600">
            Download the intake form, fill it out, and I’ll reply within 24 hours.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="/docs/client-intake-form.pdf"
            className="inline-flex items-center justify-center rounded-xl2 border border-gray-200 px-5 py-3 hover:bg-gray-50"
            download
          >
            Download Intake Form
          </a>
          <a
            href={SITE?.whatsappLink || "https://wa.me/233000000000"}
            className="inline-flex items-center justify-center rounded-xl2 bg-brand text-white px-5 py-3 hover:opacity-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Me
          </a>
        </div>
      </div>

      {/* Your existing contact content / form goes here */}
      {/* ... keep your current form/sections exactly as-is ... */}
    </div>
  );
}
