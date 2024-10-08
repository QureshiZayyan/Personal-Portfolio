/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx}"],
  theme: {
    extend: {

      backgroundColor: {
        'bcg': 'rgb(25, 25, 25)',
      },
      colors: {
        customGray: 'rgb(234, 234, 234)',
      }
    },
  },
  plugins: [],
}