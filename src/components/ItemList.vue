<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <div v-if="!products || !products.length">No result found</div>
        <div class="col-4" v-for="product in products" :key="product.id">
          <b-card class="text-left"
            ><b-icon
              v-bind:icon="
                isProductInWishList(product.id) ? 'heart-fill' : 'heart'
              "
              @click="addToWishList(product.id)"
              id="wishlist_"
              class="rounded float-right"
              scale="1.25"
            ></b-icon
            ><b-img
              @click="getProductDetails(product)"
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
  data() {
    return {
      isLiked: false,
    };
  },
  props: {
    id: Number,
    name: String,
    price: Number,
    currency: String,
    image: String,
  },
  computed: {
    products() {
      if (this.$store.state.searchParam) {
        const filter = this.$store.state.products.filter((post) => {
          return post.name
            .toLowerCase()
            .includes(this.$store.state.searchParam.toLowerCase());
        });
        return filter;
      }
      return this.$store.state.products;
    },
    isProductInWishList() {
      return (id) => {
        const isPresent = this.$store.state.wishList.find(
          (item) => item.id === id
        );
        return isPresent ? true : false;
      };
    },
  },
  methods: {
    getProductDetails(product) {
      this.$router.push({ name: "details", params: { product: product } });
    },
    addToWishList(id) {
      this.$store.dispatch("addToWishList", { id });
    },
  },
};
</script>
