import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import Question from '@/pages/QuestionPage.vue';
import RecordAudioMessage from '@/pages/RecordAudioMessagePage.vue';
import LastPage from '@/pages/LastPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

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
  {
    name: 'audioMesage',
    path: '/audio',
    component: RecordAudioMessage,
  },
  {
    name: 'last',
    path: '/finish',
    component: LastPage,
  },
  {
    name: 'notFound',
    path: '/:notFound(.*)',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;
