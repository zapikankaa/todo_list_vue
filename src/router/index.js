import { createRouter, createWebHistory } from 'vue-router'
import Todos from '@/views/Todos'

const routes = [
  {
    path: '/',
    component: Todos,
    props: { filter: 'all' }
  },
  {
    path: '/active',
    component: Todos,
    props: { filter: 'active' }
  },
  {
    path: '/complete',
    component: Todos,
    props: { filter: 'complete' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
