/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue':      '#19385C',
        'brand-blue-dark': '#0f2340',
        'brand-gold':      '#E8B84B',
        'brand-gold-dark': '#c99a2e',
        'brand-gold-light':'#F0CB6E',
      },
      fontFamily: {
        sans:  ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
        screens: { '2xl': '1280px' },
      },
    },
  },
  plugins: [],
};
