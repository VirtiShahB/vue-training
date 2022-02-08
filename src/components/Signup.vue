<template>
  <div class="main-container">
    <b-form @submit="onSubmit">
      <div class="box-container">
        <h2 class="heading">Create Your Account</h2>
        <div class="form-fields">
          <b-form-input v-model="form.fullName" placeholder="Fullname" required>
          </b-form-input>
        </div>
        <div class="form-fields">
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Email"
            required
          ></b-form-input>
        </div>
        <div class="form-fields">
          <b-form-input
            id="password"
            :type="'password'"
            v-model="form.password"
            placeholder="Password"
            required
          ></b-form-input>
        </div>
        <div class="form-fields">
          <b-form-input
            id="confirm_password"
            :type="'password'"
            placeholder="Confirm password"
            required
          ></b-form-input>
        </div>
        <div class="form-fields">
          <button class="createaccount" name="commit" type="submit">
            Create your account
          </button>
        </div>
        <div class="login-choice"><span>or sign up with</span></div>
        <SocialLogin />
      </div>
    </b-form>
    <div class="footer">
      <p>Already have an account? <a href="/login"> Sign In</a></p>
    </div>
  </div>
</template>
<script>
import toastMessage from "../mixins/ToastMessage.js";
import SocialLogin from "@/components/SocialLogin.vue";

export default {
  name: "Signup",
  components: { SocialLogin },
  mixins: [toastMessage],
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        password: "",
      },
      registeredUser: [],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (localStorage.getItem("users") !== null) {
        this.registeredUser = JSON.parse(localStorage.getItem("users"));
        this.registeredUser.push(this.form);
      } else {
        this.registeredUser.push(this.form);
      }
      localStorage.setItem("users", JSON.stringify(this.registeredUser));
      this.makeToastMessage("User signup successfully", "success");
      this.$router.push("/login");
    },
  },
};
</script>
<style lang=""></style>
