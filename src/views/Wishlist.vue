<template>
  <Main>
    <template #breadcrumbItems> Wishlist </template>
    <template #content>
      <h1>
        My Wishlist ({{
          products != null && products.length > 0 ? products.length : 0
        }})
      </h1>
      <hr />
      <div
        v-if="
          !loading && products != null && products.length > 0
            ? products.length
            : 0
        "
        class="row"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="mb-3 col-md-4"
        >
          <Product :product="product"></Product>
        </div>
      </div>
      <div v-else>
        <h4 class="text-center">
          <i class="fa fa-heart-o"></i> Your wishlist is empty
        </h4>
      </div>
    </template>
  </Main>
</template>

<script>
import Main from "@/views/Header.vue";
import Product from "@/views/ProductCard.vue";
import { bus } from "@/eventBus";
export default {
  components: {
    Main,
    Product,
  },
  data() {
    return {
      products: [],
      loading: true,
    };
  },
  methods: {
    fetchWishList() {
      var getWishList = JSON.parse(localStorage.getItem("wishList"));

      getWishList = getWishList.filter(
        (w) => w.userid == this.$store.getters.fetchLoginUser.id
      );

      if (getWishList != null && getWishList.length > 0) {
        this.products = getWishList.map(function (item) {
          /** covert rating into percentage */

          item["rating"]["width"] = (item.rating.rate / 5) * 100;

          /** get item wishList and check if item is in wishList*/

          let in_wishList =
            getWishList != null && getWishList.length > 0
              ? getWishList.findIndex((wish) => wish.id == item.id)
              : null;

          item["in_wishlist"] =
            in_wishList != null && in_wishList !== -1 ? true : false;

          return item;
        });

        this.loading = false;
      } else {
        this.products = [];
      }
    },
  },

  created() {
    bus.$on("wishList", () => {
      this.fetchWishList();
    });

    this.fetchWishList();
  },
};
</script>

<style>
.card-img-custom {
  width: 200px;
  align-items: center;
  position: relative;
  left: 100px;
  padding: 15px;
}
</style>
