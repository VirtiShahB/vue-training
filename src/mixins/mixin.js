
export default {

  methods: {
    viewToast (message, variant = null) {
      this.$bvToast.toast(message, {
        title: `Variant ${variant || 'default'}`,
        variant: variant,
        solid: true
      })
    }
  }
}
