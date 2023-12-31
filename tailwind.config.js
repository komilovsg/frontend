const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      // "2xl": { max: "1535px" },
      // // => @media (max-width: 1535px) { ... }

      // xl: { max: "1279px" },
      // // => @media (max-width: 1279px) { ... }

      // lg: { max: "1023px" },
      // // => @media (max-width: 1023px) { ... }

      // md: { max: "767px" },
      // // => @media (max-width: 767px) { ... }

      // xs: { max: "376px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
});