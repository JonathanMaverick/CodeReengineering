/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: 
    {
      colors: {
        '202020': '#202020',
        '191919': '#191919',
        '909090': '#909090',
      },
    },
  },
  plugins: [],
}

