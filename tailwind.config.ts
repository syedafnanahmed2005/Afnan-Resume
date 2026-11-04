import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#09090b",
        charcoal: "#121214",
        panel: "#18181b",
        edge: "#26262b",
        brand: { DEFAULT: "#ff6a1a", soft: "#ff8a4c", deep: "#e2520a" },
        muted: "#a1a1aa",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { shell: "76rem" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        pulseDot: { "0%,100%": { opacity: "1", transform: "scale(1)" }, "50%": { opacity: ".4", transform: "scale(1.6)" } },
      },
      animation: { marquee: "marquee 38s linear infinite", pulseDot: "pulseDot 2s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
