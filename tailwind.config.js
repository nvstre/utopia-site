/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'gta-blue': {
          500: '#0095FF',
          600: '#008BEE',
          700: '#017FD8',
          800: '#16538F',
        },
        'gta-text': '#EBEBEB',
      },
    },
  },
  plugins: [],
}