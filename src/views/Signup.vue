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
            :class="{ 'is-invalid': $v.user_name.$error }"
          ></b-form-input>
          <div v-if="$v.user_name.$error" class="invalid-feedback">
            <span v-if="!$v.user_name.required">Username is required</span>
          </div>
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
            :class="{ 'is-invalid': $v.email.$error }"
          ></b-form-input>
          <div v-if="$v.user_name.$error" class="invalid-feedback">
            <span v-if="!$v.email.required">Email is required</span>
            <span v-if="!$v.email.email">Email must be an email</span>
          </div>
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
            :class="{ 'is-invalid': $v.password.$error }"
          ></b-form-input>
          <div v-if="$v.password.$error" class="invalid-feedback">
            <span v-if="!$v.password.required">Password is required</span>
            <span v-if="!$v.password.minLength"
              >Password is minimum 3 characters long</span
            >
            <span v-if="!$v.password.maxLength"
              >Password is maximum 11 characters long</span
            >
          </div>
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
            :class="{ 'is-invalid': $v.confirm_password.$error }"
          ></b-form-input>
          <div v-if="$v.confirm_password.$error" class="invalid-feedback">
            <span v-if="!$v.confirm_password.sameAs"
              >Password and Confirm Password must be same</span
            >
          </div>
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
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
} from "../../node_modules/vuelidate/lib/validators";

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
  validations: {
    user_name: {
      required,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(8),
    },
    confirm_password: { required, sameAsPassword: sameAs("password") },
  },
  methods: {
    registerUser() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
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
