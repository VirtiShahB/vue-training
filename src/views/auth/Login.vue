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
                    <div class="d-grid gap-2 mt-4">
                      <b-button
                        class="float-right"
                        @click="onSubmit($event)"
                        squared
                        variant="success"
                        >Login Now</b-button
                      >
                    </div>
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