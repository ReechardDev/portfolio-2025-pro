// app/(site)/pitch/page.jsx
import VideoEmbed from "@/components/VideoEmbed";
import ButtonCTA from "@/components/ui/ButtonCTA";

const VIDEO_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

export function generateMetadata() {
  // Let the route-based OG/Twitter images take over (no explicit images here)
  const title = "Elevated Elevator Pitch";
  const description =
    "A concise, single-flow elevator pitch with a supporting video.";
  return {
    title,
    description,
    metadataBase: new URL("https://portfolio-2025-pro.vercel.app"),
    openGraph: {
      title,
      description,
      url: "/pitch",
      type: "website",
      siteName: "Inemesit David — Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function PitchPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="text-[11px] uppercase tracking-wider text-sky-700/80">
        Elevated Elevator Pitch
      </div>

      <h1 className="mt-1 text-3xl md:text-4xl font-bold tracking-tight">
        Inemesit David (ReechardDev)
      </h1>

      <div className="mt-3 flex flex-wrap gap-2 text-sm">
        {["8+ yrs", "Next.js/Tailwind", "GA4/SEO", "Ghana ↔ US"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-gray-800"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="mt-5 text-lg leading-relaxed text-gray-800">
        I build <strong>clean, fast</strong> web experiences that are{" "}
        <strong>measured</strong>—so launches aren’t just pretty; they perform. I combine{" "}
        <strong>Next.js/Tailwind</strong> with <strong>content strategy</strong> and{" "}
        <strong>GA4</strong> to ship what matters quickly, then iterate with data.
      </p>

      <p className="mt-4 leading-relaxed text-gray-800">
        Over 8+ years across Ghana ↔ US, I’ve helped small teams move from idea
        to <strong>conversion-ready</strong> sites—clarifying messaging, improving{" "}
        <strong>UX</strong>, and tracking the moments that drive leads. If you’re
        looking for a partner who can design, build, and{" "}
        <strong>prove impact</strong>, let’s talk.
      </p>

      <div className="mt-5 flex justify-center gap-3">
        <ButtonCTA
          href="/contact"
          label="Let’s work"
          ariaLabel="Contact Inemesit David"
          gaEvent="pitch_contact"
        />
        <ButtonCTA
          href="/Inemesit-David-CV.pdf"
          label="Download CV"
          variant="ghost"
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel="Download Inemesit David CV (PDF)"
          gaEvent="pitch_cv"
        />
      </div>
      <div className="mt-2 text-center text-xs text-gray-500">
        Same-day reply.
      </div>

      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-md rounded-xl border border-sky-100 bg-white/70 p-3 shadow-sm">
          <VideoEmbed url={VIDEO_URL} title="Elevated Pitch Video" />
          <div className="mt-2 text-center text-xs text-gray-500">
            If it doesn’t load,{" "}
            <a className="underline" href={VIDEO_URL}>
              open here
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
