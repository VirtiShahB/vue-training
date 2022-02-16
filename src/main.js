import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from "bootstrap-vue";
import Vuelidate from 'vuelidate';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../node_modules/vue-toastification/dist/index.css";
import "../src/auth";
import "../src/util/utils";

Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
