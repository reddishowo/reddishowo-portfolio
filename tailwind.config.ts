// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background)", // Variabel utama
          light: "#ffffff", // Fallback untuk light mode
          dark: "#0a0a0a",  // Fallback untuk dark mode
        },
        foreground: {
          DEFAULT: "var(--foreground)", // Variabel utama
          light: "#171717",
          dark: "#ededed",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
