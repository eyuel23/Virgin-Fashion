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
      catagory: "#F5F5F596",
    },
    textColor: {
      primary: "#ffffff",
      secondary: "#FFF8EA",
      chocolate: "#897171",
    },
    fontFamily: {
      didot: "didot",
      bigCasion: "Big Caslon",
    },
    boxShadow: {
      bright: " 0 1rem 2rem rgba(255, 255, 255, 0.2)",
    },
    dropShadow: {
      light: "4.4px 8.8px 8.8px rgba(0,0, 0, 0.36)",
      image: " 3.6px 7.2px 7.2px rgba(0,0, 0, 0.36) ",
    },
    backgroundImage: {
      "hero-image": "url(/images/background.jpg)",
    },
    extend: {},
  },
  plugins: [],
};
