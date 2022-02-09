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
        <h1 class="display-3">Login to get existing offers and discounts</h1>
      </div>
      <div class="col-md-6 mt-5 py-5">
        <div class="mb-3 text-left">
          <div class="row">
            <div class="col-md-6">
              <a @click="onGoogleSignIn" class="ml-3 btn btn-block btn-danger">
                <b-icon-google></b-icon-google>
                Sign in with Google
              </a>
            </div>
            <div class="col-md-6">
              <a class="ml-3 btn btn-block btn-primary">
                <b-icon-facebook></b-icon-facebook>
                Sign in with Facebook
              </a>
            </div>
          </div>
        </div>
        <form @submit.prevent="login">
          <div class="form-group">
            <label>Email: <span class="text-danger">*</span> </label>
            <input
              autofocus
              v-model="email"
              type="email"
              required
              class="form-control"
            />
            <small :class="errorClass">
              {{ errors.email }}
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
            <button :disabled="proccess" class="btn btn-md btn-primary">
              <b-icon-arrow-right-square></b-icon-arrow-right-square> Login
            </button>
          </div>

          <router-link :to="{ name: 'register', query: { ref: 'login' } }">
            <p>Not have account ?</p>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "@/eventBus";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        email: "",
        password: "",
      },
      errorClass: "",
      proccess: false,
    };
  },
  computed: mapGetters(["fetchAllUsers",'loggedInVuex']),
  methods: {
    ...mapActions(["getAllUsers","createLoginUser"]),
    login() {
      this.proccess = true;

      let status = this.validation();

      if (status == true) {
        bus.$emit("authEvent");

        this.$router.push({ name: "home" });
      }
    },
    validation() {
      let users = this.fetchAllUsers;

      if (users != null && users.length > 0) {
        let findUser = users.findIndex(
          (user) => user.email == this.email && this.password == user.password
        );

        if (findUser == -1) {
          this.errorClass = "text-danger";
          this.errors.email = "Email or password is invalid !";
          this.proccess = false;
          return false;
        } else {
          var user = users.find((user) => {
            return user.email === this.email;
          });

          this.createLoginUser(user);

          this.errors.email = "";
          return true;
        }
      }

      this.errorClass = "text-danger";
      this.errors.email = "Email or password is invalid !";
      this.proccess = false;
      return false;
    },
    onGoogleSignIn() {
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

              if (findUser == -1) {
                this.errorClass = "text-danger";
                this.errors.email = "No account found with this email !";
                this.proccess = false;
                return false;
              }
              //Make user sign in
              var socialUser = users.find((user) => {
                return user.email === profile.getEmail();
              });
              this.createLoginUser(socialUser);
              this.errors.email = "";
              this.$router.push({ name: "home" });
            } else {
              this.errorClass = "text-danger";
              this.errors.email = "No account found with this email !";
              this.proccess = false;
              return false;
            }
          }
        });
      });
    },
  },
  mounted() {
    this.getAllUsers();
  },
};
</script>
