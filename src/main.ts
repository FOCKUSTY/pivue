import "./assets/main.css";

import { createApp } from "vue";

import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import App from "./App.vue";
import PageHome from "./pages/PageHome.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => PageHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
