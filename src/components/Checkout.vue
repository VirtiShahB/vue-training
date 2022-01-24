<template>
  <div>
    <b-row>
      <b-col class="md-8">
        <ShippingDetails />
      </b-col>
      <b-col :class="['md-4', 'mr-5', { summary: true }]">
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
          <b-col class="md-2"> ${{ product.qty * product.price }} </b-col>
        </b-row>
        <b-row>
          <b-col class="md-10">
            <h3>Subtotal</h3>
          </b-col>
          <b-col class="md-2">
            <h3>${{getSubtotal}}</h3>
            <b-checkbox>Free Shipping</b-checkbox>
            <b-checkbox>Local Pickup</b-checkbox>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col class="md-10">
            <h3>Total</h3>
          </b-col>
          <b-col class="md-2">
            <h3>${{getSubtotal}}</h3>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col class="md-4 text-center">
            <b-button @click="$router.push('dashboard')" variant="info"
              >Countinue Shopping</b-button
            >
          </b-col>
          <b-col class="md-4 text-center">
            <b-button variant="warning">Place Order</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import productsData from './Products/productsData.json'
import ShippingDetails from './ShippingDetails'
export default {
  name: 'Checkout',
  components: { ShippingDetails },
  mounted () {
    this.getProductData()
  },
  computed: {
    CartData () {
      return this.$route.params.cartData
    },
    getSubtotal () {
      return this.cartSummary
        .map((item) => item.price * item.qty)
        .reduce((prev, next) => prev + next)
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
      show: true
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
      const cartData = this.$route.params.cartData
      if (cartData === undefined) {
        this.$router.push({
          name: 'dashboard'
        })
      } else {
        this.cartSummary = this.productsData.filter(function (o1) {
          return cartData.some(function (o2) {
            o1.qty = o2.qty
            return o1.id === o2.id
          })
        })
      }
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
