import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  const name = "Inemesit David — ReechardDev";
  const title = "Elevated Elevator Pitch";
  const tagline = "I build clean, fast web experiences that are measured—so launches perform.";
  const proof = "Next.js • Tailwind • GA4/SEO • 8+ yrs";

  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: 64,
        background: "linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%)",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
        color: "#0F172A"
      }}>
        <div style={{ fontSize: 28, letterSpacing: 4, color: "#0369A1" }}>ELEVATED PITCH</div>
        <div>
          <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.1 }}>{name}</div>
          <div style={{ marginTop: 16, fontSize: 34 }}>{title}</div>
          <div style={{ marginTop: 12, fontSize: 28, color: "#0c4a6e" }}>{tagline}</div>
          <div style={{ marginTop: 14, fontSize: 22, color: "#075985" }}>{proof}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#075985" }}>
          <div>portfolio-2025-pro.vercel.app/pitch</div>
          <div>Let’s work →</div>
        </div>
      </div>
    ),
    size
  );
}
