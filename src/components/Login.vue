<template>
  <div>
    <form @submit="onSubmit" @reset="onReset">
      <div class="box-container">
        <h2 class="heading">Sign In</h2>
        <div class="form-fields">
          <input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="form-fields">
          <input
            id="input-2"
            type="password"
            v-model="form.password"
            placeholder="Enter Password"
            required
          />
        </div>
        <div class="form-fields">
          <button class="signIn" name="commit" type="submit">Sign In</button>
        </div>
        <div class="login-choice"><span>or Sign In with</span></div>
        <SocialLogin @authenticated="$emit('authenticated', true)" />
      </div>
    </form>
  </div>
</template>

<script>
import SocialLogin from './SocialSignUp'
export default {
  name: 'Login',
  components: { SocialLogin },
  data () {
    return {
      form: {
        email: '',
        name: ''
      },
      error: ''
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      if (this.form.email !== '' && this.form.password !== '') {
        if (
          this.form.email === this.$store.state.mockAccount.email &&
          this.form.password === this.$store.state.mockAccount.password
        ) {
          var userInfo = {
            loginType: 'site',
            site: {
              user: {
                name: this.$store.state.mockAccount.name,
                email: this.$store.state.mockAccount.email,
                profileImage: ''
              }
            }
          }
          this.$store.commit('setLoginUser', userInfo)
          this.$emit('authenticated', true)
          this.$router.replace({ name: 'Dashboard' })
        } else {
          this.error = 'The username and / or password is incorrect'
        }
      } else {
        this.error = 'A username and password must be present'
      }
    },
    onReset (event) {
      event.preventDefault()
      this.form.email = ''
      this.form.password = ''
    }
  }
}
</script>
