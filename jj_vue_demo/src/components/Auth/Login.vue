<template>
  <b-container>
    <meta
      name="google-signin-client_id"
      content="440417632572-f0eujdgt6vcns217p38t122f3luhhqkk.apps.googleusercontent.com"
    />
    <b-row class="mt-4">
      <b-col>
        <p class="text-danger" v-if="showMsg">No user found</p>
        <b-form @submit.prevent>
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              type="email"
              placeholder="Enter email"
              v-model="email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="input-2"
            class="mt-4"
          >
            <b-form-input
              id="input-2"
              type="password"
              placeholder="Password"
              v-model="password"
              required
            ></b-form-input>
          </b-form-group>

          <b-button
            type="submit"
            variant="primary"
            class="mt-4"
            @click="login()"
            >Login</b-button
          ><br /><br />
          <router-link to="/signUp">Register</router-link>
          <GoogleLogin
            :params="params"
            :renderParams="renderParams"
            :onSuccess="onSuccess"
            :onFailure="onFailure"
          ></GoogleLogin>
          <facebook-login class="button" appId="474649800932999">
          </facebook-login>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import GoogleLogin from "vue-google-login";
import facebookLogin from "facebook-login-vuejs";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      user: {},
      showMsg: false,
      params: {
        client_id:
          "440417632572-f0eujdgt6vcns217p38t122f3luhhqkk.apps.googleusercontent.com",
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  components: {
    GoogleLogin,
    facebookLogin,
  },
  methods: {
    onSuccess(googleUser) {
      var profile = googleUser.getBasicProfile();
      if (profile.getEmail() != "") {
        this.$store.state.isLoggedIn = true;
        this.$router.push({
          name: "dashboard",
        });
      }
    },
    onFailure() {},
    login() {
      this.user = JSON.parse(window.localStorage.getItem("user"));
      if (
        this.email == this.user.email &&
        this.password == this.user.password
      ) {
        this.$store.state.isLoggedIn = true;
        this.$router.push({
          name: "dashboard",
        });
      } else {
        this.showMsg = true;
      }
    },
  },
};
</script>
