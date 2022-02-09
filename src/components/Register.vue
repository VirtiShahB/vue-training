<template>
  <div>
    <b-button @click="login()" class="float-right m-3" variant="info"
      >Login</b-button
    >
    <br />
    <strong><p class="h4 text-center mb-4">Register</p></strong>

    <b-form class="container col-lg-5">
      <b-form-group
        class="text-left"
        id="input-group-1"
        label="First Name:"
        label-for="input-firstname"
      >
        <b-form-input
          id="input-firstname"
          type="text"
          placeholder="Enter Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="text-left"
        id="input-group-2"
        label="Last Name:"
        label-for="input-lastname"
      >
        <b-form-input
          id="input-lastname"
          type="text"
          placeholder="Enter Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="text-left"
        id="input-group-3"
        label="Email Address:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="text-left"
        id="input-group-4"
        label="Email Password:"
        label-for="input-password"
      >
        <b-form-input
          id="input-password"
          type="password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="text-left" label="" v-slot="{ ariaDescribedby }">
        <b-form-radio
          :aria-describedby="ariaDescribedby"
          name="gender"
          value="A"
          >Male</b-form-radio
        >
        <b-form-radio
          :aria-describedby="ariaDescribedby"
          name="gender"
          value="B"
          >Female</b-form-radio
        >
      </b-form-group>

      <div>
        <b-button class="m-1" variant="outline-primary">Register</b-button>
        <b-button class="m-1" variant="outline-primary">Cancel</b-button>
      </div>
    </b-form>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>
