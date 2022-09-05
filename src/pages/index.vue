<template>
  <div :class="$style.helloWorld">
    <h1>{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
})
</script>

<script lang="ts" setup>
const name = 'Hello world!'
</script>

<style module>
.helloWorld {
  @apply h-screen w-screen flex items-center justify-center overflow-hidden;

  h1 {
    @apply text-3xl font-bold;
  }
}
</style>
