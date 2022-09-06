/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      'xs': { 'max': '480px' },
      'sm': { 'max': '640px' },
      'xl': { 'min': '1400px' },
      'xl-2': { 'min': '1656px' },
      'xxl': { 'min': '2014px ' }
    },
    fontFamily: {
      Sing: ['Signika Negative', "sans-serif"]
    },
  },
  plugins: [],
}
