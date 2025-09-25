// app/(site)/layout.jsx
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GAListener from "../../components/GAListener";
import Script from "next/script";

export const metadata = {
  title: {
    default: "Inemesit David — Product-minded Web Developer",
    template: "%s | Inemesit David",
  },
  description:
    "I build clean, conversion-ready websites for local businesses using Next.js + Tailwind, measured with GA4.",
  // Useful for canonical/OG
  metadataBase: new URL("https://portfolio-2025-pro.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://portfolio-2025-pro.vercel.app",
    title: "Inemesit David — Product-minded Web Developer",
    description:
      "Clean, conversion-ready websites with Next.js + Tailwind, measured with GA4.",
    siteName: "Inemesit David",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inemesit David — Product-minded Web Developer",
    description:
      "Clean, conversion-ready websites with Next.js + Tailwind, measured with GA4.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SiteLayout({ children }) {
  // Segment layout: no <html>/<body> and no globals.css import here.
  // GA scripts live here so they load for the whole (site) subtree.
  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Q9CMCQCW0C"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          if (!window.gtag) window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-Q9CMCQCW0C', {
            page_path: window.location.pathname + window.location.search,
          });
        `}
      </Script>

      {/* Person JSON-LD for richer results */}
      <Script id="ld-person" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Inemesit David",
          url: "https://portfolio-2025-pro.vercel.app",
          jobTitle: "Web Developer",
          worksFor: { "@type": "Organization", name: "Reech-Out Marketing Agency" },
          email: "mailto:inemesitdavid90@gmail.com",
          sameAs: [
            // add socials later if you want richer cards
          ],
        })}
      </Script>

      {/* Route & CTA event tracking */}
      <GAListener />

      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        <Header />
        <main id="content" className="flex-1">
          <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
