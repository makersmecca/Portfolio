/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darktheme: "#0d0d0d",
        textBlue: "#6ca7da",
        newOrange: "#e28743",
        darkBlue: "#98c3e4",
        newYellow: "#d4bb2c",
      },
      animation: {
        typing: "typing 2s steps(11), blink 0.4s infinite alternate",
        slideDown: "slideDown 1s ease-in-out forwards",
        appear: "appear 0.8s ease-in-out",
        blob: "blob 5s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            borderRadius: "60% 30% 40% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
          "75%": {
            borderRadius: "65% 45% 30% 65% / 60% 30% 70% 60%",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        typing: {
          from: {
            width: "0",
          },
          to: {
            width: "3ch",
          },
        },
        blink: {
          from: {
            "border-color": "black",
          },
          to: {
            "border-color": "white",
          },
        },
      },
    },
    fontFamily: {
      Kanit: ["Kanit", "sans-serif"],
    },
  },
  plugins: [],
};
