/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#060608",
        surface: "#0D0D12",
        "surface-raised": "#14141B",
        "surface-card": "#101017",
        "border-subtle": "#1F1F2A",
        "border-tech": "#2E2E3E",
        xt: {
          red: "#FF1B28",
          "red-dark": "#B30F1A",
          "red-light": "#FF4550",
          purple: "#9333EA",
          "purple-electric": "#A855F7",
          "purple-dark": "#6B21A8",
          black: "#060608",
          gray: "#8E8EA0",
          light: "#F4F4F8",
        }
      },
      fontFamily: {
        display: ["var(--font-rajdhani)", "Rajdhani", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "carbon-pattern": "radial-gradient(#1A1A24 15%, transparent 16%), radial-gradient(#1A1A24 15%, transparent 16%)",
      },
      boxShadow: {
        "glow-red": "0 0 25px -5px rgba(255, 27, 40, 0.4)",
        "glow-purple": "0 0 25px -5px rgba(168, 85, 247, 0.4)",
        "glow-accent": "0 0 35px -5px rgba(255, 27, 40, 0.25), 0 0 25px -5px rgba(147, 51, 234, 0.25)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "radar-sweep": "radar 4s linear infinite",
      },
      keyframes: {
        radar: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }
      }
    },
  },
  plugins: [],
}

