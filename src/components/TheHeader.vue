<template>
  <div class="relative container">
    <div class="relative pt-6 pb-16 sm:pb-24">
      <Popover>
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
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

      <main class="mx-auto mt-16 container px-4 sm:mt-24">
        <div class="text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span class="block">O mundo evoluiu,</span>
            {{ ' ' }}
            <span class="block">é a vez de Paranavaí.</span>
          </h1>
          <p
            class="mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
          >
            Estamos digitalizando a nossa cidade! Vá além da presença física e
            seja encontrado por quem precisa de você.
          </p>
          <div class="mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a
                href="#"
                class="flex gap-2 w-full items-center justify-center rounded-md border border-transparent bg-[#f4a261] px-8 py-3 text-base font-medium text-gray-700 md:py-4 md:px-10 md:text-lg shadow-md shadow-[#f4a261]"
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
          <img
            src="/images/header.svg"
            width="345"
            height="208"
            alt=""
            class="mt-5 w-full"
          />
        </div>
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
