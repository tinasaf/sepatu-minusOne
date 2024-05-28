import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/SepatuView.vue')
    },
    {
      path: '/sepatu',
      name: 'halamansepatu',
      component: () => import('../views/SepatuView.vue')
    }
  ]
})

export default router
