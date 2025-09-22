// components/HeroMotion.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ButtonCTA from "./ui/ButtonCTA";

export default function HeroMotion() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          Product-minded <span className="text-brand-cta-hover">web developer</span> for{" "}
          <span className="text-brand-cta-hover">local businesses</span>
        </h1>

        <p className="mt-3 text-slate-600">
          Clean, conversion-ready websites with GA4 events on calls, WhatsApp, and forms. Built fast, measured, and improved.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* Primary CTA: unified navy to sky hover */}
          <ButtonCTA as={Link} href="/contact">
            Start a project
          </ButtonCTA>

          {/* Secondary outline link: same hover feel as Work cards */}
          <a
            href="/work"
            className="inline-flex items-center gap-2 rounded-xl2 border border-slate-200 bg-white px-5 py-3 text-slate-900 transition hover:border-brand-cta-hover hover:text-brand-cta-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
          >
            See recent work <span className="transition hover:translate-x-0.5">→</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
