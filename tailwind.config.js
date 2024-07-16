/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      textColor: {
        // 'purpleclr': 'rgb(179, 46, 179)',
      },
      backgroundColor: {
        'bcg': 'rgb(25, 25, 25)',
      },
      boxShadow: {
        'bs': '0px 8px 16px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        customGray: 'rgb(234, 234, 234)',
      }
    },
  },
  plugins: [],
}