// components/PitchTeaser.jsx
import ButtonCTA from "./ui/ButtonCTA"; // <- relative path (no @)

const PROOF = ["2+ yrs", "Next.js/Tailwind", "Google Analytics/SEO", "Ghana ↔ US"];

export default function PitchTeaser() {
  return (
    <section id="elevated-pitch" className="mt-20 mb-14 md:mb-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-sky-200 bg-white p-6 md:p-8">
          <div className="text-[11px] uppercase tracking-wider text-sky-700/80">
            Elevated Pitch
          </div>
          <h2 className="mt-1 text-2xl md:text-3xl font-bold tracking-tight">
            I build fast, smooth web experiences that are measured, so launches perform.
          </h2>

          {/* micro-proof */}
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {PROOF.map((item) => (
              <span
                key={item}
                className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-gray-800"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonCTA href="/contact" label="Let’s work" ariaLabel="Contact Inemesit David" gaEvent="home_pitch_contact" />
            <ButtonCTA href="/pitch" label="Watch the pitch →" variant="ghost" ariaLabel="Watch the elevated pitch" prefetch gaEvent="home_pitch_watch" />
            <ButtonCTA href="/Inemesit-David-CV.pdf" label="Download CV" variant="ghost" target="_blank" rel="noopener noreferrer" ariaLabel="Download CV (PDF)" gaEvent="home_pitch_cv" />
          </div>
        </div>
      </div>
    </section>
  );
}
