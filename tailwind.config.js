module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#ffafbd ',
      'secondary': '#ffc3a0',
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
