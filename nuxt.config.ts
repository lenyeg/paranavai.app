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

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: API_BASE_URL,
      gaMeasurementID: GA_MEASUREMENT_ID,
      gaHost: GA_HOST,
    },
  },

  vue: {
    compilerOptions: {
      // isCustomElement: (tag) => ['lottie-player'].includes(tag),
    },
  },

  tailwindcss: {
    configPath: '../tailwind.config.js'
  }
})
