<template>
  <div>
    <div class="main-container">
      <form>
        <div class="box-container">
          <h2 class="heading">Create Your Account</h2>
          <div class="form-fields">
            <input
              id="user_name"
              name="username"
              type="text"
              placeholder="Full name"
            />
          </div>
          <div class="form-fields">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div class="form-fields">
            <input
              id="password"
              name="password"
              type="text"
              placeholder="Password"
            />
          </div>
          <div class="form-fields">
            <button class="createaccount" name="commit" type="submit">
              Create your account
            </button>
          </div>
          <div class="login-choice"><span>or sign up with</span></div>
          <SocialSignUp />
          <div>
            <p class="center">
              By signing up you agree to the
              <a href="#">Terms of Service</a>.
            </p>
          </div>
        </div>
      </form>
      <div class="footer">
        <p>Already have an account? <a href="/login"> Sign In</a></p>
      </div>
    </div>
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
import SocialSignUp from './SocialSignUp'
export default {
  name: 'SignUp',
  components: { SocialSignUp },
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
