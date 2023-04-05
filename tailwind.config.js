const plugin = require('tailwindcss/plugin')


module.exports = {
  darkMode: ['class',],
  important: true,
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
