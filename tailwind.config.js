const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["fantasy"],
  }
}


