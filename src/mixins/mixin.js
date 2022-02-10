
export default {

  methods: {
    viewToast (message, variant = null) {
      this.$bvToast.toast(message, {
        title: 'Cart',
        toaster: 'b-toaster-bottom-right',
        autoHideDelay: 1000,
        variant: variant,
        solid: true
      })
    }
  }
}
