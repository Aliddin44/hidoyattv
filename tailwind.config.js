/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        islamic: {
          green: '#0F3D2E',
          'green-light': '#1a5c47',
          'green-dark': '#0a2a20',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#e0b84d',
          dark: '#a68520',
        },
        beige: {
          DEFAULT: '#F5F0E6',
          light: '#FAF8F3',
          dark: '#E8E2D6',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(15, 61, 46, 0.08)',
        'soft-lg': '0 8px 30px rgba(15, 61, 46, 0.12)',
        'glow': '0 0 20px rgba(201, 162, 39, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
