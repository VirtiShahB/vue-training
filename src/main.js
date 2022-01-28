import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from './store/index'
import Vuelidate from 'vuelidate'

import axios from 'axios'
import VueAxios from 'vue-axios'

import '@/api/api.js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.prototype.$apihost = (Vue.config.productionTip) ? 'http://localhost/vue-training-backend/api/' : 'http://localhost/vue-training-backend/api/'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
