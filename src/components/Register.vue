<template>
  <div>
    <strong><p class="h4 text-center mb-4">Register</p></strong>

    <b-form class="container col-lg-5">
      <b-form-group
        class="text-left"
        id="input-group-1"
        label="First Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Enter Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="text-left"
        id="input-group-1"
        label="Last Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Enter Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="text-left"
        id="input-group-1"
        label="Email Address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="text-left"
        id="input-group-1"
        label="Email Password:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="text-left" label="" v-slot="{ ariaDescribedby }">
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="gender"
          value="A"
          >Male</b-form-radio
        >
        <b-form-radio
          v-model="selected"
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
