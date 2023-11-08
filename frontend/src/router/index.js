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
      path: '/products/:id',
      name: 'product',
      component: () => import('../views/SandwichView.vue')
    },
    {
      path: '/products',
      name: 'productsolo',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/modify/:id',
      name: 'modify',
      component: () => import('../views/ModifySandwichView.vue')
    },

    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/OrdersView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/shops',
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
    },
    {
      name: "admin",
      path: "/admin",
      component: () => import('../views/AdminView.vue'),
      meta: { requiresAuth: true }
    },
    {
      name: 'profile',
      path: "/profile",
      component: () => import('../views/ProfileView.vue'),
      meta: {requiresAuth: true}
    }

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