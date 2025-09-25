// app/(site)/pitch/page.jsx
import VideoEmbed from "../../../components/VideoEmbed";
import ButtonCTA from "../../../components/ui/ButtonCTA";
import { EXPERIENCE_YEARS } from "../../../lib/site";

export const metadata = { title: "Elevated Pitch" };

const BADGES = [EXPERIENCE_YEARS, "Next.js/Tailwind", "GA4/SEO", "Ghana ↔ US"];
const VIDEO_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // swap to your real link

export default function PitchPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <div className="text-center">
        <div className="text-[11px] uppercase tracking-wider text-sky-700/80">
          ELEVATOR PITCH
        </div>

        {/* Centered name/title */}
        <h1 className="mt-1 text-4xl md:text-5xl font-bold tracking-tight">
          Inemesit David (ReechardDev)
        </h1>

        {/* Micro-proof badges */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
          {BADGES.map((item) => (
            <span
              key={item}
              className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-gray-800"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Intro copy */}
        <p className="mt-6 text-base md:text-lg text-slate-700">
          I build <span className="font-semibold">clean, fast</span> web
          experiences that are <span className="font-semibold">measured</span> so
          websites are not just pretty; they perform. I combine{" "}
          <span className="font-semibold">Next.js/Tailwind</span> with{" "}
          <span className="font-semibold">content strategy</span> and{" "}
          <span className="font-semibold">Google Analytics</span> to build what
          matters quickly, then iterate with data.
        </p>

        <p className="mt-4 text-base md:text-lg text-slate-700">
          Over <span className="font-semibold">{EXPERIENCE_YEARS}</span> across Ghana → US,
          I've helped small teams move from idea to{" "}
          <span className="font-semibold">conversion-ready</span> websites,
          clarifying messaging, improving <span className="font-semibold">UX</span>,
          and tracking the moments that drive leads. If you're looking for a
          partner who can design, build, and{" "}
          <span className="font-semibold">prove impact</span>, let's talk.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <ButtonCTA
            href="/contact"
            label="Let's work"
            ariaLabel="Contact Inemesit David"
            data-ga="pitch_contact"
            data-ga-label="pitch_lets_work"
          />
          <ButtonCTA
            href="/Inemesit-David-CV.pdf"
            label="Download CV"
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Download CV (PDF)"
            data-ga="pitch_cv"
            data-ga-label="cv_pdf"
          />
        </div>
        <p className="mt-2 text-xs text-slate-500">Same-day reply.</p>
      </div>

      {/* Video */}
      <div className="mt-10">
        <VideoEmbed url={VIDEO_URL} />
      </div>
    </main>
  );
}
