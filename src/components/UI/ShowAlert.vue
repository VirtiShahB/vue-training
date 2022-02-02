<template>
  <div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      :variant="alertType"
      @dismiss-count-down="countDownChanged"
      >{{ errorMessage }}
    </b-alert>
  </div>
</template>

<script>
export default {
  name: 'ShowAlert',
  props: ['error'],
  watch: {
    error (newval) {
      this.showAlert(newval[0], newval[1])
    }
  },
  data () {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      errorMessage: '',
      alertType: 'danger'
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert (type, msg) {
      this.alertType = type
      this.errorMessage = msg
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
