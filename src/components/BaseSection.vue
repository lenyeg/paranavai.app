<template>
  <section class="flex flex-col items-center gap-12 text-center lg:flex-row">
    <section class="flex flex-col items-center justify-center flex-1 gap-4 lg:text-2xl">
      <slot name="text" />
    </section>
    <section class="flex items-center justify-center flex-1">
      <slot name="image" />
    </section>
  </section>
</template>
