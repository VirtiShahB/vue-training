import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@/views/Checkout.vue')
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: () => import('@/views/Wishlist.vue')
  },
  { 
    path: '/product/:id/:name', 
    name: 'view.product',  
    component: () => import('@/views/Product.vue')
  }

]

const router = new VueRouter({
  linkActiveClass: 'is-active',
  mode: 'history',
  routes
})

export default router
