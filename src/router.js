import { createRouter, createWebHistory } from "vue-router";

import Index from "./pages/index.vue";
import character from "./pages/character.vue";
import NotFound from "./pages/404.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/character/:id",
    name: "character",
    component: character,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
