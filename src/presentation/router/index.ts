import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: () => import('../views/auth/RegisterView.vue')
    },
    {
      path: '/app',
      name: 'Blog',
      component: () => import('../views/blog/BlogView.vue')
    }
    
  ]
})

export default router
