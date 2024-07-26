/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "3xl": ["32px", "40px"],
      "4xl": ["50px", "62.5px"],
    },
    screens: {
      sm: "450px",
      md: "769px",

      lg: "1024px",

      xl: "1280px",
    },
  },
  plugins: [],
};
