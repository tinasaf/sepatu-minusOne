import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParentComponent from '../components/ParentComponent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/SepatuView.vue')
    },
  
    {
      path: '/text',
      name: 'text',
      component: ParentComponent, 
    }
  ]
})

export default router
