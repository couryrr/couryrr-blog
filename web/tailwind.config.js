/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      heather: {
        100: "#e0e6ea",
        200: "#c1ced6",
        300: "#a2b5c2",
        400: "#839dae",
        500: "#64849a",
        600: "#506a7b",
        700: "#3c4f5c",
        800: "#28353d",
        900: "#141a1e",
      },
    },
    extend: {},
  },
  plugins: [],
};
