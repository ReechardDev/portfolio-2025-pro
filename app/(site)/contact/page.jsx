// app/(site)/contact/page.jsx
import Link from "next/link";
import SectionHeader from "../../../components/SectionHeader";
import ButtonCTA from "../../../components/ui/ButtonCTA";
import ContactForm from "../../../components/ContactForm";
import { Mail, Phone, MessageCircle, Instagram, Linkedin, Github } from "lucide-react";
import { SITE } from "../../../lib/site"; // ← FIX: use SITE (not SITE2)

export const metadata = {
  title: "Contact",
  description: "Tell me about your project. I reply within 24 to 48 hours.",
};

export default function ContactPage() {
  // Config + safe fallbacks
  const EMAIL = SITE?.email || "inemesitdavid90@gmail.com";
  const PHONE_DISPLAY = SITE?.phoneDisplay || "+233 5956-33424";
  const PHONE_RAW = SITE?.phone || "+2330595633424";
  const telHref = `tel:${(PHONE_RAW || PHONE_DISPLAY).replace(/[^\d+]/g, "")}`;
  const WHATSAPP = SITE?.whatsappLink || "https://wa.me/+233595633424";
  const LINKEDIN = SITE?.linkedin || "#";
  const GITHUB = SITE?.github || "https://github.com/ReechardDev";
  const INSTAGRAM = SITE?.instagram || "#";
  const INTAKE_FORM = "/files/intake-form.pdf"; // swap to your actual path
  const BOOK_LINK = SITE?.bookLink || "https://cal.com/"; // swap to your booking link

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader
        eyebrow="Contact"
        title="Tell me about your project"
        text="Quickest way to get started: fill the intake form, then message me."
      />

      {/* Breathing space between title and grid */}
      <div className="mt-6" />

      {/* Unified two-column section (stacks on mobile) */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Left: compact form */}
        <div className="rounded-2xl border border-brand-cta-hover bg-sky-50 p-5 md:p-6">
          <div className="mb-3 text-sm text-slate-600">I reply within 24 to 48 hours.</div>
          <ContactForm />
          <p className="mt-3 text-xs text-slate-500">
            Your message goes straight to my inbox. I do not share your details.
          </p>
        </div>

        {/* Right: social / other ways with highlighted pills (reduced bottom spacing) */}
        <div className="rounded-2xl border border-brand-cta-hover bg-white p-5 md:p-6">
          <h3 className="text-base font-semibold">Other ways</h3>

          <dl className="mt-3 space-y-2 text-slate-700">
            <div>
              <dt className="text-sm text-slate-500">Email</dt>
              <dd>
                <a href={`mailto:${EMAIL}`} className="underline underline-offset-2">
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Phone</dt>
              <dd>
                <a href={telHref} className="underline underline-offset-2">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">WhatsApp</dt>
              <dd>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  Chat
                </a>
              </dd>
            </div>
          </dl>

          {/* Social pills (tight bottom spacing) */}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            <SocialPill href={`mailto:${EMAIL}`} label="Email">
              <Mail size={16} />
            </SocialPill>
            <SocialPill href={telHref} label="Call">
              <Phone size={16} />
            </SocialPill>
            <SocialPill href={WHATSAPP} label="WhatsApp" external dataGa="contact_whatsapp_pill">
              <MessageCircle size={16} />
            </SocialPill>
            <SocialPill href={INSTAGRAM} label="Instagram" external>
              <Instagram size={16} />
            </SocialPill>
            <SocialPill href={LINKEDIN} label="LinkedIn" external>
              <Linkedin size={16} />
            </SocialPill>
            <SocialPill href={GITHUB} label="GitHub" external>
              <Github size={16} />
            </SocialPill>
          </div>
        </div>
      </section>

      {/* Full-width CTA banner centered under both columns */}
      <section className="mt-6 rounded-2xl border border-brand-cta-hover bg-sky-50 p-4 md:p-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <ButtonCTA asChild>
            <Link
              href={INTAKE_FORM}
              target="_blank"
              rel="noopener noreferrer"
              data-ga="contact_download_intake"
              aria-label="Download intake form PDF"
            >
              Download Intake Form
            </Link>
          </ButtonCTA>

          <ButtonCTA asChild>
            <Link
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              data-ga="contact_whatsapp_click"
              aria-label="Chat on WhatsApp"
            >
              WhatsApp Me
            </Link>
          </ButtonCTA>

          <Link
            href={BOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-2xl border border-brand-cta-hover px-4 py-2 text-sm font-medium text-brand-cta-hover hover:bg-white"
            data-ga="contact_book_call"
            aria-label="Book a 15 minute call"
          >
            Book a 15 min call →
          </Link>
        </div>
      </section>
    </main>
  );
}

/** Highlighted pill button (uses brand token for border/text) */
function SocialPill({ href, label, children, external = false, dataGa }) {
  const common =
    "inline-flex items-center gap-1.5 rounded-full border border-brand-cta-hover px-3 py-1.5 text-sm text-brand-cta-hover hover:bg-sky-50";
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={common}
        data-ga={dataGa}
        aria-label={label}
      >
        {children}
        <span>{label}</span>
      </a>
    );
  }
  return (
    <a href={href} className={common} data-ga={dataGa} aria-label={label}>
      {children}
      <span>{label}</span>
    </a>
  );
}
