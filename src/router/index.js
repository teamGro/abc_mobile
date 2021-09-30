import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import QuestionPage from '@/pages/QuestionPage.vue';
import RecordAudioMessagPage from '@/pages/RecordAudioMessagePage.vue';
import LastPage from '@/pages/LastPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import config from '../../vue.config';

const history = createWebHistory(config.publicPath);
const routes = [
  {
    name: 'main',
    path: '/',
    component: MainPage,
    meta: { transition: 'slide-left' },
  },
  {
    name: 'question',
    path: '/question/:id',
    component: QuestionPage,
    meta: { transition: 'slide-left' },
  },
  {
    name: 'audioMesage',
    path: '/audio',
    component: RecordAudioMessagPage,
    meta: { transition: 'slide-left' },
  },
  {
    name: 'last',
    path: '/finish',
    component: LastPage,
    meta: { transition: 'slide-left' },
  },
  {
    name: 'notFound',
    path: '/:notFound(.*)',
    component: NotFoundPage,
    meta: { transition: 'slide-left' },
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;
