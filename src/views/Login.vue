<template>
  <b-container>
    <b-row class="justify-content-center mt-5">
      <b-col xs="12" sm="12" md="10" lg="5" xl="4">
        <b-card title="Login">
          <b-form @submit.prevent="onLogin" novalidate>
            <span class="small text-muted"
              >email: admin@gmail.com and password: bacancy</span
            >
            <b-alert variant="danger" v-if="loginError">
              {{ loginError }}
            </b-alert>
            <b-form-group id="input-group-1" label="Email">
              <b-form-input
                id="input-1"
                v-model.trim="loginForm.email"
                type="email"
                name="email"
                trim
                required
                v-validate="{ required: true, email: true }"
                data-vv-name="email"
              ></b-form-input>
              <span class="text-danger">{{ errors.first("email") }}</span>
            </b-form-group>
            <b-form-group id="input-group-2" label="Password">
              <b-form-input
                id="input-2"
                v-model.trim="loginForm.password"
                type="password"
                name="password"
                trim
                required
                v-validate="{ required: true }"
                data-vv-name="password"
              ></b-form-input>
              <span class="text-danger">{{ errors.first("password") }}</span>
            </b-form-group>
            <b-button type="submit" variant="primary" block>Login</b-button>
            <p class="text-center mt-3">
              Don't have an account? <b-link to="/signup">Signup</b-link>
            </p>
          </b-form>
          <p class="text-center">OR</p>
          <b-row>
            <b-col>
              <b-button variant="light border" block @click="onGoogleLogin"
                ><b-icon-google /> Google</b-button
              >
            </b-col>
            <b-col>
              <b-button variant="light border" block @click="onFacebookLogin"
                ><b-icon-facebook /> Facebook</b-button
              >
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { initFbsdk, facebookLogin } from "@/utils/facebookAuth.js";
export default {
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },
      loginError: null,
    };
  },
  mounted() {
    initFbsdk();
  },
  methods: {
    onLogin() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
        let user = {
          email: "admin@gmail.com",
          password: "bacancy",
        };
        if (
          this.loginForm.email !== user.email &&
          this.loginForm.password !== user.password
        ) {
          this.loginError = "Invalid Credentials";
          return false;
        }

        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push("/");
      });
    },
    async onGoogleLogin() {
      try {
        const googleUser = await this.$gAuth.signIn();
        let user = {};
        let userDetail = googleUser.getBasicProfile();
        user.name = userDetail.getName();
        user.email = userDetail.getEmail();
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async onFacebookLogin() {
      try {
        await facebookLogin.login().then((response) => {
          localStorage.setItem("user", JSON.stringify(response.user));
          this.$router.push("/");
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
