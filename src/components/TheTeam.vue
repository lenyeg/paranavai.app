<template>
  <section class="flex flex-col items-center gap-12 text-center lg:flex-row-reverse">
    <article class="flex flex-col items-center justify-center gap-4 flex-1">
      <TheCrew />
      <span class="font-bold text-2xl text-gray-700 md:text-3xl">Nossos especialistas</span>
      <p class="text-center md:text-2xl">
        Nós da paranavai.app temos uma equipe especialista em todo processo necessário para inserir sua empresa no meio
        digital e elevar os resultados da sua empresa ao nível máximo.
      </p>
      <BaseButton
        icon="click"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5544920018161&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20maximizar%20os%20resultados%20do%20meu%20neg%C3%B3cio!"
      >
        Quero ser encontrado!
      </BaseButton>
    </article>
    <article class="flex items-center justify-center flex-1">
      <img draggable="false" :src="heroImg.src" width="620" class="rounded" @click="changeImage()">
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  name: 'TheTeam',
  setup () {
    const selectedImage = ref(0)

    const images = [
      { src: '/images/team-1.png', alt: 'Core team' },
      { src: '/images/team-2.png', alt: 'Core team' },
    ]
    const changeImage = () => {
      console.log()
      return selectedImage.value ? 0 : 1
    }
    const heroImg = computed(() => {
      return images[selectedImage.value]
    })
    return { heroImg, images, changeImage }
  },
})
</script>
