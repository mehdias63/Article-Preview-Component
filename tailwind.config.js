/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      josef: ["Josefin Sans"],
    },
    extend: {
      colors: {
        "light-blue": "#ECF2F8",
        "dark-gray": "#48556A",
        "pink": "#F8BFBF",
        "dark-pink": "#EE8B8B",
      },
    },
  },
  plugins: [],
};
