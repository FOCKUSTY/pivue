<script setup lang="ts">
import { ref } from "vue";
const count = ref<number>(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <section class="flex flex-col h-full w-full items-center justify-center">
    <div class="flex items-center justify-center h-48 aspect-cubic">
      <img
        src="/pivo.svg"
        alt="pivo"
        class="h-48 active:h-40 transition-all duration-200 aspect-cubic cursor-pointer noselect"
        @click="increment"
      />
    </div>

    <span>Нажато: {{ count }}</span>
  </section>

  <div class="flex flex-col text-mini">
    <span class="text-xs">Примечание</span>
    <span>Разработчик: The Void Community</span>
    <span>Идея: Valentin Bird</span>
  </div>

  <span class="text-xs">From LAF with love</span>
</template>
