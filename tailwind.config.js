/** @type {import('tailwindcss').Config} */
    module.exports = {
      purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
      content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
      theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        customFont: ['YourCustomFont', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      // Add variants for transition properties
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
      plugins: [],
    }