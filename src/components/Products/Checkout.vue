<template>
  <div class="mr-5 ml-5 mt-5">
    <ShowAlert :error="error" />
    <b-row>
      <b-col>
        <ShippingDetails />
      </b-col>
      <b-col :class="[{ summary: true }]">
        <b-row class="text-center mt-3 mb-3">
          <b-col colspan="10"
            ><b><h3>Product</h3></b></b-col
          >
          <b-col colspan="3" class="text-right mr-5"
            ><b><h3>Total</h3></b></b-col
          >
        </b-row>
        <div v-for="product in cartSummary" :key="product.id">
          <b-row class="border-top">
            <b-col class="mt-3 mb-3" cols="1"
              ><img :src="product.image" width="50" height="50"
            /></b-col>
            <b-col cols="7" class="ml-3 mt-3">{{ product.title }}</b-col>
            <b-col cols="1" class="text-right mt-3">{{ product.qty }} X</b-col>
            <b-col cols="1" class="text-center mt-3"
              >{{ product.price | toFixed(2) | toUSD }}
            </b-col>
            <b-col cols="1" class="text-right mt-3">
              <b-icon-trash
                variant="danger"
                @click="removeFromCart(product.id)"
              />
            </b-col>
          </b-row>
        </div>
        <b-row class="text-center border-top mt-3">
          <b-col class="mt-3" colspan="10"
            ><b><h3>Total</h3></b></b-col
          >
          <b-col colspan="3" class="mt-3 text-right"
            ><b
              ><h3>{{ getSubtotal | toFixed(2) | toUSD }}</h3></b
            ></b-col
          >
        </b-row>
        <hr />
        <b-row>
          <b-col class="md-4 text-center">
            <b-button @click="$router.push('dashboard')" variant="info"
              >Countinue Shopping</b-button
            >
          </b-col>
          <b-col class="md-4 text-center" v-show="this.cartCount > 0">
            <b-button variant="warning" @click="placeOrder"
              >Place Order</b-button
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShippingDetails from './ShippingDetails'
import ShowAlert from '../UI/ShowAlert'

export default {
  name: 'Checkout',
  components: { ShippingDetails, ShowAlert },
  mounted () {
    this.refreshCart()
  },
  computed: {
    ...mapGetters({
      productsData: 'productsData'
    }),
    cartCount () {
      return this.cartSummary.length
    },
    getSubtotal () {
      if (this.cartSummary.length > 0) {
        return this.cartSummary
          .map((item) => item.price * item.qty)
          .reduce((prev, next) => prev + next)
      }
      return 0
    }
  },
  data () {
    return {
      cartSummary: [],
      show: true,
      error: {}
    }
  },
  methods: {
    refreshCart () {
      this.cartSummary = this.$helpers.getCartData(this.productsData)
    },
    placeOrder () {
      this.$helpers.flushCart()
      this.cartSummary = []
      this.error = ['success', 'Horray !! Order Placed , Continue shopping']
    },
    removeFromCart (productId) {
      this.$helpers.removeFromCart(productId)
      this.refreshCart()
    }
  }
}
</script>
<style scoped>
.summary {
  margin-left: 10%;
  background-color: #f9f9f9;
}
.cart-border {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
