<template>
  <div class="bg-light shadow-sm vh-50 mt-5 container">
    <div class="row">
      <div class="col-md-6 mt-5 py-5">
        <router-link :to="{ name: 'home' }">
          <img
            width="50px"
            src="https://logo.clearbit.com/ecommerceceo.com"
            alt="Kitten"
          />
        </router-link>
        <h1 class="display-3">Login to get existing offers and discounts</h1>
      </div>
      <div class="col-md-6 mt-5 py-5">
        <form @submit.prevent="login">
          <div class="form-group">
            <label>Email: <span class="text-danger">*</span> </label>
            <input
              autofocus
              v-model="email"
              type="email"
              required
              class="form-control"
            />
            <small :class="errorClass">
              {{ errors.email }}
            </small>
          </div>
          <div class="form-group">
            <label>Password: <span class="text-danger">*</span> </label>
            <input
              v-model="password"
              type="password"
              required
              class="form-control"
            />
          </div>

          <div class="form-group">
            <button :disabled="proccess" class="btn btn-md btn-primary">
              <b-icon-arrow-right-square></b-icon-arrow-right-square> Login
            </button>
          </div>

          <router-link :to="{ name: 'register' }">
            <p>Not have account ?</p>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "@/eventBus";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        email: "",
        password: "",
      },
      errorClass: "",
      proccess: false,
    };
  },
  methods: {
    login() {
      this.proccess = true;

      let status = this.validation();

      if (status == true) {
        bus.$emit("authEvent");

        this.$router.push({ name: "home" });
      }
    },
    validation() {
      let users = JSON.parse(localStorage.getItem("registerUsers"));

      if (users != null && users.length > 0) {
        let findUser = users.findIndex(
          (user) => user.email == this.email && this.password == user.password
        );

        if (findUser == -1) {
          this.errorClass = "text-danger";
          this.errors.email = "Email or password is invalid !";
          this.proccess = false;
          return false;
        } else {
          var user = users.find((user) => {
            return user.email === this.email;
          });

          localStorage.setItem("loggedInUser", JSON.stringify(user));

          this.errors.email = "";
          return true;
        }
      }

      this.errorClass = "text-danger";
      this.errors.email = "Email or password is invalid !";
      this.proccess = false;
      return false;
    },
  },
};
</script>
