import { createRouter, createWebHistory } from "@ionic/vue-router";
import MemoriesPage from "../Pages/MemoriesPage.vue";
const routes = [
  {
    path: "/",
    redirect: "/memories",
  },
  {
    path: "/memories",
    component: MemoriesPage,
  },
  {
    path: "/memories/:id",
    component: () => import("../Pages/MemoryDetailsPage.vue"),
  },
  {
    path: "/memories/add",
    component: () => import("../Pages/AddMemoryPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
