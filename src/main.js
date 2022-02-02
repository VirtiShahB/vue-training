
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App'
import store from './store/store'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.css'
import '@/helpers/filters'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
