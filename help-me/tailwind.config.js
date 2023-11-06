/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        primary: {
          900: "#fa5f48",
          800: "#FF725E",
          700: "#FFCACA",
          600: "#FFF4F4",
          500: "#FC8686",
          100: "#FFF0F0",
          50: "#FFF5F5",
          40: "#FFEBEB"
        },
        purple: {
          800: "#1D1F44",
          700: "#28295D",
          600: "#8378C1",
          500: "#A69AD7",
          400: "#F4FCFF"
        },
        gray: {
          1000: "#455A64",
          900: "#263238",
          800: "#3A4448",
          700: "#586266",
          600: "#6D6B6B",
          500: "#7F8F97",
          100: "#FCFCFC",
          60: "#E8E8E8",
          50: "#CEDBE1",
          40: "#F9F9F9",
          30: "#E6E6E6"
        },
        success: {
          800: "#057517",
          50: "#9ae3a6"
        },
        CommonQuestions: {
          100: "#FBFBFB"
        },
        FeedBacks: {
          100: "#FFF4EA"
        },
        blue: {
          600: "#008EC7"
        }
      }
    },
  },
  plugins: [],
}

