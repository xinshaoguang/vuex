import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/',
    redirect:'/state'
  },
  {
    path: '/state',
    name: 'state',
    component: () => import('../views/state.vue')
  },
  {
    path: '/actions',
    name: 'actions',
    component: () => import('../views/actions.vue')
  },
  {
    path: '/mutations',
    name: 'mutations',
    component: () => import('../views/mutations.vue')
  },
  {
    path: '/getters',
    name: 'getters',
    component: () => import('../views/getters.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
