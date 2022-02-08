<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <div class="w-100 mt-2" v-if="!products || !products.length">
          <b-alert variant="danger" show>No Products avaialable</b-alert>
        </div>
        <div class="col-4" v-for="product in products" :key="product.id">
          <b-card class="text-left" style="height: 95%" border-variant="dark"
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
              style="height: 75%"
              @click="getProductDetails(product)"
              fluid
              width="400"
              height="400"
              :src="product.image"
              :alt="product.image"
            ></b-img>

            <template #footer>
              <small class="text-muted"> {{ product.title }} </small>
              <br/>
              <small class="text-muted"><strong> ${{ product.price }} </strong></small>
            </template>
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
          return post.title
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
      this.$router.push({ name: "details", query: { id: product.id } });
    },
    addToWishList(id) {
      const isPresent = this.$store.state.wishList.find(
        (item) => item.id === id
      );
      if (isPresent) {
        this.$store.dispatch("removeFromWishList", { id });
      } else {
        this.$store.dispatch("addToWishList", { id });
      }
    },
  },
};
</script>
