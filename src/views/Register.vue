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
            <div class="col-3" id="google-signin-button"></div>
            <a class="col-6 btn btn-md btn-primary">
              <b-icon-facebook></b-icon-facebook>
              Sign in with Facebook
            </a>
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

          <router-link :to="{ name: 'login' }">
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
    onSignIn(user) {
      const profile = user.getBasicProfile();
      if (profile != null) {
        this.name = profile.getName();
        this.email = profile.getEmail();
      }
    },
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
  },
  mounted() {
    let gapi = window.gapi;

    gapi.auth2.render("google-signin-button", {
      onsuccess: this.onSignIn,
    });
  },
};
</script>

<style></style>
