<template>
  <div>
    <b-card
      :img-src="product.image"
      :img-alt="product.title"
      img-top
      tag="article"
      style="max-width: 20rem; height: 33rem"
      class="mb-2"
    >
      <b-link @click="itemDetail(product.id)" style="text-decoration: none"
        ><h4>{{ product.title | capitalize | readMore(50, "...") }}</h4></b-link
      >
      <b-card-text>
        {{ product.description | readMore(100)
        }}<b-link @click="itemDetail(product.id)" style="text-decoration: none"
          ><h6>...Read More</h6></b-link
        >
      </b-card-text>
      <template #footer>
        <b-row>
          <b-col md="6"
            ><b-card-text>
              <h3>{{ product.price | toFixed(2) | toUSD }}</h3>
            </b-card-text></b-col
          >
          <b-col md="3"
            ><b-icon
              @click="addToCart(product.id)"
              icon="cart-fill"
              class="rounded-circle bg-danger p-2"
              font-scale="2 "
              variant="light"
              v-b-tooltip.hover
              title="Add to cart"
            ></b-icon
          ></b-col>
          <b-col v-show="!fromWishlist && !favFlag" md="3"
            ><b-icon
              @click="addToWishList(product.id)"
              icon="heart"
              class="p-2"
              font-scale="2 "
              variant="danger"
              v-b-tooltip.hover
              title="WishList"
            ></b-icon
          ></b-col>
          <b-col v-show="!fromWishlist && favFlag" md="3"
            ><b-icon
              @click="deleteFromWishList(product.id)"
              icon="heart-fill"
              class="p-2"
              font-scale="2 "
              variant="danger"
              v-b-tooltip.hover
              title="WishList"
            ></b-icon
          ></b-col>
          <b-col v-show="fromWishlist" md="3"
            ><b-icon
              @click="deleteFromWishList(product.id)"
              icon="heart-fill"
              class="p-2"
              font-scale="2 "
              variant="danger"
              v-b-tooltip.hover
              title="Remove From WishList"
            ></b-icon
          ></b-col>
        </b-row>
      </template>
    </b-card>
  </div>
</template>

<script>
import { setStore, getStore } from '../../../config/util'
import CartServices from '../../services/CartServices'
const cartService = new CartServices()
export default {
  name: 'ItemCard',
  components: {},
  props: ['product', 'fromWishlist'],
  data () {
    return {
      wishListItems: [],
      favFlag: false
    }
  },
  mounted () {
    this.wishListItems = getStore('userFavItems')
    this.checkFavItem()
  },
  computed: {},
  methods: {
    checkFavItem () {
      if (this.wishListItems && this.wishListItems.length > 0) {
        if (this.wishListItems.indexOf(this.product.id) >= 0) {
          this.favFlag = true
        } else {
          this.favFlag = false
        }
      }
    },
    addToCart (productId) {
      cartService.addToCart(productId, 1)
    },
    itemDetail (productId) {
      this.$router.push({
        name: 'ItemDetail',
        params: {
          productId: productId
        }
      })
    },
    addToWishList (productId) {
      let favItems = []
      favItems = getStore('userFavItems')
      favItems.push(productId)
      setStore('userFavItems', favItems)
      this.wishListItems = getStore('userFavItems')
      this.checkFavItem()
    },
    deleteFromWishList (productId) {
      this.wishListItems.splice(this.wishListItems.indexOf(productId), 1)
      this.$emit('refreshWishList', productId)
      this.checkFavItem()
    }
  }
}
</script>
