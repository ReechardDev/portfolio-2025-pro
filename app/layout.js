// app/layout.js
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://portfolio-2025-pro.vercel.app"),
  title: "Inemesit Richard David — Product-minded Web Developer",
  description:
    "I build clean, conversion-ready websites for local businesses using Next.js + Tailwind, measured with GA4.",
  openGraph: {
    title: "Inemesit Richard David — Product-minded Web Developer",
    description: "Clean, conversion-ready websites with measurable results.",
    url: "https://portfolio-2025-pro.vercel.app",
    siteName: "Inemesit David",
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inemesit Richard David — Product-minded Web Developer",
    description: "Clean, conversion-ready websites with measurable results.",
    images: ["/og/default.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
