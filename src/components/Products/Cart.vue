<template>
  <div>
    <b-toast id="cart-toast" variant="success" solid>
      <template #toast-title> Your Products </template>
      <template #toast-message>
        <router-link :to="checkout">View Cart</router-link>
      </template>
    </b-toast>
    <b-row class="mr-5" :style="styleObject">
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
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: ['selectedItems'],

  watch: {
    selectedItems: function (newVal, oldVal) {
      this.getCartItems()
      this.addTocart(newVal)
      this.makeToast()
    },
    totalCartItem: {
      handler () {
        this.totalCartValue = this.totalCartItem.length
      },
      deep: true
    }
  },
  mounted () {
    this.getCartItems()
    // localStorage.removeItem('cartItems')
  },
  data () {
    return {
      totalCartItem: [],
      totalCartValue: 0,
      styleObject: {
        float: 'right'
      }
    }
  },
  methods: {
    getCartItems () {
      if (localStorage.getItem('cartItems')) {
        this.totalCartItem = JSON.parse(localStorage.getItem('cartItems'))
      } else {
        this.totalCartValue = 0
      }
    },
    persistCart () {
      localStorage.setItem('cartItems', JSON.stringify(this.totalCartItem))
    },
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
        this.persistCart()
      } else if (Object.keys(product).length > 0) {
        this.totalCartItem.push(product)
        this.persistCart()
      }
    },
    buyNow () {
      if (this.totalCartItem.length === 0) {
        this.$emit('errorListener', 'danger', 'Your cart is empty!!')
      } else {
        this.$router.push({
          name: 'Checkout'
        })
      }
    },
    makeToast () {
      const h = this.$createElement
      const $closeButton = h(
        'b-link',
        {
          on: {
            click: () =>
              this.$router.push({
                name: 'Checkout'
              })
          }
        },
        'View Cart'
      )
      this.$bvToast.toast($closeButton, {
        title: 'Product Added',
        solid: true,
        variant: 'success',
        autoHideDelay: 500,
        appendToast: false
      })
    }
  }
}
</script>
