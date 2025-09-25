// components/PitchTeaser.jsx
import ButtonCTA from "./ui/ButtonCTA";
import { EXPERIENCE_YEARS } from "../lib/site";

const NAME = "Inemesit David (ReechardDev)";
const PROOF = [EXPERIENCE_YEARS, "Next.js/Tailwind", "Google Analytics/SEO", "Ghana ↔ US"];

export default function PitchTeaser() {
  return (
    <section id="elevated-pitch" className="mt-20 mb-14 md:mb-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-2xl border border-sky-200 bg-white p-6 md:p-8 text-center">
          <div className="text-[11px] uppercase tracking-wider text-sky-700/80">
            Elevated Pitch
          </div>

          {/* Centered name/title */}
          <h2 className="mt-1 text-3xl md:text-4xl font-bold tracking-tight">
            {NAME}
          </h2>

          {/* Tagline */}
          <p className="mt-3 text-base md:text-lg text-slate-700">
            I build fast, smooth web experiences that are measured, so launches perform.
          </p>

          {/* Micro-proof (centered) */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
            {PROOF.map((item) => (
              <span
                key={item}
                className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-gray-800"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTAs (centered) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <ButtonCTA
              href="/contact"
              label="Let’s work"
              ariaLabel="Contact Inemesit David"
              gaEvent="home_pitch_contact"
            />
            <ButtonCTA
              href="/pitch"
              label="Watch the pitch →"
              variant="ghost"
              ariaLabel="Watch the elevated pitch"
              prefetch
              gaEvent="home_pitch_watch"
            />
            <ButtonCTA
              href="/Inemesit-David-CV.pdf"
              label="Download CV"
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Download CV (PDF)"
              gaEvent="home_pitch_cv"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
