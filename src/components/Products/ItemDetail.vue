<template>
  <div>
    <b-card no-body class="mt-5" style="max-width: 70%">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="product.image"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-title
              ><h2>{{ product.title | capitalize }}</h2></b-card-title
            >
            <b-row no-gutters>
              <b-card-text>
                <p>{{ product.description }}</p>
              </b-card-text>
            </b-row>
            <b-row no-gutters>
              <b
                ><h3>{{ product.price | toFixed(2) | toUSD }}</h3></b
              ></b-row
            >
            <hr />
            <b-row no-gutters class="mt-3">
              <b-col md="3">
                <b-input-group>
                  <b-input-group-append>
                    <b-button @click="removeItem">-</b-button>
                  </b-input-group-append>
                  <b-form-input
                    type="text"
                    v-model="itemCount"
                    disabled
                    class="text-center"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button @click="addItem">+</b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-col>
              <b-col md="1"></b-col>
              <b-col md="3">
                <b-button variant="danger" @click="addToCart(product.id)"
                  ><b-icon-cart></b-icon-cart>Add To Cart</b-button
                >
              </b-col>
            </b-row>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <br>
    <h3>Recommended Products</h3>
    <b-row>
      <b-col
        md="3"
        class="mt-5"
        v-for="product in similarProducts"
        :key="product.id"
      >
        <ItemCard :product="product" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartServices from '../../services/CartServices'
import ItemCard from './ItemCard'
const cartService = new CartServices()

export default {
  name: 'ItemDetail',
  components: { ItemCard },
  mounted () {
    this.getProductData()
  },
  data () {
    return {
      itemCount: 1,
      product: []
    }
  },
  computed: {
    ...mapGetters(['productsData']),
    similarProducts () {
      const that = this.product
      const products = this.productsData.filter(function (o1) {
        return o1.category === that.category && o1.id !== that.id
      })
      return products
    }
  },
  methods: {
    addItem () {
      this.itemCount += 1
    },
    removeItem () {
      if (this.itemCount <= 1) {
        this.itemCount = 1
      } else {
        this.itemCount -= 1
      }
    },
    addToCart (productId) {
      this.viewToast('Item added to cart!', 'success')
      cartService.addToCart(productId, this.itemCount)
    },
    getProductData () {
      const productId = this.$route.params.productId
      const result = this.productsData.filter(function (el) {
        return el.id.toString() === productId.toString()
      })
      this.product = result[0]
    }
  }
}
</script>
<style scoped>
.input-group {
  text-align: center;
  width: 95% !important;
}
</style>
