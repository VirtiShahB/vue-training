import Vue from "vue";
import GoogleAuth from "../config/googleAuth";
import Toast from "vue-toastification";

const gauthOption = {
  clientId:
    "77114976042-8khkeqfalt3sudj62p85310r2d2ot7m7.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account",
};

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
      return false;
    }
    return toast;
  },
  icon: true,
  rtl: false,
};

Vue.use(GoogleAuth, gauthOption);
Vue.use(Toast, options);
