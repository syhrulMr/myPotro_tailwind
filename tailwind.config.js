/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16",
    },
    extend: {
      colors: {},
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
