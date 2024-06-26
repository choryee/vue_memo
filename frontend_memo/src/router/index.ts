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
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../views-landMine/MineSweeper.vue')
    },
    {
      path: '/responseCheck',
      name: 'responseCheck',
      component: () => import('../views-responseCheck/ResponseCheck.vue')
    },
    {
      path: '/rockScissorsPaper',
      name: 'rockScissorsPaper',
      component: () => import('../views-rockScissorsPaper/rockScissorsPaper.vue')
    },
    {
      path: '/LottoGenerator',
      name: 'LottoGenerator',
      component: () => import('../views-LottoGenerator/LottoGenerator.vue')
    },
    {
      path: '/wordRelay',
      name: 'wordRelay',
      component: () => import('../views-wordRelay/wordRelay.vue')
    },
    {
      path: '/memo',
      name: 'memo',
      component: () => import('../views-memovue3/memo.vue')
    },
  ]
})

export default router
