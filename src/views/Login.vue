<template>
  <b-container>
    <b-row class="justify-content-center mt-5">
      <b-col xs="12" sm="12" md="10" lg="5" xl="4">
        <b-card title="Login">
          <b-form @submit.prevent="onLogin" novalidate>
            <span class="small text-muted"
              >email: admin@gmail.com and password: bacancy</span
            >
            <b-alert variant="danger" v-if="errors.length" show dismissible>
              <p v-for="(err, ind) in errors" class="small mb-0" :key="ind">
                {{ err }}
              </p>
            </b-alert>
            <b-form-group id="input-group-1" label="Email">
              <b-form-input
                id="input-1"
                v-model.trim="loginForm.email"
                type="email"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Password">
              <b-form-input
                id="input-2"
                v-model.trim="loginForm.password"
                type="password"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" block>Login</b-button>
            <p class="text-center mt-3">
              Don't have an account? <b-link to="/signup">Signup</b-link>
            </p>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },
      errors: [],
      /* eslint-disable */
      emailRegex:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    onLogin() {
      this.errors = [];
      let user = {
        email: "admin@gmail.com",
        password: "bacancy",
      };
      if (!this.loginForm.email) {
        this.errors.push("Email is required.");
      } else {
        if (!this.emailRegex.test(this.loginForm.email)) {
          this.errors.push("Enter valid email.");
        } else {
          if (this.loginForm.email !== user.email) {
            this.errors.push("Email is not in our credentials");
          }
        }
      }

      if (!this.loginForm.password) {
        this.errors.push("password is required.");
      } else {
        if (this.loginForm.password !== user.password) {
          this.errors.push("Do not match to our credentials");
        }
      }

      if (this.errors.length) {
        return false;
      } else {
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push("/");
      }
    },
  },
};
</script>
