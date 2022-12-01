<template>
  <section class="container overflow-x-hidden">
    <div class=" flex justify-center items-center -space-x-4">
      <div
        v-for="item in lenyegers"
        :key="item.src"
        class="inline-block bg-gradient-to-r from-[#E76F51] via-[#F4A261] to-[#E9C46A] p-1 rounded-full"
        @click="showInfoEmployee()"
      >
        <div class="flex justify-center items-center object-scale-down gap-2 min-w-max">
          <img
            draggable="false"
            :src="item.src"
            alt=""
            width="85"
            height="85"
            class="w-[50px] h-[50px] lg:w-[85px] lg:h-[85px] rounded-full bg-[#288877]"
          >
          <div v-show="item.openned" class="flex flex-col justify-center items-center pr-6 text-gray-800">
            <span class="whitespace-nowrap font-bold">{{ item.name }}</span>
            <span>{{ item.desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TheTeam',
  setup () {
    const lenyegers = [
      { src: '/images/ceo.png', alt: 'Core team', name: 'André Vandal', desc: 'CEO', openned: false },
      { src: '/images/pm.png', alt: 'Core team', name: 'Ana Longhini', desc: 'Product Manager', openned: false },
      { src: '/images/gd.png', alt: 'Core team', name: 'Pedro Henrique', desc: 'UI/UX Graphic', openned: false },
      { src: '/images/fed.png', alt: 'Core team', name: 'Lucas Ribeiro', desc: 'Front-end Developer', openned: false }
    ]

    const showInfoEmployee = () => {
      alert('funcionei')
    }

    return { lenyegers, showInfoEmployee }
  },
})
</script>
