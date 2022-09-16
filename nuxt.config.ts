import { defineNuxtConfig } from 'nuxt'

const { API_BASE_URL, GA_MEASUREMENT_ID, GA_HOST } = process.env

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  rootDir: './src/',
  target: 'static',
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile: ['@headlessui/vue'],
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: API_BASE_URL,
      gaMeasurementID: GA_MEASUREMENT_ID,
      gaHost: GA_HOST,
    },
  },
})
