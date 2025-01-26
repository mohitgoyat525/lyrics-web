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
        "heroBg": "url('/public/assets/images/png/hero-bg-img.png')",
        "nftBg": "url('/public/assets/images/png/nft-bg-img.png')",
        "gildedBg": "url('/public/assets/images/png/gilded-bg-img-three.png')",
        "gildTokenBg": "url('/public/assets/images/png/gild-bg-shadow.png')",
        "uniswapBg": "url('/public/assets/images/png/uniswap-bg-img.png')",
        "gradient-tb":
          "linear-gradient(to bottom, #815CC8 29.44%, #1BABFE 81.54%)",
        "grident-rl": "linear-gradient(90deg, #815CC8 0%, #1BABFE 100%)",
        "gradient-token-box":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(196, 196, 196, 0) 100%, rgba(255, 255, 255, 0.03) 100%)",
        "grident-footer-IconBox":
          "linear-gradient(110.75deg, rgba(255, 255, 255, 0.1) 0.01%, rgba(255, 255, 255, 0.03) 99.99%)",
        "accordian-grident":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%)",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

