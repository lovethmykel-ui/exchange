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
        bg: {
          base: "#050505",
          surface: "#0c0c12",
        },
        primary: {
          DEFAULT: "#B026FF",
          light: "#C864FF",
          dark: "#8A00E6",
        },
        secondary: {
          DEFAULT: "#FF8A00",
          light: "#FFA733",
          dark: "#CC6E00",
        },
        success: "#26A17B",
        danger: "#F6465D",
        warning: "#F3BA2F",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
