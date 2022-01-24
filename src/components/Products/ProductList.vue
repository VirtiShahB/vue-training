<template>
  <div class="">
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      :variant="alertType"
      @dismiss-count-down="countDownChanged"
      >{{ errorMessage }}
    </b-alert>

    <b-row :style="styleObject">
      <b-icon
        @click="buyNow"
        icon="cart-fill"
        class="rounded-circle bg-danger p-2"
        font-scale="2"
        variant="light"
        v-b-tooltip.hover
        title="View Cart"
      ></b-icon>
      <b-badge variant="light"> {{ totalCartValue }} </b-badge>
    </b-row>
    <b-row class="mt-5">
      <b-col
        md="6"
        class="mt-5"
        v-for="product in productsData"
        :key="product.id"
      >
        <ItemCard :product="product" @cartListener="addTocart" />
      </b-col>
    </b-row>
    <b-row class="mt-5" style="margin-left: 45%;">
      <b-button variant="warning" @click="buyNow"
        ><b-icon-cart></b-icon-cart>Buy Now</b-button
      >
    </b-row>
  </div>
</template>

<script>
import ItemCard from './ItemCard'
import productsData from './productsData.json'
export default {
  name: 'Dashboard',
  components: { ItemCard },
  data () {
    return {
      productsData: productsData,
      totalCartItem: [],
      dismissSecs: 5,
      dismissCountDown: 0,
      errorMessage: '',
      alertType: 'danger',
      styleObject: {
        float: 'right'
      }
    }
  },
  computed: {
    totalCartValue () {
      return this.totalCartItem.length
    }
  },
  methods: {
    addTocart (product) {
      const exists = this.totalCartItem.some(function (item) {
        return item.id === product.id
      })
      if (exists) {
        this.totalCartItem.map((item) => {
          if (item.id === product.id) {
            item.qty = product.qty
          }
        })
      } else {
        this.totalCartItem.push(product)
      }
    },
    buyNow () {
      if (this.totalCartItem.length === 0) {
        this.showAlert('danger', 'Your cart is empty!!')
      } else {
        this.$router.push({
          name: 'Checkout',
          params: {
            cartData: this.totalCartItem
          }
        })
      }
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert (type, msg) {
      this.alertType = type
      this.errorMessage = msg
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
<style scoped>
.badge {
  position: relative;
  top: -10px;
  font-size: 17px;
  background-color: white;
}
</style>
