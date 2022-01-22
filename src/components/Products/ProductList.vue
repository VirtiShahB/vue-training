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

    <b-row style="float: right">
      <b-badge variant="danger">
        <b-icon-cart></b-icon-cart>{{ totalCartValue }}
      </b-badge>
    </b-row>
    <b-row>
      <b-col
        md="6"
        class="mt-5"
        v-for="product in productsData"
        :key="product.id"
      >
        <ItemCard :product="product" @cartListener="addTocart" />
      </b-col>
    </b-row>
    <b-row class="mt-5 ml-5">
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
      alertType: 'danger'
    }
  },
  computed: {
    totalCartValue () {
      if (this.totalCartItem.length === 0) {
        return ''
      } else {
        return this.totalCartItem
          .map((item) => item.qty)
          .reduce((prev, next) => prev + next)
      }
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
        this.showAlert('success', 'Hooray You have ' + this.totalCartValue + ' products in cart ! Buy product Work in progress !!')
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
