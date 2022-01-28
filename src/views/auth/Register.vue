<template>
  <b-container class="bv-example-row mt-3">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-body>
            <b-card-text class="mx-5 mt-5 text-center">
              <h3>
                Signup on <span class="text-muted"> ECOMMERCE SITE </span>
                <br />
              </h3>
              <p>
                <small class="text-muted"
                  >Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                  consectetur.</small
                >
              </p>
            </b-card-text>
            <b-card-text class="m-3">
              <b-form>
                <b-row no-gutters class="justify-content-center">
                  <b-col md="6">
                    <b-form-group>
                      <label>First Name</label>
                      <b-form-input
                        id="first_name"
                        name="first_name"
                        v-model="$v.form.first_name.$model"
                        :state="validateState('first_name')"
                        aria-describedby="input-1-live-feedback"
                      ></b-form-input>
                      <b-form-invalid-feedback id="input-1-live-feedback"
                        >This is a required field.</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group>
                      <label>Last Name</label>
                      <b-form-input
                        id="last_name"
                        name="last_name"
                        v-model="$v.form.last_name.$model"
                        :state="validateState('last_name')"
                        aria-describedby="last-name-feedback"
                      ></b-form-input>
                      <b-form-invalid-feedback id="last-name-feedback"
                        >This is a required field.</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col md="12">
                    <b-form-group>
                      <label>Email Address</label>
                      <b-form-input
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
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col md="12">
                    <b-form-group>
                      <label>Password</label>
                      <b-form-input
                        id="password"
                        type="password"
                        name="password"
                        v-model="$v.form.password.$model"
                        :state="validateState('password')"
                        aria-describedby="password-feedback"
                      ></b-form-input>
                      <b-form-invalid-feedback id="password-feedback"
                        >This is a required field.</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col md="12">
                    <b-form-group>
                      <label>Confirm Password</label>
                      <b-form-input
                        id="confirm_password"
                        type="password"
                        name="confirm_password"
                        v-model="$v.form.confirm_password.$model"
                        :state="validateState('confirm_password')"
                        aria-describedby="confirm-password-feedback"
                      ></b-form-input>
                      <b-form-invalid-feedback id="confirm-password-feedback"
                        ><span v-if="!$v.form.confirm_password.required"
                          >Confirm Password is required</span
                        >
                        <span
                          v-if="
                            form.confirm_password &&
                            !$v.form.confirm_password.sameAsPassword
                          "
                          >Password and Confirm Password should match</span
                        ></b-form-invalid-feedback
                      >
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col md="12">
                    <div class="d-grid gap-2 mt-4">
                      <b-button
                        type="submit"
                        class="float-end"
                        squared
                        variant="success"
                        @click="onSubmit($event)"
                        >Login Now</b-button
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-form>
            </b-card-text>
          </b-card-body>
        </b-col>
        <b-col md="6">
          <b-card-img
            src="https://colorlib.com/etc/regform/colorlib-regform-15/images/signup-img.jpg"
            alt="Image"
            class="rounded-0 side-cover-image"
          ></b-card-img>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import { required, email, sameAs } from "vuelidate/lib/validators";
export default {
  name: "Register",
  data() {
    return {
      form: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        confirm_password: null,
      },
    };
  },
  validations: {
    form: {
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
      confirm_password: {
        required,
        sameAsPassword: sameAs("password"),
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
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        confirm_password: null,
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit(event) {
      event.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.$api.auth.register(this.form);
      alert("Registration done sucessfully!");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
label {
  font-weight: 500;
  margin-bottom: 5px;
}
.side-cover-image {
  object-fit: cover;
  max-height: 540px;
}
</style>