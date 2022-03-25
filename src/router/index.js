import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductosView from '@/views/ProductosView.vue'
import SucursalesView from '@/views/SucursalesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component:  ProductosView
  },
  {
    path: '/sucursales',
    name: 'sucursales',
    component: SucursalesView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
