/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        SpinningAndAppearing: {
          "0%": { transform: "rotate(-300deg) scale(0)" },
          "100%": { transform: "rotate(-15deg) scale(1)" },
        },
      },
      animation: {
        SpinningAndAppearing: "SpinningAndAppearing 1s forwards",
      },
      colors: {
        darkBlue: "#011F26",
        darkYellow: "#FFC224",
        darkCyan: "#025E73",
      },
    },
    fontFamily: {
      SahelBold: '"SahelBold"',
      SahelMedium: '"SahelMedium"',
    },
  },
  plugins: [],
};
