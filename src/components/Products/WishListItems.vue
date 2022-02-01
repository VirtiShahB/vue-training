<template>
  <div>
    <b-row class="text-center">
      <b-col
        v-show="products.length > 0"
        md="3"
        class="mt-5"
        v-for="product in products"
        :key="product.id"
      >
        <ItemCard
          :product="product"
          :fromWishlist="true"
          @refreshWishList="refreshWishList"
        />
      </b-col>
      <b-col v-show="products.length == 0" md="3" class="mt-5"
        ><h3>No products found</h3></b-col
      >
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemCard from './ItemCard'

export default {
  name: 'WishListItems',
  components: { ItemCard },
  computed: mapGetters(['productsData']),
  mounted () {
    const items = JSON.parse(localStorage.getItem('userFavItems'))
    if (items.length > 0) {
      this.products = this.productsData.filter(function (o1) {
        return items.some(function (o2) {
          return o1.id === o2
        })
      })
    }
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    refreshWishList (productId) {
      if (this.products.length > 0) {
        localStorage.setItem(
          'userFavItems',
          JSON.stringify(
            this.products.splice(this.products.indexOf(productId), 1)
          )
        )
      } else {
        localStorage.removeItem('userFavItems')
      }
    }
  }
}
</script>
