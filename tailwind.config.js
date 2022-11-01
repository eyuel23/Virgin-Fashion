/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      primary: "#897171",
      secondary: "#FFF8EA",
    },
    textColor: {
      primary: "#ffffff",
      secondary: "#FFF8EA",
    },
    fontFamily: {
      didot: "didot",
      bigCasion: "Big Caslon",
    },
    boxShadow: {
      bright: " 0 1rem 2rem rgba(255, 255, 255, 0.2)",
    },
    extend: {},
  },
  plugins: [],
};
