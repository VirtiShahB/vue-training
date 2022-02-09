<template>
  <b-container>
    <b-row class="justify-content-center mt-5">
      <b-col xs="12" sm="12" md="10" lg="5" xl="4">
        <b-card title="Login">
          <b-form @submit.prevent="doLogin">
            <!-- <span class="small text-muted"
              >email: ripal.darji@bacancy.com and password: rbacancy</span
            > -->
            <b-alert variant="danger" v-if="errors.length" show dismissible>
              <p v-for="(err, ind) in errors" class="small mb-0" :key="ind">
                {{ err }}
              </p>
            </b-alert>
            <b-form-group id="input-group-1" label="Email">
              <b-form-input
                id="input-1"
                type="email"
                v-model="loginParam.email"
                trim
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Password">
              <b-form-input
                id="input-2"
                type="password"
                v-model="loginParam.password"
                trim
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="info">Login</b-button>
            <p class="text-center mt-3">
              Don't have an account? <b-link to="/register">Signup</b-link>
            </p>
          </b-form>
          <div id="buttonDiv"></div>
          <!-- <div
            id="g_id_onload"
            data-client_id="YOUR_GOOGLE_CLIENT_ID"
            data-login_uri="https://your.domain/your_login_endpoint"
            data-auto_prompt="false"
          ></div>
          <div
            class="g_id_signin"
            data-type="standard"
            data-size="large"
            data-theme="outline"
            data-text="sign_in_with"
            data-shape="rectangular"
            data-logo_alignment="left"
          ></div> -->
          <div class="h2" style="font-size: 2rem">
            <b-icon
              @click="doSocialLogin('facebook')"
              style="margin: 5px"
              icon="facebook"
            ></b-icon>
            <b-icon
              @click="doSocialLogin('google')"
              style="margin: 5px"
              icon="google"
            ></b-icon>
          </div>
        </b-card>
      </b-col> </b-row
  ></b-container>
</template>
<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      loginParam: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  props: {
    id: Number,
  },
  mounted() {
    // this.initFbsdk();
    // let initializeWhenGoogleIsAvailable = () => {
    //   if (google) {
    //     // test if google is available
    //     console.log(google);
    //     // this.initialize(); // if it is, then initalize
    //   } else {
    //     setTimeout(initializeWhenGoogleIsAvailable, 100); // if it isn't, wait a bit and retry
    //   }
    // };
    // initializeWhenGoogleIsAvailable();
    // window.onload = function () {
    //   google.accounts.id.initialize({
    //     client_id:
    //       "743094537641-mtdhrlhliq6cscue8nfoplovv9fog2e1.apps.googleusercontent.com",
    //     callback: this.handleCredentialResponse,
    //   });
    //   google.accounts.id.renderButton(
    //     document.getElementById("buttonDiv"),
    //     { theme: "outline", size: "large" } // customization attributes
    //   );
    //   google.accounts.id.prompt(); // also display the One Tap dialog
    // };
  },
  methods: {
    doLogin() {
      this.errors = [];
      let user = {
        email: this.loginParam.email,
        password: this.loginParam.password,
      };
      if (!this.loginParam.email) {
        this.errors.push("Email is required.");
      }
      if (!this.loginParam.password) {
        this.errors.push("Password is required.");
      }
      if (this.errors.length) {
        return false;
      } else {
        this.$store.dispatch("addLoggedIn", user);
        localStorage.setItem("loggedUser", JSON.stringify(user));
        this.$router.push("/dashboard");
      }
    },
    doSocialLogin(appname) {
      if (appname == "google") {
        this.googleLogin();
      } else if (appname == "facebook") {
        this.logInWithFacebook();
      }
    },
    async logInWithFacebook() {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
      window.FB.login(function (response) {
        if (response.authResponse) {
          alert("You are logged in &amp; cookie set!");
          // Now you can redirect the user or do an AJAX request to
          // a PHP script that grabs the signed request from the cookie.
        } else {
          alert("User cancelled login or did not fully authorize.");
        }
      });
      return false;
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      console.log("logInWithFacebook");
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    },
    async initFacebook() {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "326022817735322", //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          version: "v13.0",
        });
      };
    },
    handleCredentialResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential);
    },
    googleLogin() {
      console.log("googgglleee");
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          // on success do something
          let googleUser = {
            email: GoogleUser.Du.tv,
            password: GoogleUser.Du.FW,
          };
          this.$store.commit("addLoggedIn", googleUser);
          localStorage.setItem("loggedUser", JSON.stringify(googleUser));
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>
