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
        <h1 class="display-3">
          Register with us and get existing offers - vcart
        </h1>
      </div>
      <div class="col-md-6 mt-5 py-5">
        <div class="mb-3 text-left">
          <div class="row">
            <div class="col-md-6">
              <a @click="onGoogleSignUp" class="ml-3 btn btn-block btn-danger">
                <b-icon-google></b-icon-google>
                Sign up with Google
              </a>
            </div>
            <div class="col-md-6">
              <a
                @click="logInWithFacebook"
                class="ml-3 btn btn-block btn-primary"
              >
                <b-icon-facebook></b-icon-facebook>
                Sign up with Facebook
              </a>
            </div>
          </div>
        </div>
        <form @submit.prevent="register">
          <div class="form-group">
            <label>Name: <span class="text-danger">*</span> </label>
            <input v-model="name" type="text" required class="form-control" />
          </div>
          <div class="form-group">
            <label>Email: <span class="text-danger">*</span> </label>
            <input v-model="email" type="email" required class="form-control" />

            <small :class="errorClass">
              {{ error.email }}
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
            <label>Confirm Password: <span class="text-danger">*</span> </label>
            <input
              @change="validation"
              v-model="confirmPassword"
              type="password"
              required
              class="form-control"
            />

            <small :class="errorClass">
              {{ error.password }}
            </small>
          </div>

          <div class="form-group">
            <button :disabled="proccess" class="btn btn-md btn-primary">
              <b-icon-arrow-right-square></b-icon-arrow-right-square> Register
            </button>
          </div>

          <router-link :to="{ name: 'login', query: { ref: 'register' } }">
            <p>Already have an account ?</p>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: {
        email: "",
        password: "",
      },
      errorClass: "",
      proccess: false,
    };
  },
  methods: {
    register() {
      this.proccess = true;

      let status = this.validation();

      if (status !== false) {
        /** Get all users  */

        let users = JSON.parse(localStorage.getItem("registerUsers"));

        if (users != null && users.length > 0) {
          let index = users.findIndex((user) => user.email == this.email);

          if (index !== -1) {
            this.errorClass = "text-danger";
            this.error.email = "Email is already taken !";
            this.proccess = false;
            return false;
          } else {
            this.error.email = "";
            this.proccess = true;
          }
        }

        let data = users != null && users.length > 0 ? users : [];

        data.push({
          id: this.$uuid.v1(),
          name: this.name,
          email: this.email,
          password: this.password,
        });

        localStorage.setItem("registerUsers", JSON.stringify(data));

        this.$bvToast.toast("Registration successfully  !", {
          title: "Registered !",
          variant: "success",
          toaster: "b-toaster-top-right",
          solid: true,
        });

        setTimeout(() => {
          this.$router.push({ name: "login" });
        }, 800);
      }
    },
    validation() {
      if (this.confirmPassword !== this.password) {
        this.proccess = false;
        this.errorClass = "text-danger";
        this.error.password = "Password is not match";
        return false;
      }

      this.error.password = "";
    },
    onGoogleSignUp() {
      let gapi = window.gapi;
      gapi.load("auth2", () => {
        gapi.auth2.authorize(
          {
            client_id:
              "1052182370984-h9buavtblvgmtai7e71fcm2v9tgi7veq.apps.googleusercontent.com",
            scope: "email profile openid",
            response_type: "id_token permission",
            login_hint: "email",
            ux_mode: "popup",
          },
          (response) => {
            if (response.error) {
              // An error happened!
              return;
            }
            this.getUserSignedInUser();
          }
        );
      });
    },
    getUserSignedInUser() {
      let gapi = window.gapi;

      gapi.load("auth2", () => {
        gapi.auth2.init().then(() => {
          var auth = gapi.auth2.getAuthInstance();
          // check login is true
          if (auth.isSignedIn.get() == true) {
            var user = auth.currentUser.get();
            // get user profile
            var profile = user.getBasicProfile();

            let users = JSON.parse(localStorage.getItem("registerUsers"));

            if (users != null && users.length > 0) {
              let findUser = users.findIndex(
                (user) => user.email == profile.getEmail()
              );

              if (findUser !== -1) {
                this.errorClass = "text-danger";
                this.error.email = "Account already present with this email !";
                this.proccess = false;
                return false;
              }
            }

            let data = users != null && users.length > 0 ? users : [];

            data.push({
              id: this.$uuid.v1(),
              name: profile.getName(),
              email: profile.getEmail(),
              password: profile.getId(),
            });

            localStorage.setItem("registerUsers", JSON.stringify(data));

            this.$bvToast.toast("Registration successfully  !", {
              title: "Registered !",
              variant: "success",
              toaster: "b-toaster-top-right",
              solid: true,
            });

            setTimeout(() => {
              this.$router.push({ name: "login" });
            }, 800);

            //Make user sign in
            // localStorage.setItem("loggedInUser", JSON.stringify(user));
          }
        });
      });
    },
    async logInWithFacebook() {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
      window.FB.login(function(response) {
        if (response.authResponse) {
          console.log(response.authResponse);

          

        } else {
          this.$bvToast.toast(
            "User cancelled login or did not fully authorize !",
            {
              title: "Failed !",
              variant: "danger",
              toaster: "b-toaster-top-right",
              solid: true,
            }
          );
        }
      });
      return false;
    },
    async initFacebook() {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "722554155379111", //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          version: "v13.0",
        });
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    },
    async mounted(){
        await this.loadFacebookSDK(document, "script", "facebook-jssdk");
        await this.initFacebook();
    }
  }
};
</script>

<style></style>
