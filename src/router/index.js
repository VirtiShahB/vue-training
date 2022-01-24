import Vue from 'vue'
import VueRouter from 'vue-router'
import Checkout from '../components/Checkout.vue'
// import Dashboard from '../components/dashboard.vue'
import Product from '../components/Product.vue'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Product',
    component: Product
  },
  {
    path: '/checkout',
    name:'Checkout',
    component: Checkout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
