import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'

import Dashboard from './components/Dashboard.vue'
import ProductShow from './components/ProductShow.vue'
import Cart from './components/Cart.vue'
import Checkout from './components/Checkout.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Dashboard },
    { path: '/product/:id', component: ProductShow,name: 'ProductDetail'},
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout },
  ]
})

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
