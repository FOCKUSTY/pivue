<script lang="ts" setup>
const currentYear = new Date().getFullYear();
const startYear = 2026;

const getYear = () => {
  if (startYear === currentYear) {
    return startYear;
  }

  return `${startYear}-${currentYear}`;
};
</script>

<template>
  <header class="bg-(--bg-layout) rounded-b-3xl flex gap-2 py-2 px-4 h-16">
    <div>
      <h2>Pivue</h2>
    </div>
  </header>

  <main class="flex flex-1 py-2 px-4 flex-col w-full">
    <RouterView />
  </main>

  <footer
    class="bg-(--bg-layout) rounded-t-3xl flex flex-col gap-1 py-4 px-2 h-fit"
  >
    <span>© {{ getYear() }} The Void Community</span>
    <span>
      + ВЕЛИКИЙ ЛЮБИТЕЛЬ 3.14ВА:
      <a target="_blank" href="https://lanvalird.ru">lanvalird</a>
    </span>
  </footer>
</template>
