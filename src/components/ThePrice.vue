<template>
  <section id="price" class="container p-4 m-auto my-8 text-gray-700">
    <h2 class="text-2xl text-center lg:text-5xl">
      <strong>Investimento mínimo, resultado máximo</strong>
    </h2>
    <section class="flex flex-col gap-4 mt-4 lg:gap-16 lg:flex-row">
      <article class="flex flex-col gap-4 mt-4 xl:w-1/2">
        <blockquote
          class="bg-gray-100 text-gray-500 p-4 border-l border-solid border-[#F4A261] text-center lg:text-2xl lg:text-start"
        >
          <i>“Eu não aguento mais não encontrar as empresas de Paranavaí no
            Google. E às vezes em que encontro, as informações estão
            desatualizadas.”</i>😪
          <span class="block text-gray-700">- Uma história baseada em fatos reais.</span>
        </blockquote>
        <section
          class="flex flex-col items-center justify-between gap-4 text-center lg:text-start lg:text-2xl lg:items-start"
        >
          <p>Quantas oportunidades como essa a sua empresa já perdeu?</p>
          <p>
            Iniciamos o projeto <strong>Startup Digital</strong> para a
            resolução desse problema.
          </p>
          <p>
            Aderindo a ele, garantiremos que seu negócio será encontrado por
            quem precisa de você.
          </p>
        </section>
      </article>
      <article
        class="flex flex-col items-center gap-8 py-6 mt-4 border border-gray-200 border-solid rounded-md xl:w-1/2"
      >
        <div class="flex flex-col items-center gap-2 text-center">
          <p class="font-bold">
            1 + 11x de
            <span class="text-4xl text-[#0D806E]" :class="$style.selectPrice">
              R$ 49,90</span>
          </p>
          <p class="font-medium">
            Neste pacote, você terá acesso por 12 meses à:
          </p>
        </div>
        <div class="flex items-center justify-center gap-2 max-w-[450px]">
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 22 16"
          >
            <path
              stroke="#0C7363"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1.667 9.182 7 14.515 20.333 1.182"
            />
          </svg>
          <span class="w-10/12 text-gray-500">
            Um gerente de conta que acompanhará o posicionamento digital da sua
            empresa e manterá seus dados atualizados;
          </span>
        </div>
        <div class="flex items-center justify-center gap-2 max-w-[450px]">
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 22 16"
          >
            <path
              stroke="#0C7363"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1.667 9.182 7 14.515 20.333 1.182"
            />
          </svg>
          <span class="w-10/12 text-gray-500">
            Uma página de links customizado para ajudar na centralização das
            suas informações e divulgação do seu negócio
          </span>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=5544920018161&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20maximizar%20os%20resultados%20do%20meu%20neg%C3%B3cio!"
          target="_blank"
          class="flex gap-2 items-center justify-center rounded-md bg-[#f4a261] duration-300 px-8 py-3 text-base font-medium text-gray-700 md:py-4 md:px-10 md:text-lg shadow shadow-[#f4a261] hover:bg-gradient-to-r from-[#f4a261] to-[#E76F51] w-[387px] max-w-[95%]"
        >Quero resultado máximo!
          <svg
            width="21"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.75 1h8m0 0v8m0-8-8 8-4-4-6 6"
              stroke="#3A3A3C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg></a>
      </article>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ThePrice',
})
</script>

<style lang="postcss" module>
.selectPrice::selection {
  color: #cc5f29;
}
</style>
