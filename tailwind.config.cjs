/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Poppins"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#e11d48', // Durga-inspired deep pink/red
          dark: '#9f1239',
        },
        accent: '#22c55e',
      },
      boxShadow: {
        'soft-elevated': '0 14px 45px rgba(15,23,42,0.35)',
      },
    },
  },
  plugins: [],
};