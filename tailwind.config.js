module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary': theme('colors.gray.900'),
        'secondary': '#ffed4a',
        'accent': '#e3342f',
        'sitePrimmary': '#FEE400'
      }),
      backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#FEE400',
      'secondary': '#FFEF66',
      'accent': theme('colors.gray.900'),
      }),
      fontFamily: {
        'display': ['Rajdhani'],
        'body': ['Open Sans'],
        'accent': ['Fira Code']
       },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '1/3': 'calc(1/3)',
        '3/4': '75%',
        '45': '45%'
      },
    },
  },
  variants: {
    extend: {
      padding: ['last']
    },
  },
  plugins: [],
}
