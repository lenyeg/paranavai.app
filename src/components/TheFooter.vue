<template>
  <footer class="py-4 text-white bg-gray-700 lg:pt-20">
    <BaseContainer>
      <div class="flex justify-between lg:flex-row-reverse">
        <div class="flex flex-col gap-6 lg:flex-row">
          <a
            href="/#about-us"
            class="relative font-medium text-white before:content-[''] before:absolute before:bottom-0 before:w-full before:origin-center before:scale-x-0 before:hover:scale-x-100 before:h-[2px] before:bg-[#F4A261] hover:before: before:duration-300"
          >Quem somos</a>
          <a
            href="/#price"
            class="relative font-medium text-white before:content-[''] before:absolute before:bottom-0 before:w-full before:origin-center before:scale-x-0 before:hover:scale-x-100 before:h-[2px] before:bg-[#F4A261] hover:before: before:duration-300"
          >Preço</a>
          <a
            href="/#faq"
            class="relative font-medium text-white before:content-[''] before:absolute before:bottom-0 before:w-full before:origin-center before:scale-x-0 before:hover:scale-x-100 before:h-[2px] before:bg-[#F4A261] hover:before: before:duration-300"
          >Perguntas frequentes</a>
        </div>
        <div class="flex flex-col gap-3 lg:flex-row lg:gap-6">
          <a
            href="https://www.facebook.com/paranavaiapp/"
            target="_blank"
          >
            <BaseIcon icon="facebook" title="Facebook" size="lg" class="text-white hover:text-[#f4a261]" />
          </a>
          <a
            href="https://www.instagram.com/paranavai.app/"
            target="_blank"
          >
            <BaseIcon icon="instagram" title="Instagram" size="lg" class="text-white hover:text-[#f4a261]" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5544920018161&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20maximizar%20os%20resultados%20do%20meu%20neg%C3%B3cio!"
            target="_blank"
          ><BaseIcon icon="whatsapp" title="WhatsApp" size="lg" class="text-white hover:text-[#f4a261]" /></a>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center w-10/12 pb-8 m-auto my-4 text-center border-b-2 border-gray-800 border-solid lg:flex-row lg:justify-between lg:w-full"
      >
        <div class="my-4 text-center text-gray-200 lg:text-start">
          <p>2022 &copy; Lenyeg Ltda. Todos os direitos reservados.</p>
          <p>CNPJ: 23.018.045/0001-99</p>
        </div>
        <a href="/" class="transition-all duration-300 brightness-0 invert hover:invert-0 hover:brightness-100">
          <img src="/images/logo-white.svg" width="250" alt="">
        </a>
      </div>
      <p class="text-center lg:my-4 lg:mt-8">
        Feito com 💚 e ☕️ pela Lenyeg
      </p>
    </BaseContainer>
  </footer>
</template>
