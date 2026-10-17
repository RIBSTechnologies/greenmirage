import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0F3B2E",
          deep: "#0C3227",
          mid: "#2D5A46",
          emerald: "#4A7C59",
        },
        cream: {
          DEFAULT: "#FBF9F4",
          warm: "#F7F4EC",
        },
        gold: {
          DEFAULT: "#C2A36B",
          bright: "#D4B276",
        },
        ink: "#1E2621",
        mist: "#6E7771",
        parchment: "#F8FAFC",
        sage: "#A7B3AE",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px rgb(0 0 0 / 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
