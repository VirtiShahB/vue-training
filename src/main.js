import Vue from 'vue'
// import VueRouter from 'vue-router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router/index'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import App from './App.vue'
// import Checkout from './components/Checkout.vue'
// Vue.use(VueRouter)
Vue.config.productionTip = false
// const routes = [
//   { path: '/checkout', component: Checkout , name:'Checkout'}
// ]

// const router = new VueRouter({
//   routes // short for `routes: routes`
// })

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
