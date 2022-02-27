import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleSignInButton from "vue-google-signin-button-directive";

import GoogleAuth from "@/config/google_oAuth.js";
const gauthOption = {
  clientId:
    "707231563844-e5cpkqrlt62gncmj6b84of5sml9lp8g9.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account",
};

import Toasted from 'vue-toasted';
Vue.use(Toasted, {
  duration: 1500
})

Vue.use(GoogleAuth, gauthOption);

Vue.config.productionTip = false;

new Vue({
  GoogleSignInButton,
  router,
  store,
  data: {
    product: "pname",
  },
  render: (h) => h(App),
}).$mount("#app");
