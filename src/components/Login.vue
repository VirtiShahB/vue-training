<template>
  <div class="vue-tempalte">
    <form @submit.stop.prevent>
      <h3>Sign In</h3>

      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="email"
          name="email"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control form-control-lg"
          name="password"
          v-model="password"
        />
      </div>

      <button
        type="submit"
        class="btn btn-dark btn-lg btn-block"
        @click="Submit"
      >
        Sign In
      </button>

      <div class="login-choice"><span>or Sign In with</span></div>
      <SocialLogin />

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import SocialLogin from "@/components/SocialLogin";
export default {
  name: "login",
  components: {
    SocialLogin,
  },
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
    };
  },
  methods: {
    Submit() {
      this.submitted = true;
      if (this.email && this.password) {
        var users = JSON.parse(localStorage.getItem("users"));
        if (
          users[0].email == this.email &&
          users[0].password == this.password
        ) {
          localStorage.setItem("email", JSON.stringify(this.email));
          localStorage.setItem("password", JSON.stringify(this.password));
          this.$store.commit("setLoginUser", users);
          this.$toasted.show("Login Successfully", {
            title: "removed !",
            variant: "success",
            toaster: "b-toaster-bottom-center",
            solid: true,
          });
          this.$router.push({ path: "/" });
        }
      }
    },
  },
};
</script>
