// app/(site)/contact/page.jsx
import Link from "next/link";
import SectionHeader from "../../../components/SectionHeader";
import ButtonCTA from "../../../components/ui/ButtonCTA";
import ContactForm from "../../../components/ContactForm";
import { Mail, Phone, MessageCircle, Instagram, Linkedin, Github } from "lucide-react";
import { SITE } from "../../../lib/site";

export const metadata = {
  title: "Contact | Inemesit David",
  description: "Tell me about your project. I reply within 24 to 48 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Inemesit David",
    description: "Tell me about your project. I reply within 24 to 48 hours.",
    url: "https://portfolio-2025-pro.vercel.app/contact",
    type: "website",
  },
};

export default function ContactPage() {
  // Config + safe fallbacks
  const EMAIL = SITE?.email || "inemesitdavid90@gmail.com";
  const PHONE_DISPLAY = SITE?.phoneDisplay || "+233 5956-33424";
  const PHONE_RAW = SITE?.phone || "+2330595633424";
  const telHref = `tel:${(PHONE_RAW || PHONE_DISPLAY).replace(/[^\d+]/g, "")}`;
  const WHATSAPP = SITE?.whatsappLink || "https://wa.me/233595633424";
  const LINKEDIN = SITE?.linkedin || "https://www.linkedin.com/";
  const GITHUB = SITE?.github || "https://github.com/ReechardDev";
  const INSTAGRAM = SITE?.instagram || "https://www.instagram.com/";
  const INTAKE_FORM = SITE?.intakeForm || null; // guarded until file exists
  const BOOK_LINK = SITE?.bookLink || null;     // optional booking link

  return (
    <main id="content" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader
        eyebrow="Contact"
        title="Tell me about your project"
        text="I typically reply within 24–48 hours with next steps."
      />

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        {/* Left: ways to reach me */}
        <div className="space-y-5">
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-base font-semibold text-slate-900">Direct</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-slate-500" />
                <a href={`mailto:${EMAIL}`} className="underline underline-offset-2">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-slate-500" />
                <a href={telHref} className="underline underline-offset-2">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-slate-500" />
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp (opens in a new tab)"
                  className="underline underline-offset-2"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-base font-semibold text-slate-900">Social</h2>
            <ul className="mt-3 grid grid-cols-3 gap-3 text-sm">
              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-3 py-2 hover:bg-slate-50"
                  aria-label="LinkedIn (opens in a new tab)"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-3 py-2 hover:bg-slate-50"
                  aria-label="GitHub (opens in a new tab)"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-3 py-2 hover:bg-slate-50"
                  aria-label="Instagram (opens in a new tab)"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-base font-semibold text-slate-900">Shortcuts</h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {BOOK_LINK ? (
                <ButtonCTA href={BOOK_LINK} target="_blank" rel="noopener noreferrer">
                  Book a call
                </ButtonCTA>
              ) : null}
              {INTAKE_FORM ? (
                <a
                  href={INTAKE_FORM}
                  className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-slate-50"
                >
                  Download intake form
                </a>
              ) : null}
              <ButtonCTA href="/Inemesit-David-CV.pdf" target="_blank" rel="noopener noreferrer" variant="ghost">
                Download CV
              </ButtonCTA>
            </div>
          </div>
        </div>

        {/* Right: contact form */}
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-base font-semibold text-slate-900">Send a message</h2>
          <p className="mt-1 text-sm text-slate-600">
            Share a bit about your business and what you want to build. I’ll reply with a simple plan.
          </p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Final CTA band */}
      <section className="mt-12 rounded-2xl border border-sky-100 bg-sky-50/50 p-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">Let’s work</p>
        <h3 className="mt-1 text-2xl font-bold tracking-tight">Have a project in mind?</h3>
        <p className="mt-2 text-slate-700">I’ll help you get to a fast, clean, measurable v1.</p>
        <div className="mt-4 flex justify-center gap-3">
          <ButtonCTA href="/contact">Start a project</ButtonCTA>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp (opens in a new tab)"
            className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-slate-50"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
