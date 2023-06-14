import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/billetterie',
    name: 'Billetterie',
    component: () => import('../views/Ticketing.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/currently',
    name: 'currently',
    component: () => import('../views/CurrentlyView.vue') 
  },
  {
    path: '/expos',
    name: 'expos',
    component: () => import('../views/Expos.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/FindUs.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
