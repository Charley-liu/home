import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import about from '../views/AboutView.vue'
import product from '../views/product.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: "/home",
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/product',
      name: 'product',
      component: product
    }
  ]
})

export default router
