// app/(site)/layout.jsx
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: {
    default: "Inemesit David — Product-minded Web Developer",
    template: "%s | Inemesit David",
  },
  description:
    "I build clean, conversion-ready websites for local businesses using Next.js + Tailwind, measured with GA4.",
};

export default function SiteLayout({ children }) {
  // Note: no <html>/<body> here, and no globals.css import.
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main id="content" className="flex-1">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
