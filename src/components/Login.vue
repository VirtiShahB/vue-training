<template>
  <div>
    <div class="float-right" style="margin-right:50px;" >
      <b-button class="" variant="outline-info" @click="registration()"
        >Register</b-button
      >
    </div>
    <strong><p class="h4 text-center mb-4">Sign In</p></strong>

    <b-form class="container col-lg-5">
      <b-form-group
        class="text-left"
        id="input-group-1"
        label="Email Address:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="text-left"
        id="input-group-1"
        label="Password:"
        label-for="input-password"
      >
        <b-form-input
          id="input-password"
          type="password"
          v-model="password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>
      <div>
        <b-button class="m-1" variant="outline-primary" @click="openDashboard()"
          >Sign In</b-button
        >
        <b-button class="m-1" variant="outline-primary">Reset</b-button>
      </div>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "ripal.darji@bacancy.com",
      password: "123@bacancy",
    };
  },
  props: {
    id: Number,
  },
  methods: {
    openDashboard() {
      var user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("addLoggedIn", user);
      this.$router.push({
        name: "dashboard",
      });
    },
    registration() {
      this.$router.push({
        name: "register",
      });
    },
  },
};
</script>
