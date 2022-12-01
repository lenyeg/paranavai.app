<template>
  <section class="container overflow-x-hidden">
    <div class=" flex justify-center items-center -space-x-4">
      <div
        v-for="item in lenyegers"
        :key="item.src"
        class="inline-block bg-gradient-to-r from-[#E76F51] via-[#F4A261] to-[#E9C46A] p-1 rounded-full"
      >
        <div class="flex justify-center items-center object-scale-down gap-2 min-w-max">
          <img :src="item.src" alt="" width="50" height="50" class="w-[50px] h-[50px] rounded-full">
          <div class="flex flex-col pr-6">
            <span class="whitespace-nowrap">André Vandal</span>
            <span>CEO</span>
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
      { src: '/images/team-2.png', alt: 'Core team', name: 'André Vandal', desc: 'CEO', openned: false },
      { src: '/images/team-2.png', alt: 'Core team', name: 'Ana C Longini', desc: 'PM', openned: false },
      { src: '/images/team-2.png', alt: 'Core team', name: 'Pedro Henrique', desc: 'Design', openned: false },
      { src: '/images/team-2.png', alt: 'Core team', name: 'Lucas Ribeiro', desc: 'Web Developer', openned: false }
    ]

    return { lenyegers }
  },
})
</script>
