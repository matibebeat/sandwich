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
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('../views/OneSandwicheView.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/OrdersView.vue')
    },
    {
      path: '/shops' ,
      name: 'shops',
      component: () => import('../views/ShopView.vue')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('../views/LoginView.vue')
    },
    {
      name: 'register',
      path: '/register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      name: 'terms',
      path: '/terms',
      component: () => import('../views/TermsView.vue')
    },
    {
      name: 'test',
      path: '/test',
      component: () => import('../views/SandwichView.vue')
    }
  ]
})

export default router
