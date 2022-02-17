<template>
  <div>
    <b-card
      :img-src="product.image"
      :img-alt="product.title"
      img-top
      tag="article"
      style="max-width: 30rem; height: 35rem"
      class="mb-2 text-left"
    >
      <b-link @click="itemDetail(product.id)" style="text-decoration: none">
        <h4>{{ product.title | capitalize | readMore(50, "...") }}</h4>
      </b-link>
      <b-card-text>
        {{ product.description | readMore(100) }}
        <b-link @click="itemDetail(product.id)" style="text-decoration: none">
          <h6>...Read More</h6>
        </b-link>
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
export default {
  name: 'ItemCard',
  props: ['product', 'fromWishlist'],
  data () {
    return {
      wishListItems: [],
      favFlag: false
    }
  },
  mounted () {
    this.wishListItems = this.$helpers.getStore('userFavItems')
    this.checkFavItem()
  },
  methods: {
    checkFavItem () {
      this.wishListItems = this.$helpers.getStore('userFavItems')
      if (this.wishListItems && this.wishListItems.length > 0) {
        if (this.wishListItems.indexOf(this.product.id) >= 0) {
          this.favFlag = true
        } else {
          this.favFlag = false
        }
      } else {
        this.favFlag = false
      }
    },
    addToCart (productId) {
      this.viewToast('Item added to cart!', 'success')
      this.$helpers.addToCart(productId, 1)
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
      this.$helpers.addToWishList(productId)
      this.checkFavItem()
    },
    deleteFromWishList (productId) {
      this.$helpers.deleteFromWishList(productId)
      this.checkFavItem()
    }
  }
}
</script>
