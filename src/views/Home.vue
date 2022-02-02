<template>
  <Main>
    <template #breadcrumbItems> Products </template>
    <template #content>
      <div class="float-right">
        <div class="form-row">
          <div class="col-8">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search products"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">
                  <b-icon-search></b-icon-search>
                </span>
              </div>
            </div>
          </div>

          <div class="mt-2 col-4">
            <b-icon-funnel title="Filter" class="mr-2"></b-icon-funnel>
            <select class="d-inline" v-model="sort" @change="filter">
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </select>
          </div>
        </div>
      </div>
      <h1>All Products</h1>

      <hr />
      <div v-if="!loading" class="row">
        <div
          v-for="product in products"
          :key="product.id"
          class="mb-3 col-md-4"
        >
          <Product :product="product"></Product>
        </div>
      </div>
      <div v-else>
        <b-row>
          <b-col
            class="mb-3"
            v-for="(i, index) in 6"
            :key="index"
            cols="12"
            md="4"
          >
            <b-card class="h-100" no-body img-top>
              <b-skeleton-img card-img="top" aspect="3:1"></b-skeleton-img>
              <b-card-body>
                <b-skeleton animation="fade" width="85%"></b-skeleton>

                <b-skeleton animation="throb" width="85%"></b-skeleton>
                <b-skeleton animation="throb" width="55%"></b-skeleton>

                <b-skeleton type="button"></b-skeleton>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </template>
  </Main>
</template>

<script>
import Main from "@/views/Header.vue";
import Product from "@/views/ProductCard.vue";
export default {
  components: {
    Main,
    Product,
  },
  data() {
    return {
      products: [],
      loading: true,
      sort: "desc",
    };
  },
  methods: {
    filter() {
      // sort by title a-z order

      if (this.sort == "a-z") {
        this.products = this.products.sort((a, b) => {
          let fa = a.title.toLowerCase(),
            fb = b.title.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
      }

      // sort by title z-a order

      if (this.sort == "z-a") {
        this.products = this.products.sort((a, b) => {
          let fa = a.title.toLowerCase(),
            fb = b.title.toLowerCase();
          if (fa > fb) {
            return -1;
          }
          if (fa < fb) {
            return 1;
          }
          return 0;
        });
      }

      // sort by ID desc order

      if (this.sort == "desc") {
        this.products = this.products.sort((a, b) => {
          let fa = a.id,
            fb = b.id;
          if (fa > fb) {
            return -1;
          }
          if (fa < fb) {
            return 1;
          }
          return 0;
        });
      }

      // sort by ID asc order

      if (this.sort == "asc") {
        this.products = this.products.sort((a, b) => {
          let fa = a.id,
            fb = b.id;
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
      }
    },
  },
  async created() {
    /** Get Product From API */

    await this.$axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        this.products = res.data;

        this.products = this.products.sort((a, b) => {
          let fa = a.id,
            fb = b.id;
          if (fa > fb) {
            return -1;
          }
          if (fa < fb) {
            return 1;
          }
          return 0;
        });

        let fetchWishList = JSON.parse(localStorage.getItem("wishList"));

        this.products = this.products.map(function (item) {
          /** covert rating into percentage */

          item["rating"]["width"] = (item.rating.rate / 5) * 100;

          /** get item wishlist and check if item is in wishlist*/

          let in_wishList =
            fetchWishList != null && fetchWishList.length > 0
              ? fetchWishList.findIndex((wish) => wish.id == item.id)
              : null;

          item["in_wishlist"] =
            in_wishList != null && in_wishList !== -1 ? true : false;

          return item;
        });

        this.loading = false;
      })
      .catch((err) => {
        console.log("error : " + err);
      });
  },
};
</script>
