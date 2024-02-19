import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontendView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'products',
          component: () => import('../views/ProductsView.vue'),
          children: []
        },
        {
          path: 'cart',
          component: () => import('../views/CartView.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/dashboard',
      component: () => import('../views/dashboard/DashboardView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/dashboard/ProductsView.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/dashboard/OrdersView.vue')
        }
      ]
    }
  ]
})

export default router
