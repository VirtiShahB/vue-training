import { app } from '@/main'
export const toastMixins = {
  created() {
    this.makeToast()
  },
  methods: {
    makeToast(variant = null, title = null, message = null) {
      app.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true,
      })
    },
  },
}
