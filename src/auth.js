import router from "./router";
import Vue from "vue";

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["login", "register", "404"];
  const authRequired = !publicPages.includes(to.name);
  let fetchUsers = JSON.parse(localStorage.getItem("loggedInUser"));

  let login = fetchUsers != null ? true : false;

  Vue.prototype.$loggedIn = login;
  Vue.prototype.$loggedUser = fetchUsers;

  if (authRequired && !login) {
    return next("/login");
  }

  if (to.name == "login" && login) {
    return next("/");
  }

  if (to.name == "register" && login) {
    return next("/");
  }

  next();
});

