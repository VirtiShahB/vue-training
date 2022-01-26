<template>
  <div>
    <b-card
      :img-src="product.image"
      :img-alt="product.title"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-link @click="itemDetail(product.id)" style="text-decoration: none"
        ><h4>{{ product.name }}</h4></b-link
      >
      <b-card-text>
        {{ product.description }}
      </b-card-text>
      <b-row>
        <b-col md="6"
          ><b-card-text> <h3>${{ product.price.toFixed(2) }}</h3> </b-card-text></b-col
        >
        <b-col md="6"
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
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  components: {},
  props: ['product'],
  methods: {
    addToCart (productId) {
      const selectedProducts = { id: productId, qty: 1 }
      this.$emit('cartListener', selectedProducts)
    },
    itemDetail (productId) {
      this.$router.push({
        name: 'ItemDetail',
        params: {
          productId: productId
        }
      })
    }
  }
}
</script>
