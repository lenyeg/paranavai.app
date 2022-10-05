<template>
  <BaseContainer>
    <div
    id="about-us"
    class="flex flex-col items-center justify-center gap-12 my-8 text-gray-500"
  >
    <section
      class="flex flex-col items-center w-11/12 gap-2 text-center lg:w-full lg:flex-row lg:text-right"
    >
      <article
        class="flex flex-col justify-center items-center gap-2 lg:max-w-[50%] lg:text-2xl"
      >
        <p class="text-2xl text-gray-700 lg:text-3xl">
          <strong>Se eu procurar no Google um produto ou serviço que você oferece,
            vou encontrar sua empresa?</strong>
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
      <article class="lg:w-full">
        <img
          src="/images/about-one.svg"
          alt="Imagem de um homem com duvidas"
          width="279"
          height="257"
          class="m-auto w-10/12 max-h-[280px]"
        >
      </article>
    </section>
    <section
      class="flex flex-col items-center w-11/12 gap-2 text-center lg:w-full lg:flex-row-reverse lg:text-left"
    >
      <article
        class="flex flex-col justify-center items-center gap-2 lg:max-w-[50%] lg:text-2xl"
      >
        <p class="text-2xl text-gray-700 lg:text-3xl">
          <strong>As pessoas conhecem o nível de excelência do seu atendimento,
            produto ou serviço?</strong>
        </p>
        <p>
          Ter boas avaliações no Google é fundamental para que seu negócio ocupe
          as primeiras posições no buscador.
        </p>
        <p>
          Além disso, pessoas que precisam dos seus produtos/serviços e não
          conhecem sua empresa, se guiam através das avaliações para fechar
          negócio.
        </p>
      </article>
      <article class="lg:w-1/3">
        <img
          src="/images/about-two.svg"
          alt="Imagem de uma mulher olhando avaliações"
          width="279"
          height="257"
          class="m-auto w-10/12 max-h-[280px]"
        >
      </article>
    </section>
  </div>
  </BaseContainer>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheAboutUs',
})
</script>
