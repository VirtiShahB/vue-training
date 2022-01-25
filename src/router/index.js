import Vue from 'vue'
import VueRouter from 'vue-router'

const Dashboard = () => import('@/views/products/index.vue')
const ProductDetails = () => import('@/views/products/productDetail.vue')
const Checkout = () => import('@/views/products/checkout.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
