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
        primary: "#2C3E50",
        secondary: "#E74C3C",
        accent: "#3498DB",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F4D03F",
          dark: "#B8860B",
          muted: "#C9A227",
        },
        charcoal: {
          DEFAULT: "#1a1a1a",
          light: "#2d2d2d",
        },
      },
      fontFamily: {
        afacad: ["var(--font-afacad)", "system-ui", "sans-serif"],
        eb: ["var(--font-eb-garamond)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
