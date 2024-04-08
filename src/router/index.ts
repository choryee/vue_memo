import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test1',
      name: 'test1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Test1View.vue')
    },
    {
      path: '/todoapp',
      name: 'todoapp',
      component: () => import('../views/TodoApp.vue')
    },
    {
      path: '/ticktacktoe',
      name: 'ticktacktoe',
      component: () => import('../views-tictactoe/TicTacToe.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/calendar.vue')
    },
  ]
})

export default router
