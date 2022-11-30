<template>
  <section class="flex justify-center items-center w-full">
    <div class="flex justify-center items-center bg-gradient-to-r from-[#E76F51] via-[#F4A261] to-[#E9C46A] p-1 rounded-full">
      <img src="/images/team-1.png" alt="" width="50" height="50" class="w-[50px] h-[50px] rounded-full">
      <div>
        <span>André Vandal</span>
        <span>CEO</span>
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
      { src: '/images/self-1.png', alt: 'Core team', name: 'André Vandal', desc: 'CEO', openned: false },
      { src: '/images/self-2.png', alt: 'Core team', name: 'Ana C Longini', desc: 'PM', openned: false },
      { src: '/images/self-3.png', alt: 'Core team', name: 'Pedro Henrique', desc: 'Design', openned: false  },
      { src: '/images/self-4.png', alt: 'Core team', name: 'Lucas Ribeiro', desc: 'Web Developer', openned: false  }
    ]

    return { lenyegers }
  },
})
</script>
