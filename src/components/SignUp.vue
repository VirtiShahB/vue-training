<template>
  <div>
    <div class="main-container">
      <b-form @submit="onSubmit">
        <div class="box-container">
          <h2 class="heading">Create Your Account</h2>
          <div class="form-fields">
            <b-form-input
              id="input-1"
              v-model="form.name"
              type="text"
              placeholder="Enter Name"
              required
            ></b-form-input>
          </div>
          <div class="form-fields">
            <b-form-input
              id="input-2"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </div>
          <div class="form-fields">
            <b-form-input
              id="input-3"
              type="password"
              v-model="form.password"
              placeholder="Enter Password"
              required
            ></b-form-input>
          </div>
          <div class="form-fields">
            <span>{{ error }}</span>
            <b-button class="createaccount" name="commit" type="submit">
              Create your account
            </b-button>
            <p class="forgot-password text-right">
              Already registered
              <router-link :to="{ name: 'Login' }">sign in?</router-link>
            </p>
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
      </b-form>
      <div class="footer">
        <p>Already have an account? <a href="/login"> Sign In</a></p>
      </div>
    </div>
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
    onSubmit () {
      if (this.form.email !== '' && this.form.password !== '') {
        let userInfo = {
          loginType: 'site',
          site: {
            user: {
              name: this.form.name,
              email: this.form.email,
              profileImage: ''
            }
          }
        }
        this.$store.commit('setLoginUser', userInfo)
        this.$emit('authenticated', true)
        this.$router.replace({ name: 'Dashboard' })
      } else {
        this.error = 'A username and password must be present'
      }
    }
  }
}
</script>
