const typography = require("@manishrc/tailwindcss-typography-js");

const typographyTheme = typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Rajdhani", "Helvetica Neue", "sans-serif"],
  bodyFontFamily: ["Georgia", "serif"],
  scaleRatio: 2.75,
  googleFonts: [
    {
      name: 'Rajdhani'
    }
  ]
});

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '45': '45%'
      }
    },
  },
  variants: {
    extend: {
      padding: ['last']
    },
  },
  plugins: [typographyTheme],
}
