import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0A3D0A",
          deep: "#041804",
          mid: "#1B5E20",
          emerald: "#43A047",
        },
        cream: {
          DEFAULT: "#F7FBF4",
          warm: "#EEF6E8",
        },
        gold: {
          DEFAULT: "#8BC34A",
          bright: "#AED581",
        },
        ink: "#102010",
        mist: "#5A6B5A",
        parchment: "#F5FBF2",
        sage: "#A8C4A0",
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
