/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#167a7a",
        ink: "#0f172a"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: []
};
