<template>
  <section
    class="container overflow-x-hidden transition-all duration-300 ease-linear"
  >
    <div class="flex justify-center items-center -space-x-4">
      <div
        v-for="(item, index) in lenyegers"
        :key="`worker-${index}`"
        class="cursor-pointer bg-gradient-to-r from-[#E76F51] via-[#F4A261] to-[#E9C46A] p-1 rounded-full transition-all duration-300"
        @click="selectItem(index)"
      >
        <div
          class="flex justify-center items-center object-scale-down gap-2 min-w-max"
        >
          <img
            draggable="false"
            :src="item.src"
            alt=""
            width="85"
            height="85"
            class="w-[50px] h-[50px] lg:w-[85px] lg:h-[85px] rounded-full bg-[#288877]"
          >
          <Transition
            enter-active-class="duration-150 ease-in-out origin-left transition-all"
            enter-from-class="scale-x-0 opacity-0"
            enter-to-class="scale-x-100 opacity-100"
            leave-active-class="duration-300 ease-in-out origin-left transition-all"
            leave-from-class="scale-x-100 opacity-100"
            leave-to-class="scale-x-0 opacity-0"
            appear
          >
            <div
              v-show="item.opened"
              class="flex flex-col justify-center items-center pr-6 text-gray-800"
            >
              <span class="whitespace-nowrap font-bold">{{ item.name }}</span>
              <span>{{ item.desc }}</span>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

// TODO: suavizar a animação, o bloco tem que terminar de alterar o width para depois fazer o conteudo aparecer

export default defineComponent({
  name: 'TheTeam',
  setup () {
    let lenyegers = reactive([
      {
        src: '/images/ceo.png',
        alt: 'Core team',
        name: 'André Vandal',
        desc: 'CEO',
        opened: false,
      },
      {
        src: '/images/pm.png',
        alt: 'Core team',
        name: 'Ana Longhini',
        desc: 'Product Manager',
        opened: false,
      },
      {
        src: '/images/gd.png',
        alt: 'Core team',
        name: 'Pedro Henrique',
        desc: 'UI/UX Graphic',
        opened: false,
      },
      {
        src: '/images/fed.png',
        alt: 'Core team',
        name: 'Lucas Ribeiro',
        desc: 'Front-end Developer',
        opened: false,
      },
    ])

    const selectItem = (selectedIndex) => {
      const itemAlreadySelectedIndex = lenyegers.findIndex(el => el.opened)

      lenyegers = lenyegers.map((el) => {
        el.opened = false
        return el
      })
      if (itemAlreadySelectedIndex !== selectedIndex) {
        setTimeout(() => (lenyegers[selectedIndex].opened = true), 350)
      }
    }

    return { lenyegers, selectItem }
  },
})
</script>
