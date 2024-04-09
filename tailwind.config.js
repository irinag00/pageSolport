/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Exo 2"', "sans-serif"],
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
