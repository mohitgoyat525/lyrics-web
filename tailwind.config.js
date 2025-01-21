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
        "2xl": "1140px",
      },
    },
    extend: {
      colors: {
        lightGray: "#333333",
        offBlue: "#DBDBF3",
        darkBlack: "#14191C",
        offWhite: "#CECECE",
        lightWhite: "#FAFAFF",
      },
    },
  },
  plugins: [],
};

