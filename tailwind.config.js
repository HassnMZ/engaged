/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#f7e7a1',
          DEFAULT: '#d4af37',
          dark: '#c5a032',
        },
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
