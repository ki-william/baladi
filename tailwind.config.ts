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
        background: "var(--background)",
        foreground: "var(--foreground)",
        ink: {
          900: "#0b0b0f",
          800: "#1a1a20",
          700: "#2d2d36",
          500: "#5b5b68",
          400: "#8a8a95",
          300: "#b8b8c0",
          200: "#e5e5ea",
          100: "#f2f2f5",
        },
        cream: {
          50: "#fffef9",
          100: "#fdfbf1",
          200: "#faf6e4",
        },
        yellow: {
          300: "#ffe94d",
          400: "#ffde2e",
          500: "#ffd60a",
          600: "#f5c400",
          700: "#caa000",
        },
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", '"SF Pro Display"', "Inter", "system-ui", '"Segoe UI"', "sans-serif"],
        display: ["-apple-system", "BlinkMacSystemFont", '"SF Pro Display"', "system-ui", "sans-serif"],
        arabic: ['"Noto Naskh Arabic"', '"Amiri"', "Georgia", "serif"],
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float-1": "float-1 7s ease-in-out infinite",
        "float-2": "float-2 9s ease-in-out infinite",
        "float-3": "float-3 11s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "orbit": "orbit 22s linear infinite",
        "orbit-reverse": "orbit 28s linear infinite reverse",
        "marquee": "marquee 40s linear infinite",
        "flow": "flow 3s ease-in-out infinite",
        "draw": "draw 2.5s ease forwards",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "spin-slow": "spin 45s linear infinite",
        "bounce-soft": "bounce-soft 3.5s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float-1": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(14px, -22px) rotate(4deg)" },
          "66%": { transform: "translate(-10px, -12px) rotate(-3deg)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-18px, -28px)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(20px, -14px) rotate(5deg)" },
          "75%": { transform: "translate(-14px, -22px) rotate(-4deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.25)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(140px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(140px) rotate(-360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        flow: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateX(200%)", opacity: "0" },
        },
        draw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
