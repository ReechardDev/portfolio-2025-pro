// app/(site)/layout.jsx
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 isolate overflow-x-clip">
      {/* Header kept above all content */}
      <header className="relative z-50">
        <Header />
      </header>

      <main id="content" className="relative z-0 flex-1">
        {/* Fluid container: full width on large screens, padded on mobile */}
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
          {children}
        </div>
      </main>

      {/* Footer above background elements but below header */}
      <footer className="relative z-40">
        <Footer />
      </footer>
    </div>
  );
}
