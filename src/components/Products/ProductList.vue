<template>
  <div>
    <b-row>
      <b-col
        md="3"
        class="mt-5"
        v-for="product in productsData"
        :key="product.id"
      >
        <ItemCard :product="product" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemCard from './ItemCard'

export default {
  name: 'Dashboard',
  components: { ItemCard },
  created () {
    this.$store.dispatch('loadProducts')
  },
  computed: mapGetters(['productsData'])
}
</script>
