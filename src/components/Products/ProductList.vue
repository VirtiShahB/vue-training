<template>
  <div>
    <b-row>
      <b-col
        md="3"
        class="mt-5"
        v-for="product in productsData"
        :key="product.id"
      >
        <ItemCard :product="product" @cartListener="addTocart" />
      </b-col>
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
      totalCartItem: []
    }
  },
  methods: {
    addTocart (product) {
      this.$emit('refreshCartListener', product)
    }
  }
}
</script>
