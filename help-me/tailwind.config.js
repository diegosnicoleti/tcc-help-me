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
          800: "#FF725E",
          700: "#FFCACA",
          600: "#FFF4F4",
          100: "#FFF0F0"
        },
        purple: {
          800: "#1D1F44",
          700: "#28295D",
          600: "#8378C1",
          500: "#A69AD7",
          400: "#F4FCFF"
        },
        gray: {
          800: "#3A4448",
          700: "#586266",
          600: "#6D6B6B",
          100: "#FCFCFC",
          50: "#CEDBE1"
        },
        CommonQuestions: {
          100: "#FBFBFB"
        },
        FeedBacks: {
          100: "#FFF4EA"
        }
      }
    },
  },
  plugins: [],
}

