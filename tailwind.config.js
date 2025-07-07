/** @type {import('tailwindcss').Config} */
const color=require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage': '#C3C88C',
        'darkpurple': '#30253E',
        'russiangreen': '#638872',
        'pewterblue': '#B0B9B1',
        'cambridgeblue': '#94C7B4'
      },
      backgroundImage: {
        bannerImg: "url('bkbanner.png')"
      }
    }
  },
  plugins: [],
}

