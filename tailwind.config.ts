import { Config } from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'

export default <Config>{
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
  plugins: [tailwindTypography],
}
