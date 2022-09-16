<template>
  <div class="relative container mx-auto">
    <div class="relative pt-6 pb-16 sm:pb-24">
      <Popover>
        <div class="mx-auto px-4 sm:px-6">
          <nav
            class="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
          >
            <div class="flex flex-1 items-between md:inset-y-0 md:left-0">
              <div class="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                  <span class="sr-only">Paranavai.app</span>
                  <img
                    class="h-8 w-auto sm:h-10"
                    src="/images/logo.svg"
                    alt=""
                    width="200px"
                    heigth="32px"
                  />
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton
                    class="inline-flex items-center justify-center rounded-md bg-[#0D806E] p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#86C0B7]"
                  >
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
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
                >{{ item.name }}</a
              >
            </div>
          </nav>
        </div>

        <transition
          enter-active-class="duration-150 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div
              class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5"
            >
              <div class="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="/images/logo.svg"
                    alt="Paranavai.app"
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="inline-flex items-center justify-center rounded-md bg-[#0D806E] p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#86C0B7]"
                  >
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main
        class="container mx-auto sm:mt-24 flex flex-col justify-center items-center mt-16 px-4 lg:flex-row lg:justify-between"
      >
        <div class="flex flex-col items-center gap-4 lg:items-start">
          <h1
            class="flex flex-col items-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:items-start lg:max-w-[50%] xl:max-w-[595px]"
          >
            <span class="block lg:text-start lg:text-5xl"
              >O mundo evoluiu,</span
            >
            {{ ' ' }}
            <span class="block lg:text-start lg:text-5xl"
              >é a vez de Paranavaí.</span
            >
          </h1>
          <p
            class="mx-auto mt-3 text-base text-gray-500 text-center sm:text-lg md:mt-5 lg:max-w-md md:text-xl lg:text-start lg:mx-0"
          >
            Estamos digitalizando a nossa cidade! <br />
            Vá além da presença física e seja encontrado por quem precisa de
            você.
          </p>
          <div class="mx-auto sm:flex sm:justify-center lg:mx-0 md:mt-8">
            <div class="rounded-md shadow">
              <a
                href="#"
                class="flex gap-2 w-full items-center justify-center rounded-md border border-transparent bg-[#f4a261] px-8 py-3 text-base font-medium text-gray-700 md:py-4 md:px-10 md:text-lg shadow shadow-[#f4a261]"
                >Saiba mais
                <svg
                  width="10"
                  height="20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m9 15-4 4m0 0-4-4m4 4V1"
                    stroke="#3A3A3C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <img
          src="/images/header.svg"
          width="345"
          height="208"
          alt=""
          class="min-w-full max-w-full lg:min-w-0 lg:w-[60%] xl:w-[595px] 2xl:w-[724px]"
        />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TheHeader',
})
</script>

<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline/index.js'

const navigation = [
  { name: 'Quem somos', href: '#' },
  { name: 'Preço', href: '#' },
  { name: 'Perguntas frequentes', href: '#' },
]
</script>
