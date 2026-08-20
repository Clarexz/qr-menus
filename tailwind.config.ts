import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--milpa-cream)",
        card: "var(--milpa-card)",
        ink: "var(--milpa-ink)",
        "ink-soft": "var(--milpa-ink-soft)",
        terracotta: {
          DEFAULT: "var(--milpa-terracotta)",
          dark: "var(--milpa-terracotta-dark)",
        },
        olive: "var(--milpa-olive)",
        line: "var(--milpa-line)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
