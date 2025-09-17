/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand tokens for the navy/sky CTA theme
        brand: {
          DEFAULT: "#0f172a",   // deep navy (text-brand, bg-brand)
          900: "#0f172a",
          cta: "#0f172a",       // CTA base → bg-brand-cta
          "cta-hover": "#60a5fa"// CTA hover → hover:bg-brand-cta-hover
        },
        // Keep old 'ink' usages working (optional)
        ink: "#0f172a",
      },
      ringColor: {
        brand: "#60a5fa",       // focus:ring-brand
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
