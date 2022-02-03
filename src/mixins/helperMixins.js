import { app } from '@/main'
import { toastMixins } from '../mixins/toastMixins'
export const helperMixins = {
  created() {
    this.chkLikeProduct()
  },
  methods: {
    addToProductInWishlist(productId = null) {
      var product = app.$store.state.products.wishlist.find(
        (p) => p.id === parseInt(productId),
      )
      if (product) {
        app.$store.dispatch('products/removeToWishlist', {
          id: productId,
        })
        toastMixins.methods.makeToast(
          'success',
          'Sucess!',
          'Removed product from wishlist successfully!',
        )
      } else {
        app.$store.dispatch('products/addToWishlist', {
          id: productId,
        })
        toastMixins.methods.makeToast(
          'success',
          'Sucess!',
          'Added in your wishlist successfully!',
        )
      }
    },
    setLikeProduct(productId = null) {
      app.$api.products.likeProduct(productId)
    },
    chkLikeProduct() {
      return app.$store.state.products.likeProducts.map(function (value) {
        return value.id
      })
    },
    getWishListProducts() {
      return app.$store.state.products.wishlist.map(function (value) {
        return value.id
      })
    },
  },
}
