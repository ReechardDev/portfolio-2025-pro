"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroMotion() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          I design & build <span className="text-brand">conversion-focused</span> websites.
        </h1>
        <p className="mt-4 text-gray-600">
          Product-minded developer specializing in Next.js, Tailwind, and clean UX. I care about speed,
          accessibility, and measurable outcomes.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/work" className="rounded-xl2 bg-brand text-white px-5 py-3">
            See my work
          </Link>
          <Link
            href="/contact"
            className="rounded-xl2 border border-gray-200 px-5 py-3 hover:bg-gray-50"
          >
            Start a project
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
