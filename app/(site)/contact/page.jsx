// app/(site)/contact/page.jsx
import SectionHeader from "../../../components/SectionHeader";
import { SITE } from "../../../lib/site";
import ButtonCTA from "../../../components/ui/ButtonCTA";
import ContactForm from "../../../components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Tell me about your project. I reply within 24–48 hours.",
};

export default function ContactPage() {
  const EMAIL = SITE?.email || "inemesitdavid90@gmail.com";
  const PHONE_DISPLAY = SITE?.phoneDisplay || "+233 05956-33424";
  const WHATSAPP = SITE?.whatsappLink || "https://wa.me/233000000000";
  const LINKEDIN = SITE?.linkedin || "#";
  const GITHUB = SITE?.github || "https://github.com/ReechardDev";
  const X_TWITTER = SITE?.twitter || "#";

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader
        eyebrow="Contact"
        title="Tell me about your project"
        text="Quickest way to get started: fill the intake form, then message me."
      />

      {/* Pre-form CTA row (solid light blue + matching border) */}
      <div className="mt-6 rounded-2xl border border-brand-cta-hover bg-sky-50 p-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold text-slate-900">New client?</div>
          <p className="text-sm text-gray-600">
            Download the intake form, fill it out, and I’ll reply within 24 hours.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="/docs/client-intake-form.pdf"
            download
            className="inline-flex items-center justify-center rounded-xl2 border border-gray-200 bg-white px-5 py-3 text-slate-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
          >
            Download Intake Form
          </a>

          <ButtonCTA
            as="a"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            data-ga="contact_click"
            data-ga-label="whatsapp_cta"
          >
            WhatsApp Me
          </ButtonCTA>

          <a
            href={SITE?.bookingLink || "https://cal.com/yourname/intro"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl2 border border-gray-200 bg-white px-5 py-3 text-slate-900 transition hover:border-brand-cta-hover hover:text-brand-cta-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
            data-ga="cta_click"
            data-ga-label="book_15min"
          >
            Book a 15-min call →
          </a>
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-500">I reply within 24–48 hours.</p>

      {/* Email form + Social links */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <ContactForm />

        <div className="rounded-2xl border border-brand-cta-hover bg-sky-50 p-6 shadow-sm hover-card">
          <div className="text-lg font-medium text-slate-900">Other ways</div>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex gap-2">
              <dt className="text-slate-500 w-20">Email</dt>
              <dd>
                <a
                  href={`mailto:${EMAIL}`}
                  className="underline underline-offset-4 decoration-gray-300 hover:decoration-2"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-slate-500 w-20">Phone</dt>
              <dd className="text-slate-700">{PHONE_DISPLAY}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-slate-500 w-20">WhatsApp</dt>
              <dd>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-gray-300 hover:decoration-2"
                >
                  Chat
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 rounded-xl2 border border-slate-200 bg-white px-5 py-3 text-slate-900 transition hover:border-brand-cta-hover hover:text-brand-cta-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
              data-ga="outbound_click"
              data-ga-label="linkedin"
            >
              LinkedIn
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 rounded-xl2 border border-slate-200 bg-white px-5 py-3 text-slate-900 transition hover:border-brand-cta-hover hover:text-brand-cta-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
              data-ga="outbound_click"
              data-ga-label="github"
            >
              GitHub
            </a>
            <a
              href={X_TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="inline-flex items-center gap-2 rounded-xl2 border border-slate-200 bg-white px-5 py-3 text-slate-900 transition hover:border-brand-cta-hover hover:text-brand-cta-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
              data-ga="outbound_click"
              data-ga-label="x"
            >
              X
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
