<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col md="4"></b-col>
        <b-col md="4" class="text-center"> <h1>Sign up</h1></b-col>
      </b-row>
      <b-row>
        <b-col md="4"></b-col>
        <b-col md="4">
          <b-form @submit="onSubmit">
            <b-form-group
              id="input-group-1"
              label="Full Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.fullName"
                type="text"
                placeholder="Enter Name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-1" label="Email:" label-for="input-1">
              <b-form-input
                id="input-2"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Password:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                type="password"
                v-model="form.password"
                placeholder="Enter Password"
                required
              ></b-form-input>
            </b-form-group>
            <span>{{ error }}</span>
            <b-button type="submit" variant="primary">Sign Up</b-button>
            <p class="forgot-password text-right">
              Already registered
              <router-link :to="{ name: 'Login' }">sign in?</router-link>
            </p>
          </b-form>
        </b-col>
        <b-col md="4"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      if (this.form.email !== '' && this.form.password !== '') {
        this.$emit('authenticated', true)
        this.$router.replace({ name: 'Dashboard' })
      } else {
        this.error = 'A username and password must be present'
      }
    }
  }
}
</script>
