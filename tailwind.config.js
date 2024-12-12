/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'spin-color': 'spinColor 2s linear infinite',
      },
      keyframes: {
        spinColor: {
          '0%': { transform: 'rotate(0deg)', backgroundColor: '#ff0000' },
          '50%': { transform: 'rotate(180deg)', backgroundColor: '#00ff00' },
          '100%': { transform: 'rotate(360deg)', backgroundColor: '#0000ff' },
        },
      },
      animation: {
        'ping-once': 'pingOnce 1s ease-out forwards',
      },
      keyframes: {
        pingOnce: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%': { transform: 'scale(2)', opacity: '0' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

