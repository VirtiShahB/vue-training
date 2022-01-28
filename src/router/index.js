import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductDetails from '../components/ProductDetails.vue'
import CheckOut from '../components/CheckOut.vue'
import Products from '../components/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: '',
    component: Products
  },
  {
    path: '/product-details/:prod_id',
    name: 'product-details',
    component: ProductDetails
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckOut
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
