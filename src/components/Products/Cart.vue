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
              <div
                v-for="(item, index) in cartSummary"
                :key="index"
                class="d-flex flex-row"
              >
                <div></div>
                <div class="d-flex flex-column">
                  <div>
                    <span>
                      {{ item.name }}
                    </span>
                  </div>
                  <div>
                    <span class="text-muted">
                      ${{ item.price.toFixed(2) }} X {{ item.qty }}
                    </span>
                    <span style="font-weight: 700">
                      ${{ (item.price * item.qty).toFixed(2) }}</span
                    >
                  </div>
                </div>
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
        </div>
      </div>
      <!-- </b-dropdown-item> -->
    </b-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartServices from '../../services/CartServices'
const cartService = new CartServices()
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
      this.cartSummary = cartService.getCartData(this.productsData)
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
