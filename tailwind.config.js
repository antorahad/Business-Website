/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'googleFont' : 'Poppins, sans-serif'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}