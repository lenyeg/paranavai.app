<template>
  <section class="relative">
    <BaseContainer>
      <div class="relative pt-6 sm:pb-24">
      <Popover>
        <div class="px-4 mx-auto sm:px-6">
          <nav
            class="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
          >
            <div class="flex flex-1 items-between md:inset-y-0 md:left-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">Paranavai.app</span>
                  <img
                    class="w-auto h-8 sm:h-10"
                    src="/images/logo.svg"
                    alt=""
                    width="200"
                    heigth="32"
                  >
                </a>
                <div class="flex items-center -mr-2 md:hidden">
                  <PopoverButton
                    class="inline-flex items-center justify-center rounded-md bg-[#0D806E] p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#86C0B7]"
                  >
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="w-6 h-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div class="hidden md:flex md:space-x-10">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="relative font-medium text-gray-700 before:content-[''] before:absolute before:bottom-0 before:w-full before:origin-center before:scale-x-0 before:hover:scale-x-100 before:h-[2px] before:bg-[#F4A261] hover:before: before:duration-300"
              >{{ item.name }}</a>
            </div>
          </nav>
        </div>

        <transition
          enter-active-class="duration-150 ease-out"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <PopoverPanel
            focus
            class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
          >
            <div
              class="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5"
            >
              <div class="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    class="w-auto h-8"
                    src="/images/logo.svg"
                    alt="Paranavai.app"
                  >
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="inline-flex items-center justify-center rounded-md bg-[#0D806E] p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#86C0B7]"
                  >
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="w-6 h-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-gray-900"
                >{{ item.name }}</a>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main
        class="container flex flex-col items-center justify-center gap-4 px-4 mx-auto mt-16 sm:mt-24 lg:flex-row lg:justify-between"
      >
        <div class="flex flex-col items-center gap-4 lg:items-start">
          <h1
            class="flex flex-col items-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:items-start lg:max-w-[50%] xl:max-w-[595px]"
          >
            <span class="block lg:text-start lg:text-5xl">O mundo evoluiu,</span>
            {{ ' ' }}
            <span class="block lg:text-start lg:text-5xl">é a vez de Paranavaí.</span>
          </h1>
          <p
            class="mx-auto mt-3 text-base text-center text-gray-500 sm:text-lg md:mt-5 lg:max-w-md md:text-xl lg:text-start lg:mx-0"
          >
            Estamos digitalizando a nossa cidade! <br>
            Vá além da presença física e seja encontrado por quem precisa de
            você.
          </p>
          <div class="mx-auto sm:flex sm:justify-center lg:mx-0 md:mt-8">
            <div class="rounded-md shadow">
              <a
                href="/#about-us"
                class="flex gap-2 w-full items-center justify-center rounded-md bg-[#f4a261] duration-300 px-8 py-3 text-base font-medium text-gray-700 md:py-4 md:px-10 md:text-lg shadow shadow-[#f4a261] hover:bg-gradient-to-r from-[#f4a261] to-[#E76F51]"
              >
                <span>Saiba mais</span>
                <BaseIcon icon="arrow-down" />
              </a>
            </div>
          </div>
        </div>
        <div
          class="min-w-full max-w-full lg:min-w-0 lg:w-[60%] xl:w-[595px] 2xl:w-[724px]"
        >
          <img
            src="/images/header.svg"
            width="468"
            height="360"
            alt=""
          >
        </div>
      </main>
    </div>
    </BaseContainer>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline/index.js'

defineComponent({
  name: 'TheHeader',
})

const navigation = [
  { name: 'Quem somos', href: '/#about-us' },
  { name: 'Preço', href: '/#price' },
  { name: 'Perguntas frequentes', href: '/#faq' },
]
</script>

<style scoped>
section {
  background: linear-gradient(180deg, #cfe6e2 0%, #fff 100%);
}
</style>
