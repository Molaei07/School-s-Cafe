/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkBlue": "#011F26",
        "darkYellow": "#FFC224",
        "darkCyan": "#025E73"
      }
    },
    fontFamily: {
      "Vazir": '"Vazir"'
    }
  },
  plugins: [],
}