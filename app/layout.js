// app/layout.js
import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://portfolio-2025-pro.vercel.app"),
  title: {
    default: "Inemesit David",
    template: "%s | Inemesit David",
  },
  description:
    "I build clean, conversion-ready websites for local businesses using Next.js + Tailwind, measured with GA4.",
  openGraph: {
    title: "Inemesit David",
    description: "Clean, conversion-ready websites with measurable results.",
    url: "https://portfolio-2025-pro.vercel.app",
    siteName: "Inemesit David",
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inemesit David",
    description: "Clean, conversion-ready websites with measurable results.",
    images: ["/og/default.png"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Perf: help GA load quicker */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {/* Accessibility helper */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 rounded bg-slate-900 px-3 py-2 text-white"
        >
          Skip to content
        </a>

        {/* --- Google Analytics 4 (global) --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q9CMCQCW0C"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            // Prevent double-init across segment layouts
            if (!window.__ga_inited) {
              window.__ga_inited = true;
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = window.gtag || gtag;
              gtag('js', new Date());
              gtag('config', 'G-Q9CMCQCW0C', {
                page_path: location.pathname + location.search
              });
            }
          `}
        </Script>
        {/* --- /GA4 --- */}

        {children}
      </body>
    </html>
  );
}
