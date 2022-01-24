import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/cart',
    name: 'ProductCart',
    component: () => import('../components/Cart.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router