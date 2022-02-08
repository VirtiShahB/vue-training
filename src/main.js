import Vue from "vue";

import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import VeeValidate from "vee-validate";
import router from "./router/index";
import GoogleAuth from "@/social-login/google.js";
// import { initFbsdk } from "@/social-login/facebook.js";
// import facebookLogin from "facebook-login-vuejs";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const gauthOption = {
  clientId:
    "743094537641-mtdhrlhliq6cscue8nfoplovv9fog2e1.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account",
};

// Vue.use(VeeValidate);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(GoogleAuth, gauthOption);
// Vue.use(facebookLogin);
// Vue.use(initFbsdk());

import App from "./App.vue";
Vue.config.productionTip = false;
Vue.config.currency = "$";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
