import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/colors/colors.css";
import "./assets/css/main.css";
import router from './router'
import VueSweetAlert from 'vue-sweetalert'
Vue.use(VueSweetAlert)
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
