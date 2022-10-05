<template>
  <section class="flex flex-col gap-12 items-center text-center lg:flex-row">
    <section class="flex flex-col justify-center items-center gap-4 flex-1 lg:text-2xl">
      <slot name="text"></slot>
    </section>
    <section class="flex items-center justify-center flex-1">
      <slot name="image"></slot>
    </section>
  </section>
</template>