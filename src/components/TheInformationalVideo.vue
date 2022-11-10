<template>
  <section
    class="bg-[#374151] bg-[url(/icons/outline-logo.svg)] bg-[length:40px_40px] bg-repeat-space py-16 px-4"
  >
    <BaseContainer>
      <article
        class="flex flex-col items-center justify-center gap-2"
      >
        <p class="font-medium text-gray-300 uppercase">
          Startup digital
        </p>
        <p class="mb-8 text-2xl font-bold text-center text-white lg:mb-12 lg:text-5xl">
          Nossa motivação e proposta
        </p>
        <div class="w-full md:hidden ">
          <LiteYouTubeEmbed
            id="EViUD6iToZ4"
            wrapper-class="yt-lite aspect-[9/16]"
            title="apresentação paranavai.app - vertical"
            poster="maxresdefault"
            params="autoplay=1&modestbranding=1"
          />
        </div>
        <div class="hidden w-full md:block">
          <LiteYouTubeEmbed
            id="75TxRKzHJ6Q"
            wrapper-class="yt-lite aspect-video"
            title="apresentação paranavai.app - horizontal"
            poster="maxresdefault"
            params="autoplay=1&modestbranding=1"
          />
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=5544920018161&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20maximizar%20os%20resultados%20do%20meu%20neg%C3%B3cio!"
          target="_blank"
          rel="noopener"
          class="flex gap-2 w-full items-center justify-center rounded-md border mt-9 max-w-[223px] border-transparent bg-white py-3 text-base font-medium hover:bg-gray-200 ring-4 ring-transparent hover:ring-gray-100/[.50] focus:ring-gray-100/[.50] text-gray-700 md:py-4 md:text-lg shadow transition-all"
          @click="track"
        >
          <span>Entre em contato</span>
          <BaseIcon icon="whatsapp" />
        </a>
      </article>
    </BaseContainer>
  </section>
</template>

<script lang="ts">
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/dist/style.css'

import { defineComponent } from 'vue'
import { useGtag } from 'vue-gtag-next'

export default defineComponent({
  name: 'TheInformationalVideo',
  components: { LiteYouTubeEmbed },
  setup () {
    const { event } = useGtag()
    const track = () => {
      event('conversion', {
        send_to: 'AW-10967913163/oDZzCMjn0oEYEMul9O0o',
      })
      event('ask_contact')
    }

    return {
      track,
    }
  },
})
</script>
