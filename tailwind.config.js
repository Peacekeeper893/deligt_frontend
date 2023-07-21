/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {





    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'primary': '#0c0c0c',
        'golden' : '#DCCA87',
      },

      fontFamily: {
        'lobster': ['Comic Neue', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'cormant': ['Cormorant Upright', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
      },





    },
  },
  plugins: [],
}
