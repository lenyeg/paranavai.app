<template>
  <BaseContainer>
    <div
      id="about-us"
      class="flex flex-col items-center justify-center gap-12 my-8 text-gray-500"
    >
      <BaseSection class="lg:text-right">
        <template #text>
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
        </template>
        <template #image>
          <img
            src="/images/about-one.svg"
            alt="Imagem de um homem com duvidas"
            width="370"
            height="257"
            class="object-cover"
          >
        </template>
      </BaseSection>
      <BaseSection class="lg:flex-row-reverse lg:text-left">
        <template #image>
          <img
            src="/images/about-two.svg"
            alt="Imagem de uma mulher olhando avaliações"
            width="400"
            height="257"
            class="object-cover"
          >
        </template>
        <template #text>
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
        </template>
      </BaseSection>
    </div>
  </BaseContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheAboutUs',
})
</script>
