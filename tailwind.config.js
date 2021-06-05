module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pry-color': '#005D67',
        'dark-grey': '#666666',
        'medium-grey': '#C4C4C4',
        'sec-color': '#85FFC7',
        'light-grey': '#F4F4F4',
        'grey-green': '#B1E4DC'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
      borderColor: ['focus']
    },
  },
  plugins: [],
}
