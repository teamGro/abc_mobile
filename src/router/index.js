import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import Question from '@/pages/QuestionPage.vue';

const history = createWebHistory();
const routes = [
  {
    name: 'main',
    path: '/',
    component: MainPage,
  },
  {
    name: 'question',
    path: '/question/:id',
    component: Question,
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;
