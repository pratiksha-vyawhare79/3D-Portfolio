/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#5eead4',
        darkBg: '#0a0e17',
      }
    },
  },
  plugins: [],
}
