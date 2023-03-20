// /** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white':'#ffffff',
      'blue': {

        100 : '#003049',
        200 : '#1D3557',
        300 : '#3d5a80',
        400 : '#353BC4',
        500 : '#D9D9D9',


      },
      'yellow': '#C9CB70',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',

    },

    width: {
       'display' : '950px',
       'side'    : '425px',
       'nav'   : '600px',
       'carousel-lg' : '75px',
       'carousel-md' :'50px'
    },

    height : {
      'display' : '560px',
      'side' :'550px',
      'nav' : '50px',
      'carousel-lg' : '75px',
      'carousel-md' : '50px'
    },

   

  },
  plugins: [],
}