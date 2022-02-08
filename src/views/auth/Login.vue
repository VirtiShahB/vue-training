<template>
  <b-container class="bv-example-row mt-3">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            style="min-height: 500px"
            src="https://preview.colorlib.com/theme/bootstrap/login-form-02/images/xbg_1.jpg.pagespeed.ic.R5QWIA8_nZ.webp"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-text class="mx-5 mt-5 text-center">
              <h3>
                Login to <span class="dark"> ECOMMERCE SITE </span>
                <br />
              </h3>
              <p>
                <small class="text-muted"
                  >Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                  consectetur.</small
                >
              </p>
            </b-card-text>
            <b-card-text>
              <b-form @submit.stop.prevent>
                <b-row no-gutters class="justify-content-center m-5">
                  <b-col md="10">
                    <b-form-group>
                      <label>Email Address</label>
                      <b-form-input
                        placeholder="Enter Email"
                        id="email"
                        name="email"
                        v-model="$v.form.email.$model"
                        :state="validateState('email')"
                        aria-describedby="email-feedback"
                      ></b-form-input>
                      <b-form-invalid-feedback id="email-feedback"
                        ><span v-if="!$v.form.email.required"
                          >Email is required</span
                        >
                        <span v-if="form.email && !$v.form.email.email"
                          >Enter valid email address</span
                        ></b-form-invalid-feedback
                      >
                    </b-form-group>
                    <b-form-group class="mt-2">
                      <label>Password</label>
                      <b-form-input
                        placeholder="Enter Password"
                        id="password"
                        type="password"
                        name="password"
                        v-model="$v.form.password.$model"
                        :state="validateState('password')"
                        aria-describedby="password-feedback"
                      ></b-form-input>
                      <b-form-invalid-feedback id="password-feedback"
                        ><span v-if="!$v.form.password.required"
                          >Password is required</span
                        >
                        <span
                          v-if="form.password && !$v.form.password.minLength"
                          >The password must be at least 6 characters.</span
                        ></b-form-invalid-feedback
                      >
                    </b-form-group>
                    <b-form-group class="mt-2">
                      <div class="d-grid gap-2 mt-4">
                        <b-button
                          class="float-right btn-block"
                          @click="onSubmit($event)"
                          squared
                          variant="success"
                          >Login Now</b-button
                        >
                      </div>
                    </b-form-group>
                    <b-form-group>
                      <div class="d-grid gap-2">
                        <b-button
                          class="float-right btn-block"
                          @click="loginWithGoogle"
                          squared
                          variant="danger"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-google"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                            />
                          </svg>
                          Login With Google+</b-button
                        >
                      </div>
                    </b-form-group>
                    <b-form-group>
                      <div class="d-grid gap-2">
                        <b-button
                          class="float-right btn-block btn-google"
                          @click="loginWithFacebook"
                          squared
                          variant="primary"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-facebook"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                            />
                          </svg>
                          Login with Facobook</b-button
                        >
                      </div>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import { toastMixins } from "../../mixins/toastMixins";
import { initFbsdk } from "../../config/FacebookSDK.js";
export default {
  mixins: [toastMixins],
  name: "Login",
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(4),
      },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        email: null,
        password: null,
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    async onSubmit(event) {
      event.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.$api.auth.login(this.form);
    },
    loginWithGoogle() {
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          if (GoogleUser.getId()) {
            let loginArr = {
              login_type: 1, // via google
              google_id: GoogleUser.getId(),
              first_name: GoogleUser.getBasicProfile().getGivenName(),
              last_name: GoogleUser.getBasicProfile().getFamilyName(),
              email: GoogleUser.getBasicProfile().getEmail(),
              password: "",
            };
            this.$api.auth.login(loginArr);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    loginWithFacebook() {
      let loginArr = null;
      window.FB.login(
        (response) => {
          if (response.status === "connected") {
            window.FB.api(
              "/me?fields=email,name,first_name,last_name",
              (userInfo) => {
                loginArr = {
                  login_type: 2, // via Facebook
                  facebook_id: userInfo.id,
                  first_name: userInfo.first_name,
                  last_name: userInfo.last_name,
                  email: userInfo.email,
                  password: "",
                };
                if (loginArr) {
                  this.$api.auth.login(loginArr);
                }
              }
            );
          }
        },
        { scope: "email" }
      );
    },
  },
  mounted() {
    initFbsdk();
  },
};
</script>

<style scoped>
label {
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 5px;
}
</style>