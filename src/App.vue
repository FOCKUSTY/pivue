<script lang="ts" setup>
import { ref } from "vue";
const count = ref<number>(0);
const currentYear = new Date().getFullYear();
const startYear = 2026;

const getYear = () => {
  if (startYear === currentYear) {
    return startYear;
  }

  return `${startYear}-${currentYear}`;
};

const increment = () => {
  count.value++;
};
</script>

<template>
  <header class="bg-(--bg-layout) rounded-b-3xl flex gap-2 py-2 px-4 h-16">
    <div>
      <h2>Pivue</h2>
    </div>
  </header>

  <main class="flex flex-1 flex-col w-full justify-center items-center">
    <div class="h-48">
      <img
        src="/pivo.svg"
        alt="pivo"
        class="h-48 active:h-40 transition-all duration-200 aspect-cubic cursor-pointer noselect"
        @click="increment"
      />
    </div>

    <span>Нажато: {{ count }}</span>
  </main>

  <footer class="bg-(--bg-layout) rounded-t-3xl flex gap-2 py-4 px-2 h-fit">
    <span>© {{ getYear() }} The Void Community</span>
    <span>
      AND ВЕЛИКИЙ ЛЮБИТЕЛЬ 3.14ВА:
      <a target="_blank" href="https://lanvalird.ru">lanvalird</a>
    </span>
  </footer>
</template>
