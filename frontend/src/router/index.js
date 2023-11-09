import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/main/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('../views/main/SandwichView.vue')
    },
    {
      path: '/products',
      name: 'productsolo',
      component: () => import('../views/main/ProductsView.vue')
    },
    {
      path: '/modify/:id',
      name: 'modify',
      component: () => import('../views/admin/ModifySandwichView.vue')
    },

    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/main/OrdersView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/shops',
      name: 'shops',
      component: () => import('../views/main/ShopView.vue')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('../views/profile/LoginView.vue')
    },
    {
      name: 'register',
      path: '/register',
      component: () => import('../views/profile/RegisterView.vue')
    },
    {
      name: 'terms',
      path: '/terms',
      component: () => import('../views/politics/TermsView.vue')
    },
    {
      name: 'test',
      path: '/test',
      component: () => import('../views/main/SandwichView.vue')
    },
    {
      name: "admin",
      path: "/admin",
      component: () => import('../views/admin/AdminView.vue'),
      meta: { requiresAuth: true }
    },
    {
      name: 'profile',
      path: "/profile",
      component: () => import('../views/profile/ProfileView.vue'),
      meta: {requiresAuth: true}
    },
    {
      name: 'privacy',
        path: "/privacy",
        component: () => import('../views/politics/PrivacyView.vue')
    },
  ]
})


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
    }
}
);
  export default router;