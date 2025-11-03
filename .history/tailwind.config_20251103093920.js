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
        sliderBounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
          '70%': { transform: 'scale(0.95)' },
          '90%': { transform: 'scale(1.05)' },
        },
        glowBorder: {
          '0%': { boxShadow: '0 0 0 0 rgba(56, 189, 248, 0.3)' },
          '50%': { boxShadow: '0 0 10px 3px rgba(56, 189, 248, 0.5)' },
          '100%': { boxShadow: '0 0 0 0 rgba(56, 189, 248, 0.3)' },
        },
      },
      animation: {
        toggleBounce: 'toggleBounce 0.4s ease-out',
        sliderBounce: 'sliderBounce 0.3s ease-out',
        glowBorder: 'glowBorder 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}