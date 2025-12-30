/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // Body font default
        display: ["var(--font-oswald)", "sans-serif"], // Custom font untuk judul
      },
      // ... konfigurasi warna dll biarkan saja
    },
  },
  plugins: [],
};
