// import Vue from 'vue'
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router, // we tell our vue instance to use this vue router
  render: h => h(App),
}).$mount('#app')
