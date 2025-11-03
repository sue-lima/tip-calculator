/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
      },

      keyframes: {
        toggleBounce: {
          '0%, 100%': { transform: 'translateX(0)' },
          '40%': { transform: 'translateX(2px) scale(1.1)' },
          '60%': { transform: 'translateX(-1px) scale(0.95)' },
          '80%': { transform: 'translateX(1px) scale(1.05)' },
        },
      },

      animation: {
        toggleBounce: 'toggleBounce 0.4s ease-out',
      },
    },
  },
  plugins: [],
}