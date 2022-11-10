/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindTypography = require('@tailwindcss/typography')
const plugin = require('tailwindcss/plugin')

module.exports = {
  safelist: ['font-poppins'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        primary: {
          50: '#FDECDF',
          100: '#FCE3D0',
          200: '#FAD1B0',
          300: '#F7BE90',
          400: '#F5AB71',
          500: '#f4a261',
          600: '#E58845',
          700: '#CC5F29',
          800: '#B24724',
          900: '#732817',
        },
        secundary: {
          50: '#CFE6E2',
          100: '#B6D9D4',
          200: '#86C0B7',
          300: '#56A69A',
          400: '#258D7D',
          500: '#0D806E',
          600: '#0C7363',
          700: '#095A4D',
          800: '#074037',
          900: '#042621',
        },
        error: {
          50: '#F6DAD6',
          100: '#F2C7C1',
          200: '#EAA298',
          300: '#E17C6F',
          400: '#D85746',
          500: '#D44431',
          600: '#AA3627',
          700: '#7F291D',
          800: '#551B14',
          900: '#2A0E0A',
        },
      },
      boxShadow: {
        'orange-spring': '0px 3px 4px rgba(244, 162, 97, 0.3);'
      },
      backgroundImage: {
        'orange-spring': 'linear-gradient(270deg, rgba(231,111,81,1) 0%, rgba(244,162,97,1) 20%, rgba(233,196,106,1) 35%, rgba(233,196,106,1) 50%, rgba(244,162,97,1) 50%, rgba(244,162,97,1) 100%)',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
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
