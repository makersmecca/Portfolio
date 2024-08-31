/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darktheme: "#0d0d0d",
      },
      animation: {
        typing: "typing 2s steps(11), blink 1s infinite",
      },
      keyframes: {
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
