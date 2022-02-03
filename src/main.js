import Vue from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";

import { BootstrapVue } from "bootstrap-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../node_modules/vue-toastification/dist/index.css";
import router from "./router";
import "@/auth";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const options = {
  position: "top-right",
  timeout: 4000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.5,
  showCloseButtonOnHover: true,
  hideProgressBar: false,
  closeButton: "button",
  filterBeforeCreate: (toast, toasts) => {
    if (toasts.filter((t) => t.type === toast.type).length !== 0) {
      // Returning false discards the toast
      return false;
    }
    // You can modify the toast if you want
    return toast;
  },
  icon: true,
  rtl: false,
};

Vue.use(Toast, options);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
