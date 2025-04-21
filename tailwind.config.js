// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(table|checkbox|form|spacer).js",
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to include all JS/TS files in src
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui(), require("tailwindcss-animate")],
};
