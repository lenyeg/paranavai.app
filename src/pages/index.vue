<template>
  <div :class="$style.main">
    <TheHeader />
    <TheCustomers />
    <TheAboutUs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
})
</script>

<script lang="ts" setup>
useHead({
  title: 'Paranavaí.app',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {
      name: 'description',
      content:
        'Estamos digitalizando a nossa cidade, vá além da presença física e seja encontrado por quem precisa de você.',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: true,
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&family=Sree+Krushnadevaraya&display=swap',
      crossorigin: true,
    },
  ],
  bodyAttrs: {
    class: 'font-poppins',
  },
})
</script>

<style lang="postcss" module>
:root {
  scroll-behavior: smooth;
}
.main {
  background: linear-gradient(0deg, rgba(182, 217, 212, 0) 0%, #cfe6e2 100%);
  font-family: Poppins, sans-serif;

  h1 {
    @apply text-3xl font-black text-[#374151];
  }
}
</style>
