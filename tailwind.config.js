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
        'purpleclr': 'rgb(179, 25, 179)',
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


//  @type {import('tailwindcss').Config} 
// module.exports = {
//   content: [
//     './index.html',
//     './script.js',],
//   theme: {
//     extend: {
//       backgroundColor: {
//         'bcg1': 'rgb(143, 135, 135)',
//         'bcg2': 'rgb(122, 122, 124)',
//         'bodybcg': 'rgb(193, 190, 190)',
//         'cardclr': 'rgb(228, 228, 228)',
//       },
//       boxShadow: {
//         'bs': '0px 8px 16px rgba(0, 0, 0, 0.2)',
//       },
//       fontFamily: {
//         Poppins: ['Poppins', 'sans-serif'],
//       }
//     },
//   },
//   plugins: [],
// }


