<template>
  <BaseContainer >
    <div
      class="flex flex-col items-center justify-center py-8 m-auto text-gray-800"
    >
      <h2 class="px-4 text-center text-gray-700 lg:text-2xl lg:px-0">
        Faça como eles e seja encontrado:
      </h2>
      <div
        class="flex w-full gap-4 p-4 overflow-x-scroll scroll-p-3 snap-mandatory snap-x touch-pan-x lg:snap-none lg:overflow-auto lg:px-0 lg:justify-between xl:max-w-[80%]"
      >
        <div
          v-for="customer in customers"
          :key="customer"
          class="flex flex-col justify-center items-center gap-4 snap-start text-center bg-[#FAD1B0] rounded-md min-w-[120px] h-[40px]"
        >
          Empresa {{ customer }}
        </div>
      </div>
    </div>
  </BaseContainer>

</template>

<script lang="ts" setup>

defineComponent({
  name: 'TheCustomers',
})

const customers = Array.from({ length: 6 }, (_, i) => i + 1)
</script>
