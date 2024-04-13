/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Exo 2"', "sans-serif"],
      },
      keyframes: {
        "fade-in-y": {
          "0%": { opacity: 0, transform: "translateY(25px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        "fade-in-y": "fade-in-y 2s linear",
      },
    },
    colors: {
      blackSol: "#1D1D1B",
      yellowSol: "#FEC82F",
      greenWsp: "#25D366",
      blueInstagram: "#0b94ef",
    },
  },
  plugins: [],
});
