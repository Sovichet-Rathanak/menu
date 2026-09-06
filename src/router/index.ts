import ListingView from '@/views/ListingView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ListingView',
      component: ListingView
    }
  ],
})

export default router
