<template>
  <div class="mr-5 ml-5">
    <ShowAlert :error="error" />
    <b-row>
      <b-col>
        <ShippingDetails />
      </b-col>
      <b-col :class="[{ summary: true }]">
        <b-row>
          <b-col class="md-10">
            <h3>Product</h3>
          </b-col>
          <b-col class="md-2">
            <h3>Total</h3>
          </b-col>
        </b-row>
        <hr />
        <b-row
          v-for="product in cartSummary"
          :key="product.id"
          class="cart-border"
        >
          <b-col class="md-10">
            <b-row>
              <b-col class="md-6">{{ product.name }}</b-col>
              <b-col class="md-2">Qty: {{ product.qty }}</b-col>
            </b-row>
          </b-col>
          <b-col class="md-2"> ${{ (product.qty * product.price).toFixed(2) }} </b-col>
        </b-row>
        <b-row>
          <b-col class="md-10">
            <h3>Total</h3>
          </b-col>
          <b-col class="md-2">
            <h3>${{ getSubtotal.toFixed(2) }}</h3>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col class="md-4 text-center">
            <b-button @click="$router.push('dashboard')" variant="info"
              >Countinue Shopping</b-button
            >
          </b-col>
          <b-col class="md-4 text-center" v-show="this.cartSummary.length > 0">
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
import productsData from './Products/productsData.json'
import ShippingDetails from './ShippingDetails'
import ShowAlert from './UI/ShowAlert'
export default {
  name: 'Checkout',
  components: { ShippingDetails, ShowAlert },
  mounted () {
    this.getProductData()
  },
  computed: {
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
      productsData: productsData,
      cartSummary: [],
      form: {
        email: '',
        name: ''
      },
      show: true,
      error: {}
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
    },
    getProductData () {
      if (localStorage.getItem('cartItems')) {
        const cartData = JSON.parse(localStorage.getItem('cartItems'))
        this.cartSummary = this.productsData.filter(function (o1) {
          return cartData.some(function (o2) {
            o1.qty = o2.qty
            return o1.id === o2.id
          })
        })
      }
    },
    placeOrder () {
      localStorage.removeItem('cartItems')
      this.cartSummary = []
      this.error = ['success', 'Horray Order Placed , Continue shopping']
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
