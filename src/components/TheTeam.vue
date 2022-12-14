<template>
  <section
    class="flex flex-col items-center gap-12 text-center lg:flex-row-reverse"
  >
    <article
      class="flex flex-col items-center justify-between flex-1 gap-1 lg:gap-8"
    >
      <TheCrew />
      <span class="text-2xl font-bold text-gray-700 md:text-3xl">Nossos especialistas</span>
      <p class="text-center md:text-2xl">
        Nós da
        <span
          class="underline decoration-[#F4A261] decoration-2 decoration-wavy"
        >paranavai.app</span>
        temos uma equipe especialista em todo processo necessário para inserir
        sua empresa no meio digital e elevar os resultados da sua empresa ao
        nível máximo.
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
      <img
        draggable="false"
        width="620"
        class="rounded"
        loading="lazy"
        sizes="(max-width: 1240px) 100vw, 1240px"
        srcset="
          /images/team-328_x_226.png 328w,
          /images/team-380_x_263.png 380w,
          /images/team-472_x_326.png 472w,
          /images/team-600_x_415.png 600w,
          /images/team-620_x_429.png 620w,
          /images/team-656_x_454.png 656w,
          /images/team-760_x_525.png 760w,
          /images/team-944_x_653.png 944w,
          /images/team-1200_x_831.png 1200w,
          /images/team-1240_x_858.png 1240w"
        src="/images/team-620_x_429.png"
      >
      <!--
        / 328px x 227px when > 0w && <= 360w
        / 380px x 263px when > 361w && <= 412w
        / 620px x 429px when > 412w && <= 1023w
        / 472px x 327px when > 1023w && <= 1279w
        / 600px x 416px when > 1279w && <= 1536w
        / 620px x 429px when > 1536w

        DPR: 2.0
        / 656px x 454px when > 0w && <= 360w
        / 760px x 525px when > 361w && <= 412w
        / 1240px x 858px when > 412w && <= 1023w
        / 944px x 653px when > 1023w && <= 1279w
        / 1200px x 831px when > 1279w && <= 1536w
        / 1240px x 858px when > 1536w
      -->
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
      { src: '/images/team.png', alt: 'Core team' },
      { src: '/images/team-smilling.png', alt: 'Core team' },
    ]
    const changeImage = () => {
      return selectedImage.value ? 0 : 1
    }
    const heroImg = computed(() => {
      return images[selectedImage.value]
    })
    return { heroImg, images, changeImage }
  },
})
</script>
