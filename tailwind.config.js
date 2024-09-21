/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darktheme: "#0d0d0d",
        textBlue: "#6ca7da",
        newOrange: "#e28743",
        darkBlue: "#57b6ff",
        newYellow: "#d4bb2c",
        newBlue: "#98c3e4",
        pastelRed: "#FFD7C4",
        pastelRedLight: "#E2BFB3",
        highlightBrown: "#C96868",
        lightBg: "#FFF4EA",
        pastelSlate: "#7EACB5",
      },
      animation: {
        // typing: "typing 2s steps(14), blink 0.5s infinite alternate",
        slideDown: "slideDown 1s ease-in-out forwards",
        appear: "appear 0.8s ease-in-out",
        blob: "blob 5s ease-in-out infinite",
        slideIn: "slideIn 0.2s ease-in-out forwards",
        slideOut: "slideOut 0.2s ease-in-out forwards",
        spinSlow: "spin 3s linear infinite",
        fastPulse: "pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        wave: "wave 1s ease infinite",
        balloonPop: "balloonPop 1.2s ease forwards",
        rotateY: "rotateY 2s linear infinite",
      },
      keyframes: {
        rotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        wave: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(15deg)",
          },
          "50%": {
            transform: "rotate(-15deg)",
          },
          "75%": {
            transform: "rotate(10deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        slideIn: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100vw)" },
        },
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
        balloonPop: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1.3)",
            opacity: "1",
          },
          "80%": {
            transform: "scale(1.5)",
            opacity: "1",
          },
          "93%": {
            transform: "scale(1.7)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(5)",
            opacity: "0",
          },
        },
        // typing: {
        //   from: {
        //     width: "0",
        //   },
        //   to: {
        //     width: "3ch",
        //   },
        // },
        // blink: {
        //   from: {
        //     "border-color": "black",
        //   },
        //   to: {
        //     "border-color": "white",
        //   },
        // },
      },
    },
    fontFamily: {
      Kanit: ["Kanit", "sans-serif"],
      Japanese: ["Noto+Sans+JP", "sans-serif"],
      Hindi: ["Mukta", "sans-serif"],
      Bengali: ["Noto+Sans+Bengali", "sans-serif"],
      Urdu: ["Noto+Nastaliq+Urdu", "sans-serif"],
      Tamil: ["Noto+Sans+Tamil", "sans-serif"],
      French: ["Noto+Sans:ital", "sans-serif"],
    },
  },
  plugins: [],
};
