import Home from '../view/home.vue';
import {
  createWebHistory,
  createRouter
} from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router