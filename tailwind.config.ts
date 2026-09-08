import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background-rgb) / <alpha-value>)",
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        "surface-container": "rgb(var(--surface-container-rgb) / <alpha-value>)",
        "surface-container-low": "rgb(var(--surface-container-low-rgb) / <alpha-value>)",
        "surface-container-high": "rgb(var(--surface-container-high-rgb) / <alpha-value>)",
        "outline-variant": "rgb(var(--outline-variant-rgb) / <alpha-value>)",
        "outline-hover": "rgb(var(--outline-hover-rgb) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary-rgb) / <alpha-value>)",
          tint: "#4EDEA3",
          dark: "#003824",
        },
        "on-surface": "rgb(var(--on-surface-rgb) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--on-surface-variant-rgb) / <alpha-value>)",
        "text-muted": "rgb(var(--text-muted-rgb) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      maxWidth: {
        "container-max": "48rem", // 768px (like max-w-3xl)
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
