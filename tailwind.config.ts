import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["var(--font-garamond)", "serif"],
      },
      animation: {
        "line-shadow": "line-shadow 15s linear infinite",
        "shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
      },
      keyframes: {
        "line-shadow": {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "100% -100%" },
        },
        "shimmer-slide": {
          "to": { "transform": "translate(calc(100cqw - 100%), 0)" },
        },
        "spin-around": {
          "0%": { "transform": "translateZ(0) rotate(0)" },
          "15%, 35%": { "transform": "translateZ(0) rotate(90deg)" },
          "65%, 85%": { "transform": "translateZ(0) rotate(270deg)" },
          "100%": { "transform": "translateZ(0) rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
