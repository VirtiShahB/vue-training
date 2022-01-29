<template>
  <b-container>
    <b-row class="justify-content-center mt-5">
      <b-col xs="12" sm="12" md="10" lg="5" xl="4">
        <b-card title="Signup">
          <b-form @submit.prevent="onSignup" novalidate>
            <b-alert variant="danger" v-if="errors.length" show dismissible>
              <p v-for="(err, ind) in errors" class="small mb-0" :key="ind">
                {{ err }}
              </p>
            </b-alert>
            <b-form-group id="input-group-1" label="Name">
              <b-form-input
                id="input-1"
                v-model.trim="signupForm.name"
                type="text"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Email">
              <b-form-input
                id="input-2"
                v-model.trim="signupForm.email"
                type="email"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Password">
              <b-form-input
                id="input-3"
                v-model.trim="signupForm.password"
                type="password"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4" label="Confirm Password">
              <b-form-input
                id="input-4"
                v-model.trim="signupForm.confirmPassword"
                type="password"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" block>Signup</b-button>
            <p class="text-center mt-3">
              Have an account? <b-link to="/login">Login</b-link>
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
      signupForm: {
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
      errors: [],
      /* eslint-disable */
      emailRegex:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    onSignup() {
      this.errors = [];
      // check name is exists or not
      if (!this.signupForm.name) {
        this.errors.push("Name is required.");
      }
      // check email is exists or not
      if (!this.signupForm.email) {
        this.errors.push("Email is required.");
      } else {
        // used regex to check valid email
        if (!this.emailRegex.test(this.signupForm.email)) {
          this.errors.push("Enter valid email.");
        }
      }

      if (!this.signupForm.password) {
        this.errors.push("password is required.");
      }

      if (!this.signupForm.confirmPassword) {
        this.errors.push("Confirm password is required.");
      } else {
        // check passwod and confirm password match or not if confirm password value set
        if (this.signupForm.confirmPassword !== this.signupForm.password) {
          this.errors.push("Password does not match");
        }
      }

      if (this.errors.length) {
        return false;
      } else {
        alert("Signup successfull");
        setTimeout(() => {
          this.$router.push("/login");
        }, 3000);
      }
    },
  },
};
</script>
