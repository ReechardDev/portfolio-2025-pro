// app/layout.js
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://portfolio-2025-pro.vercel.app"),
  title: "Inemesit David — Product-minded Web Developer",
  description:
    "I build clean, conversion-ready websites for local businesses using Next.js + Tailwind, measured with GA4.",
  openGraph: {
    title: "Inemesit David — Product-minded Web Developer",
    description: "Clean, conversion-ready websites with measurable results.",
    url: "https://portfolio-2025-pro.vercel.app",
    siteName: "Inemesit David",
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inemesit David — Product-minded Web Developer",
    description: "Clean, conversion-ready websites with measurable results.",
    images: ["/og/default.png"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
