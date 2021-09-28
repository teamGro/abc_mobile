import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';

const history = createWebHistory();
const routes = [
  {
    name: 'main',
    path: '/',
    component: MainPage,
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;
