/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
        fontFamily: {
        parisienne: ["Parisienne", "cursive"],
      },
      colors: {
        zinc: {
          100: "#a7092b",
          900: '#1C1C1C'
        },
      },
      screens: {
        'sm-max': { 'max': '639px' },
        'md-max': { 'max': '767px' },
        'lg-max': {'max': '1023px'},
    },
    },
  },
  plugins: [],
};