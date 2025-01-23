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
      },
      backgroundImage: {
        heroBg: "url('/public/assets/images/png/hero-bg-img.png')",
      }
    },
  },
  plugins: [],
};

