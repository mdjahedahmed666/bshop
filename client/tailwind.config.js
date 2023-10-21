/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      rancho: ["Rancho","cursive"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}