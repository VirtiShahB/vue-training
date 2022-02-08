import Vue from "vue";
import App from "./App.vue";
import UUID from "vue-uuid";
import 'lodash';
import axios from "axios";
import store from './store';

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./assets/style.css";
import router from "./router";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$store = store;
Vue.use(UUID);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import "@/auth";