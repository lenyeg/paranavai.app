<template>
  <BaseContainer>
    <div
      id="about-us"
      class="flex flex-col items-center justify-center my-16 text-gray-500 lg:my-32 gap-x-8 gap-y-16"
    >
      <BaseSection>
        <template #text>
          <p class="text-2xl font-bold text-gray-700 lg:text-3xl">
            Se eu procurar no Google um produto ou serviço que você oferece,
            vou encontrar sua empresa?
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
      <section class="lg:flex-row-reverse lg:text-left">
        <!-- vai estar aqui -->
        <TheTeam />
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
