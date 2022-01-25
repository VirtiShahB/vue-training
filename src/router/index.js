import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Checkout from '../components/Checkout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    }
  ]
})

