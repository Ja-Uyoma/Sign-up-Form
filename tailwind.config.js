/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/main.ts"],
  theme: {
    extend: {
      colors: {
        "flat-green": "#596D48",
        "cloudy-gray": "#E5E7EB",
      },
      backgroundImage: {
        "halie-west": "url('/halie-west.png')",
      },
      fontFamily: {
        norse: "Norse Bold",
      },
    },
  },
  plugins: [],
};
