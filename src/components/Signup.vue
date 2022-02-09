<template>
  <div class="signup">
    <div class="col-md-6">
      <h2>Sign Up</h2>
      <hr />
      <form @submit.prevent="registerUser">
        <b-form-group
          id="input-group-2"
          label="User Name:"
          label-for="user_name"
        >
          <b-form-input
            id="user_name"
            v-model="user_name"
            type="text"
            placeholder="Enter user name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Email address:"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Enter Password:"
          label-for="password"
        >
          <b-form-input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Confirm Password:"
          label-for="confirm_password"
        >
          <b-form-input
            id="confirm_password"
            v-model="confirm_password"
            type="password"
            placeholder="Enter confirm password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" class="btn btn-dark btn-lg btn-block"
          >Sign Up</b-button
        >
        <p class="forgot-password text-right">
          Already registered
          <router-link :to="{ name: 'signin' }">Sign In?</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import toastMixin from "../mixins/toastMixin";

export default {
  mixins: [toastMixin],
  data() {
    return {
      user_name: "",
      email: "",
      password: "",
      confirm_password: "",
      users: [],
    };
  },
  methods: {
    registerUser() {
      let user = {
        user_name: this.user_name,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
      };

      var lsusers = [];
      if (localStorage.getItem("users")) {
        lsusers = JSON.parse(localStorage.getItem("users"));
      }
      lsusers.push(user);
      localStorage.setItem("users", JSON.stringify(lsusers));
      this.user_name = "";
      this.email = "";
      this.password = "";
      this.confirm_password = "";
      this.fireToastNotification(
        "success",
        "Signup successfully, please signin!"
      );
      this.$router.push("/signin");
    },
  },
};
</script>

<style scoped>
.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>
