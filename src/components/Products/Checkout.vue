<template>
  <div class="mr-5 ml-5 mt-5">
    <ShowAlert :error="error" />
    <b-row>
      <b-col>
        <ShippingDetails />
      </b-col>
      <b-col :class="[{ summary: true }]">
        <b-row class="text-center">
          <b-col colspan="10"><b><h3>Product</h3></b></b-col>
          <b-col colspan="2" class="text-right mr-5"><b><h3>Total</h3></b></b-col>
        </b-row>
        <b-row
          class="border-top mt-3"
          v-for="product in cartSummary"
          :key="product.id"
        >
          <b-col cols="1"
            ><img :src="product.image" width="50" height="50"
          /></b-col>
          <b-col cols="8" class="ml-3">{{ product.title }}</b-col>
          <b-col cols="1" class="text-right">{{ product.qty }} X</b-col>
          <b-col cols="1" class="text-right"
            >{{ product.price | toFixed(2) | toUSD }}
          </b-col>
        </b-row>
        <b-row class="text-center border-top mt-3">
          <b-col colspan="10"><b><h3>Total</h3></b></b-col>
          <b-col colspan="2" class="text-right"><b><h3>{{ getSubtotal | toFixed(2) | toUSD}}</h3></b></b-col>
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
import CartServices from '../../services/CartServices'
const cartService = new CartServices()

export default {
  name: 'Checkout',
  components: { ShippingDetails, ShowAlert },
  mounted () {
    this.cartSummary = cartService.getCartData(this.productsData)
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
      error: {},
      fields: [
        // A virtual column that doesn't exist in items
        { key: 'image', label: '' },
        // A column that needs custom formatting
        { key: 'title', label: 'Product' },
        // A virtual column made up from two fields
        { key: 'total', label: 'Total' }
      ]
    }
  },
  methods: {
    refreshCart () {
      this.cartSummary = []
    },
    placeOrder () {
      cartService.flushCart()
      this.refreshCart()
      this.error = ['success', 'Horray !! Order Placed , Continue shopping']
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
