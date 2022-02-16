<template>
  <div class="signin">
    <div class="col-md-6">
      <h2>Sign In</h2>
      <hr />
      <form @submit.prevent="loginUser">
        <b-form-group id="input-group-2" label="Username:" label-for="username">
          <b-form-input
            id="user_name"
            v-model="user_name"
            type="text"
            placeholder="Enter username"
            :class="{ 'is-invalid': $v.user_name.$error }"
          ></b-form-input>
          <div v-if="$v.user_name.$error" class="invalid-feedback">
            <span v-if="!$v.user_name.required">Username is required</span>
          </div>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="password">
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
          </div>
        </b-form-group>

        <b-button type="submit" class="mb-1 btn btn-dark btn-lg btn-block"
          >Sign In</b-button
        >

        <b-button
          class="google-signup btn btn-dark btn-lg btn-block"
          @click.prevent="loginWithGoogle"
        >
          <img src="../../public/assets/google.png" />
          Sign In
        </b-button>

        <b-button
          class="google-signup btn btn-dark btn-lg btn-block"
          @click.prevent="loginWithFacebook"
        >
          <img src="../../public/assets/facebook.png" />
          Sign In
        </b-button>
      </form>
    </div>
  </div>
</template>

<script>
import toastMixin from "../mixins/toastMixin";
import { initFbsdk } from "../config/facebookAuth";
import {
  required,
  minLength,
} from "../../node_modules/vuelidate/lib/validators";

export default {
  mixins: [toastMixin],
  data() {
    return {
      user_name: "",
      password: "",
    };
  },
  validations: {
    user_name: {
      required,
    },
    password: {
      required,
      minLength: minLength(3),
    },
  },
  mounted() {
    initFbsdk();
  },
  methods: {
    loginUser() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let credentials = {
        user_name: this.user_name,
        password: this.password,
      };

      let users =
        JSON.parse(localStorage.getItem("users")) != null
          ? JSON.parse(localStorage.getItem("users"))
          : [];
      let userindex = users.findIndex(
        (user) => user.user_name === credentials.user_name
      );

      if (userindex > -1) {
        let passwordIndex = users.findIndex(
          (user) => user.password === credentials.password
        );
        if (passwordIndex > -1) {
          let activeUser = users.find(
            (user) => user.user_name === credentials.user_name
          );
          activeUser.loginType = "normal";
          localStorage.setItem("activeUser", JSON.stringify(activeUser));
          this.$router.push("/products");
          this.fireToastNotification("success", "Signin successfully!");
        } else {
          this.fireToastNotification("danger", "Password does not match!");
        }
      } else {
        this.fireToastNotification("danger", "Username does not exist!");
        this.$router.push("/signup");
      }
    },
    loginWithGoogle() {
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          if (GoogleUser.getId()) {
            var user = {
              loginType: "google",
              user_name: GoogleUser.getBasicProfile().getName(),
              email: GoogleUser.getBasicProfile().getEmail(),
            };
            localStorage.setItem("activeUser", JSON.stringify(user));
            this.$router.push("/products");
            this.fireToastNotification("success", "Signin successfully!");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    loginWithFacebook() {
      window.FB.login(
        (loginStatus) => {
          if (loginStatus.status === "connected") {
            window.FB.api(
              "/me",
              { locale: "en_US", fields: "id,name, email" },
              (response) => {
                var user = {
                  user_name: response.name,
                  email: response.email,
                  loginType: "facebook",
                };
                localStorage.setItem("activeUser", JSON.stringify(user));
                this.$router.push("/products");
              }
            );
          }
        },
        { scope: "email" }
      );
    },
  },
};
</script>

<style scoped>
.signin {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>
