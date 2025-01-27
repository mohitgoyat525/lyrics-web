/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1025px",
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        lightPurple: "#7664CD",
        lightSkyBlue: "#1BABFE",
        lightGray: "#333333",
        offGray: "#B2B2B2",
        lightBrown: "#454545",
      },
      backgroundImage: {
        "hero-bg": "url('/public/assets/images/png/hero-bg-img.png')",
        "nft-bg": "url('/public/assets/images/png/nft-bg-img.png')",
        "gilded-bg": "url('/public/assets/images/png/gilded-bg-img-three.png')",
        "gild-token-bg": "url('/public/assets/images/png/gild-bg-shadow.png')",
        "uniswap-bg": "url('/public/assets/images/png/uniswap-bg-img.png')",
        "grident-rl": "linear-gradient(90deg, #815CC8 0%, #1BABFE 100%)",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

