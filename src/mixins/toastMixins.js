import { app } from '@/main'
export const toastMixins = {
  created() {
    this.makeToast()
    this.chkLikeProduct()
  },
  methods: {
    makeToast(variant = null, title = null, message = null) {
      app.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true,
      })
    },
    chkLikeProduct() {
      return app.$store.state.products.likeProducts.map(function (value) {
        return value.id
      })
    },
  },
}
