<template>
  <section class="relative backgorund">
    <BaseContainer>
      <div class="relative py-6">
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

        <BaseContainer>
          <section
            class="flex flex-col justify-center gap-8 mt-16 sm:mt-24 lg:flex-row lg:justify-between"
          >
            <div class="flex flex-col items-center flex-1 gap-6 lg:items-start">
              <h1
                class="flex text-5xl font-black -tracking-[0.03em] text-center text-gray-700 lg:text-4xl xl:text-5xl lg:text-left"
              >
                O mundo evoluiu,<br>é a vez de Paranavaí.
              </h1>
              <p
                class="mx-auto text-base text-center max-w-[35ch] text-gray-500 sm:text-lg md:text-xl lg:text-start lg:mx-0"
              >
                Estamos digitalizando a nossa cidade! <br>
                Vá além da presença física e seja encontrado por quem precisa de
                você.
              </p>
              <div class="mx-auto sm:flex sm:justify-center lg:mx-0">
                <BaseButton icon="arrow-down" href="/#about-us">
                  Saiba mais
                </BaseButton>
              </div>
            </div>
            <div
              class="flex justify-end flex-1"
            >
              <img
                src="/images/header.svg"
                width="468"
                height="360"
                alt=""
                class="object-cover w-full h-auto"
              >
            </div>
          </section>
        </BaseContainer>
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
.backgorund {
  background: linear-gradient(180deg, #cfe6e2 0%, #fff 100%);
}
</style>
