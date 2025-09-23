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
          I build & design fast {" "}
          <span className="text-brand-cta-hover">website</span>{" "}
          for{" "}
          <span className="text-brand-cta-hover">local businesses</span>
        </h1>

        <p className="mt-3 text-slate-700">
          Clean, conversion-ready websites with Google analytic events for calls, WhatsApp, and forms. built fast, measured, and improved.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonCTA asChild>
            <Link href="/contact" data-ga="home_hero_start_project">
              Start a project
            </Link>
          </ButtonCTA>
          <Link
            href="/work"
            className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-slate-50"
            data-ga="home_hero_see_work"
          >
            See recent work →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
