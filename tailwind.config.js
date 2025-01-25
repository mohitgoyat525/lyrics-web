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
      },
      backgroundImage: {
        heroBg: "url('/public/assets/images/png/hero-bg-img.png')",
        nftBg: "url('/public/assets/images/png/nft-bg-img.png')",
        gildedBg: "url('/public/assets/images/png/gilded-bg-img-three.png')",
        gildTokenBg: "url('/public/assets/images/png/gild-bg-shadow.png')",
        uniswapBg:"url('/public/assets/images/png/uniswap-bg-img.png')"
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

