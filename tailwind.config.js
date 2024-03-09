/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        90: "90%",
      },
      colors: {
        gg: "red",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
