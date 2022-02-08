import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VeeValidate from 'vee-validate';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from './store'
import $axios from '@/utils/axios';
import gAuth from '@/plugins/googleAuth';
const gauthOption = {
  clientId: '164306422621-s3k4kdnt1o6icl890ioei3ck5kf5b0mt.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(VeeValidate);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VeeValidate);
Vue.use(gAuth, gauthOption)

Vue.prototype.axios = $axios;
Vue.config.productionTip = false
export const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
