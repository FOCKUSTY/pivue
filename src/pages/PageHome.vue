<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
const count = ref<number>(0);
const pivo = useTemplateRef("pivo");
const pivoEmpty = useTemplateRef("pivoEmpty");
const text = ref<string>(`Нажато: ${count.value}`);

const random = () => {
  return Math.round(Math.random() * 100);
};

const increment = () => {
  count.value++;
  text.value = `Нажато: ${count.value}`;
};

const drinkPivo = () => {
  if (!pivo.value || !pivoEmpty.value) {
    return;
  }

  if (random() > 3) {
    return;
  }

  pivo.value.style.height = "0px";
  pivo.value.style.opacity = "0";
  pivoEmpty.value.style.display = "";
  pivoEmpty.value.style.opacity = "1";

  text.value = "Вы случайно выпили пиво! Сейчас нальём новое!";

  setTimeout(() => {
    if (!pivo.value || !pivoEmpty.value) {
      return;
    }

    pivoEmpty.value.style.display = "none";
    pivoEmpty.value.style.opacity = "0";
    pivo.value.style.height = "";
    pivo.value.style.opacity = "";

    text.value = "Нажато: " + count.value;
  }, 2000);
};
</script>

<template>
  <section class="flex flex-col h-full w-full items-center justify-center">
    <div class="flex items-end justify-center h-48 aspect-cubic">
      <img
        src="/pivo-empty.svg"
        alt="pivo"
        ref="pivoEmpty"
        class="absolute h-48 transition-all duration-200 aspect-cubic noselect"
        style="opacity: 0"
      />

      <img
        src="/pivo.svg"
        alt="pivo"
        ref="pivo"
        class="z-1 h-48 active:h-40 transition-all duration-200 cursor-pointer noselect"
        @click="
          () => {
            increment();
            drinkPivo();
          }
        "
      />
    </div>

    <span>{{ text }}</span>
  </section>

  <div class="flex flex-col text-mini">
    <span class="text-xs">Примечание</span>
    <span>Разработчик: The Void Community</span>
    <span>Идея: Valentin Bird</span>
  </div>

  <span class="text-xs">From LAF with love</span>
</template>
