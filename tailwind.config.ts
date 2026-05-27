import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        heaven: {
          base: "#0B0B0B",
          panel: "#171717",
          text: "#F2EDE6",
          muted: "#A7A29A",
          red: "#B11226",
          amber: "#D08A24",
          steel: "#8A8F98",
        },
      },
      fontFamily: {
        heading: ["Oswald", "Arial Narrow", "Arial", "sans-serif"],
        body: ["Noto Sans JP", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(177, 18, 38, 0.38)",
        amber: "0 0 18px rgba(208, 138, 36, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
