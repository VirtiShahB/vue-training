<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <div class="col-4" v-for="product in products" :key="product.id">
          <b-card class="text-left" @click="getProductDetails(product)"
            ><b-img
              thumbnail
              fluid
              width="400"
              height="400"
              :src="product.image"
              :alt="product.image"
            ></b-img>
            <b-card-text>
              <span> {{ product.name }} </span>
              <span class="float-right"> ${{ product.price }} </span>
            </b-card-text>
          </b-card>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import ItemList from "./ItemList.vue";

export default {
  name: "Dashboard",
  components: {},
  props: {
    id: Number,
    name: String,
    price: Number,
    currency: String,
    image: String,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
      getProductDetails(product) {
          this.$router.push({name: 'details', params: { product: product }})
      }
  }
};
</script>
