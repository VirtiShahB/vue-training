<template>
  <div>
    <b-toast id="cart-toast" variant="success" solid>
      <template #toast-title> Your Products </template>
      <template #toast-message>
        <router-link :to="checkout">View Cart</router-link>
      </template>
    </b-toast>

    <b-dropdown
      size="xl"
      variant="link"
      toggle-class="text-decoration-none"
      no-caret
      right
    >
      <template #button-content>
        <b-img :src="require('@/assets/icon-cart.svg')" alt=""></b-img>
        <span class="cart-count"> {{ totalCartValue }} </span>
      </template>

      <!-- <b-dropdown-item href="#"> -->
      <div style="min-width: 350px">
        <div class="d-flex flex-column">
          <div class="col-12 p-3 border-bottom">
            <span style="font-weight: 700"> Cart </span>
          </div>
          <div class="col-12" style="max-height: 200px; overflow: auto">
            <div v-if="totalCartItem && totalCartItem.length > 0">
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
import productsData from '../Products/productsData.json'
export default {
  name: 'Cart',
  props: ['selectedItems'],
  watch: {
    selectedItems: function (newVal) {
      this.getCartItems()
      this.addTocart(newVal)
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
  },
  data () {
    return {
      totalCartItem: [],
      totalCartValue: 0,
      cartSummary: [],
      productsData: productsData
    }
  },
  methods: {
    getCartItems () {
      if (localStorage.getItem('cartItems')) {
        this.totalCartItem = JSON.parse(localStorage.getItem('cartItems'))

        const cartData = this.totalCartItem
        this.cartSummary = this.productsData.filter(function (o1) {
          return cartData.some(function (o2) {
            o1.qty = o2.qty
            return o1.id === o2.id
          })
        })
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
    }
  }
}
</script>
