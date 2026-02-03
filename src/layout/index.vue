<template>
  <component :is="layoutComponent" />
</template>

<script lang="ts">
import LayoutDefault from "./LayoutDefault.vue";

export default {
  name: "LayoutComponent",
  components: {
    LayoutDefault,
  },
  computed: {
    layoutComponent() {
      return `layout-${this.layoutType}`;
    },

    routeHaveLayoutType() {
      return this.$route.meta && "layout" in this.$route.meta;
    },

    layoutType() {
      if (this.routeHaveLayoutType) {
        return this.$route.meta.layout;
      }

      return "default";
    },
  },
};
</script>
