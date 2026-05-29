/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'gta-blue': {
          400: '#33A9FF',
          500: '#0095FF',
          600: '#008BEE',
          700: '#017FD8',
          800: '#16538F',
        },
        'gta-purple': {
          400: '#A855F7',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        'gta-text': '#EBEBEB',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite alternative',
      },
      keyframes: {
        fadeInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 10px rgba(0, 149, 255, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(0, 149, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}