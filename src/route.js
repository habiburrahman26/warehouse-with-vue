import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/home', redirect: '/' },
    { path: '/addItem', component: Home },
    { path: '/manageItem', component: Home },
    { path: '/myItem', component: Home },
  ],
});

export default router;
