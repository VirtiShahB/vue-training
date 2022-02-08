<template>
  <div>
    <b-container class="bv-example-row w-50 mb-5">
      <h3 class="text-left">Sign in</h3>
      <br />
      <div class="success" v-if="error">
        <b-alert show variant="danger"> {{ this.errorText }} </b-alert>
      </div>
      <b-form @submit.stop.prevent="onSubmit" class="checkour_form text-left">
        <b-row>
          <b-col>
            <b-form-group label="Email" label-for="email">
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                :class="{ 'is-invalid': submitted && $v.form.email.$error }"
              ></b-form-input>
              <div
                v-if="submitted && $v.form.email.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.form.email.required">Email is required</span>
                <span v-if="!$v.form.email.email">Email is invalid</span>
              </div>
            </b-form-group>
            <b-form-group label="Password" label-for="password">
              <b-form-input
                id="password"
                v-model="form.password"
                type="password"
                :class="{ 'is-invalid': submitted && $v.form.password.$error }"
              ></b-form-input>
              <div
                v-if="submitted && $v.form.password.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.form.password.required"
                  >Password is required</span
                >
              </div>
            </b-form-group>
            <b-button type="submit" variant="primary" class="mr-2"
              >Sign in</b-button
            >
            <p class="btn d-inline">
              Don't have an account?
              <router-link to="/signup"> Sign up </router-link>
            </p>
            <hr />
            <div class="signup-buttons">
              <div id="fb-root"></div>
              <b-row
                ><b-col>
                  <a
                    href="#"
                    class="google-signup sso-btn d-flex btn btn-lg btn-outline-secondary bg-white text-body align-items-center"
                    @click.prevent="loginWithGoogle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      aria-hidden="true"
                    >
                      <title>Google</title>
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="#4285F4"
                          d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"
                        ></path>
                        <path
                          fill="#34A853"
                          d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"
                        ></path>
                        <path
                          fill="#FBBC05"
                          d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"
                        ></path>
                        <path
                          fill="#EA4335"
                          d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"
                        ></path>
                      </g>
                    </svg>
                    Google
                  </a>
                </b-col>
                <b-col>
                  <a
                    href="#"
                    class="facebook-signup sso-btn d-flex btn btn-lg btn-outline-secondary bg-white text-body align-items-center"
                    @click.prevent="loginWithFacebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#3578E5"
                    >
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                      />
                    </svg>
                    Facebook
                  </a></b-col
                >
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import { mixin } from "../mixin";
import { initFbsdk } from "../facebook.js";

export default {
  mixins: [validationMixin, mixin],
  mounted() {
    initFbsdk();
  },
  data() {
    return {
      submitted: false,
      error: false,
      errorText: "You have entered an invalid username or password",
      users: [],
      form: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
    },
  },
  methods: {
    onSubmit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]));
      }
      const registerUsers = JSON.parse(localStorage.getItem("users"));
      if (registerUsers.length > 0) {
        for (var i = 0; i < registerUsers.length; i++) {
          if (
            registerUsers[i].email === this.form.email &&
            registerUsers[i].password === this.form.password
          ) {
            localStorage.setItem("LoggedUser", registerUsers[i]);
            window.location = "/home";
          } else {
            this.error = true;
          }
        }
      } else {
        this.error = true;
      }
    },
  },
};
</script>
