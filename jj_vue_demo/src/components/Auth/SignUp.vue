<template>
  <b-container>
    <b-row class="mt-4">
      <b-col>
        <b-form @submit.prevent>
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              type="email"
              placeholder="Enter email"
              required
              v-model="user.email"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-2"
            class="mt-4"
          >
            <b-form-input
              id="input-2"
              placeholder="Enter name"
              required
              v-model="user.name"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Password:"
            label-for="input-3"
            class="mt-4"
          >
            <b-form-input
              id="input-3"
              type="password"
              placeholder="Password"
              required
              v-model="user.password"
            ></b-form-input>
          </b-form-group>
          <b-button
            type="submit"
            variant="primary"
            class="mt-4"
            @click="signUp()"
            >Register</b-button
          ><br /><br />
          <router-link to="/login">Login</router-link>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      user: {
        email: "",
        password: "",
        name: "",
      },
    };
  },
  methods: {
    signUp() {
      window.localStorage.setItem("user", JSON.stringify(this.user));
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>
