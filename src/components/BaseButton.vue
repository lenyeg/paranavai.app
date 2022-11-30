<template>
  <a :class="classList">
    <span class="z-1">
      <slot />
    </span>
    <BaseIcon :icon="icon" />
  </a>
</template>

<script lang="ts" setup>
import { useCssModule } from 'vue'

const $style = useCssModule()

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  narrow: {
    type: Boolean,
    default: false
  }
})

const classList = [[$style.button], {
  [$style['button--narrow']]: props.narrow
}]
</script>

<style lang="postcss" module>
.button {
  @apply flex w-full items-center justify-center gap-2 rounded-md px-8 py-3 text-base font-medium text-gray-700 whitespace-nowrap md:py-4 md:px-10 md:text-lg;
  @apply relative before:bg-gradient-to-r before:to-[#F4A261] before:via-[#F4A261] before:from-[#E9C46A];
  @apply before:absolute before:left-[-4px] before:top-[-4px] before:right-[-4px] before:bottom-[-4px] before:rounded-[10px];
  @apply shadow-orange-spring hover:shadow-none hover:before:shadow-orange-spring;
  @apply bg-orange-spring bg-size-200 bg-pos-0 hover:bg-pos-100 before:opacity-0 hover:before:opacity-60;
  @apply transition-all before:transition-all duration-300 before:duration-300 ease-linear before:ease-linear;

  span,
  svg {
    @apply relative z-10;
  }

  &--narrow {
    @apply w-[387px] max-w-[95%]
  }
}
</style>
