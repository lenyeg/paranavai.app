<template>
  <section
    class="bg-[#374151] bg-[url(/icons/outline-logo.svg)] bg-[length:40px_40px] bg-repeat-space py-16 px-4"
  >
    <article
      class="container mx-auto flex flex-col justify-center items-center gap-2"
    >
      <p class="uppercase font-medium text-gray-300">Startup digital</p>
      <p class="text-2xl text-gray-300 font-bold text-center">
        Nossa motivação e proposta
      </p>
      <div
        class="w-[343px] h-[603px] lg:w-[739px] lg:h-[422px] rounded-md bg-[#1F2937] flex justify-center items-center mt-9"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 65 65"
          class="w-16 h-16"
        >
          <rect width="64" height="64" x=".5" y=".849" fill="#9CA3AF" rx="32" />
          <path fill="#1F2937" d="m48.5 32.849-24 13.856V18.993l24 13.856Z" />
        </svg>
      </div>
      <a
        href=""
        class="flex gap-2 w-full items-center justify-center rounded-md border mt-9 max-w-[223px] border-transparent bg-white py-3 text-base font-medium text-gray-700 md:py-4 md:text-lg shadow"
        >Entre em contato</a
      >
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheInformationalVideo',
})
</script>
