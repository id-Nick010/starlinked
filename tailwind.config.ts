/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
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
        },
        animation: {
          blink: "blink 1.5s infinite ease-in-out",
        },
        keyframes: {
          blink: {
            "0%, 100%": { opacity: "1" },
            "50%": { opacity: "0.3" },
          },
        },
    },
  },
  plugins: [],
};