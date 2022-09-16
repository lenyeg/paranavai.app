<template>
  <div
    id="about-us"
    class="container mx-auto my-8 flex flex-col justify-center items-center text-gray-500 gap-12"
  >
    <section
      class="w-11/12 text-center items-center flex flex-col gap-2 lg:w-full lg:flex-row lg:text-right"
    >
      <article
        class="flex flex-col justify-center items-center gap-2 lg:max-w-[50%] lg:text-2xl"
      >
        <p class="text-2xl text-gray-700 lg:text-3xl">
          <strong
            >Se eu procurar no Google um produto ou serviço que você oferece,
            vou encontrar sua empresa?</strong
          >
        </p>
        <p>
          Uma pesquisa encomendada pelo Google indicou que 96% dos brasileiros
          procuram por produtos ou serviços online.
        </p>
        <p>
          Esteja bem posicionado no buscador e seja encontrado por pessoas que
          precisam dos seus produtos/serviços próximo a você.
        </p>
      </article>
      <article class="lg:w-1/3">
        <img
          src="/images/about-one.svg"
          alt="Imagem de um homem com duvidas"
          width="279"
          height="257"
          class="m-auto w-10/12 max-h-[280px]"
        />
      </article>
    </section>
    <section
      class="w-11/12 text-center items-center flex flex-col gap-2 lg:w-full lg:flex-row-reverse lg:text-left"
    >
      <article
        class="flex flex-col justify-center items-center gap-2 lg:max-w-[50%] lg:text-2xl"
      >
        <p class="text-2xl text-gray-700 lg:text-3xl">
          <strong
            >Se eu procurar no Google um produto ou serviço que você oferece,
            vou encontrar sua empresa?</strong
          >
        </p>
        <p>
          Uma pesquisa encomendada pelo Google indicou que 96% dos brasileiros
          procuram por produtos ou serviços online.
        </p>
        <p>
          Esteja bem posicionado no buscador e seja encontrado por pessoas que
          precisam dos seus produtos/serviços próximo a você.
        </p>
      </article>
      <article class="lg:w-1/3">
        <img
          src="/images/about-two.svg"
          alt="Imagem de uma mulher olhando avaliações"
          width="279"
          height="257"
          class="m-auto w-10/12 max-h-[280px]"
        />
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheAboutUs',
})
</script>
