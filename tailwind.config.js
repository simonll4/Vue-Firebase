const {default: daisyui} = require('daisyui');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["/src/**/*.{vue,js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {  
    themes: ["fantasy"],
  }
}

