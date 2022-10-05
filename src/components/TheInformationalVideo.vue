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
      <p class="text-2xl font-bold text-center text-gray-300">
        Nossa motivação e proposta
      </p>
      <div
        class="w-[343px] h-[603px] lg:w-[739px] lg:h-[422px] rounded-md bg-[#1F2937] flex justify-center items-center mt-9"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 65 65"
          class="w-16 h-16 group cursor-pointer"
        >
          <rect
            width="64"
            height="64"
            x=".5"
            y=".849"
            fill="#9CA3AF"
            rx="32"
            class="group-hover:fill-white duration-300"
          />
          <path fill="#1F2937" d="m48.5 32.849-24 13.856V18.993l24 13.856Z" />
        </svg>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=5544920018161&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20maximizar%20os%20resultados%20do%20meu%20neg%C3%B3cio!"
        target="_blank"
        rel="noopener noreferrer"
        class="flex gap-2 w-full items-center justify-center rounded-md border mt-9 max-w-[223px] border-transparent bg-white py-3 text-base font-medium text-gray-700 md:py-4 md:text-lg shadow"
      >
        <span>Entre em contato</span>
        <BaseIcon icon="whatsapp" />
      </a>
    </article>
  </BaseContainer>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheInformationalVideo',
})
</script>
