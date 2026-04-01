/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        surfaceHover: "var(--surface-hover)",
        primary: "var(--primary)",
        primaryHover: "var(--primary-hover)",
        textMain: "var(--text-main)",
        textMuted: "var(--text-muted)",
        borderColor: "var(--border)",
        error: "var(--error)",
      },
    },
  },
  plugins: [],
}
