/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
        fontFamily: {
            sarabun: ['Sarabun', 'sans-serif'],
        }
    },
  },
  plugins: [],
};