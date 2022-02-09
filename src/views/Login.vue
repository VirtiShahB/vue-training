<template>
  <div class="main-container">
    <b-form @submit="onSubmit">
      <div class="box-container">
        <h2 class="heading">Sign In</h2>
        <div class="form-fields">
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </div>
        <div class="form-fields">
          <b-form-input
            id="password"
            v-model="form.password"
            placeholder="Password"
            required
            :type="'password'"
          ></b-form-input>
        </div>
        <div class="form-fields">
          <b-button type="submit" class="signIn" variant="primary"
            >Sign In</b-button
          >
        </div>
        <div class="login-choice"><span>or Sign In with</span></div>
        <SocialLogin />
      </div>
    </b-form>
    <div class="footer">
      <p>Don't have an account? <a href="/signup"> Create one now</a></p>
    </div>
  </div>
</template>
<script>
import toastMessage from "../mixins/ToastMessage";
import SocialLogin from "@/components/SocialLogin.vue";

export default {
  name: "Login",
  components: { SocialLogin },
  mixins: [toastMessage],
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
      arrLoginnedUser: [],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      const email = this.form.email;
      const password = this.form.password;
      const registeredUser = JSON.parse(localStorage.getItem("users"));
      if (registeredUser !== null) {
        const userInfo = registeredUser.find(function (user) {
          if (user.email == email && user.password == password) {
            return true;
          }
        });
        if (typeof userInfo == "object") {
          this.arrLoginnedUser.push(userInfo);
          localStorage.setItem(
            "loginnedUser",
            JSON.stringify(this.arrLoginnedUser)
          );
          this.$router.push("/");
        } else {
          this.makeToastMessage("Invalid Credentials", "danger");
        }
      } else {
        this.makeToastMessage("Invalid Credentials", "danger");
      }
    },
  },
};
</script>
