/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindTypography = require('@tailwindcss/typography')
const plugin = require('tailwindcss/plugin')

module.exports = {
  safelist: ['font-poppins'],
  theme: {
    extend: {},
  },
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  plugins: [
    tailwindTypography,
    plugin(function ({ addBase, theme }) {
      addBase({
        'body.font-poppins': {
          fontFamily: ['Poppins', theme('fontFamily.sans')].join(', '),
        },
        'body.no-scroll': {
          overflow: 'hidden',
        },
        html: {
          scrollBehavior: 'smooth',
        },
      })
    }),
  ],
}
