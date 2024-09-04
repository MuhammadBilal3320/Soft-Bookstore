/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'heroShadow': '0px 2px 12px 0px #000000e0',
      },



      gridTemplateColumns: {
        // Simple 16 column grid
        'cardGrid': 'repeat(autofit, minmax(400px, 1fr))',
      },
      gridTemplateRows: {
        // Simple 16 column grid
        'cardGrid': 'repeat(2, minmax(400px, 1fr))',
      }
    }
  },
  plugins: [require('daisyui'),],
}