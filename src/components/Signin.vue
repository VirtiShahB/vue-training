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

export default {
  mixins: [validationMixin, mixin],
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
            this.$router.push("/home");
          } else {
            this.error = true;
          }
        }
      }
    },
  },
};
</script>
