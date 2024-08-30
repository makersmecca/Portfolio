/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wobble: {
          "0%": { borderRadius: "40% 60% 60% 40%", transform: "scale(1)" },
          "20%": { borderRadius: "55% 45% 60% 40%", transform: "scale(1.05)" },
          "40%": { borderRadius: "60% 40% 500% 50%", transform: "scale(0.95)" },
          "60%": { borderRadius: "50% 60% 40% 60%", transform: "scale(1.1)" },
          "80%": { borderRadius: "65% 35% 55% 45%", transform: "scale(0.95)" },
          "100%": { borderRadius: "50% 50% 50% 50%", transform: "scale(1)" },
        },
        animation: {
          wobble: "wobble 10s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        },
      },
    },
    fontFamily: {
      Kanit: ["Kanit", "sans-serif"],
    },
  },
  plugins: [],
};
