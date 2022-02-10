<template>
  <div>
    <b-dropdown
      size="xl"
      variant="link"
      toggle-class="text-decoration-none"
      no-caret
      right
    >
      <template #button-content>
        <b-img :src="require('@/assets/icon-cart.svg')" alt=""></b-img>
        <span class="cart-count"> {{ cartCount }} </span>
      </template>

      <!-- <b-dropdown-item href="#"> -->
      <div style="min-width: 350px">
        <div class="d-flex flex-column">
          <div class="col-12 p-3 border-bottom">
            <span style="font-weight: 700"> Cart </span>
          </div>
          <div class="col-12" style="max-height: 200px; overflow: auto">
            <div v-if="cartSummary && cartCount > 0">
              <div v-for="(item, index) in cartSummary" :key="index">
                <div class="border-top mb-3">
                  <div class="mt-3">
                    <span>
                      <img :src="item.image" height="30" width="30" />
                    </span>
                    <span class="ml-5 text-right">
                      {{ item.title | readMore(20, "..") }}
                    </span>
                  </div>
                  <div>
                    <span class="ml-5 text-muted text-right">
                      ${{ item.price.toFixed(2) }} X {{ item.qty }}
                    </span>
                    <span class="ml-5 text-right" style="font-weight: 700">
                      ${{ (item.price * item.qty).toFixed(2) }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-12 p-3 border-top">
                <b-button
                  class="checkout-btn bg-add-cart border-0"
                  style="width: 100%"
                  @click="buyNow"
                >
                  <span style="font-weight: 700"> Checkout </span>
                </b-button>
              </div>
            </div>
            <div v-else>
              <div
                class="row justify-content-center align-items-center"
                style="min-height: 200px"
              >
                <div class="col-12 text-center">
                  <span class="text-muted" style="font-weight: 700">
                    Your cart is empty.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </b-dropdown-item> -->
    </b-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  watch: {
    '$store.state.cartUpdate': function () {
      this.refreshCart()
    }
  },
  mounted () {
    this.refreshCart()
  },
  data () {
    return {
      cartSummary: []
    }
  },
  computed: {
    ...mapGetters({
      productsData: 'productsData'
    }),
    cartCount () {
      return this.cartSummary.length
    }
  },
  methods: {
    refreshCart () {
      this.cartSummary = this.$helpers.getCartData(this.productsData)
    },
    buyNow () {
      if (this.cartCount === 0) {
        this.$emit('errorListener', 'danger', 'Your cart is empty!!')
      } else {
        this.$router.push({
          name: 'Checkout'
        })
      }
    }
  }
}
</script>
