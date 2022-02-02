<template>
  <b-container class="bv-example-row mt-3" v-if="already_login">
    <b-row>
      <b-col> All Products </b-col>
    </b-row>

    <b-row>
      <b-col cols="6" md="2">
        <b-row>
          <b-col sm="12" class="my-2">
            <b-form-group id="brand" label="Brand:">
              <b-form-select
                class="form-select form-select-sm"
                id="brand"
                :options="brandOptions"
                required
                size="sm"
                name="brand"
                v-model="brand"
              ></b-form-select>
            </b-form-group>
            <hr />
            <b-form-group label="Color" v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                id="color"
                v-model="color"
                :options="colorOptions"
                value-field="value"
                text-field="text"
                :aria-describedby="ariaDescribedby"
                name="color"
              >
              </b-form-checkbox-group>
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="12" md="10">
        <b-row>
          <b-col
            sm="3"
            class="mt-4"
            v-for="product in computedProducts"
            :key="product.id"
          >
            <b-card
              :img-src="product.image"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <h5>
                {{ product.title }}
                <b-link
                  :class="'float-end ' + product.id"
                  @click="addProductWishlist(product.id)"
                >
                  <!--<img src="../assets/heart-fill.svg" />-->
                  <img
                    v-if="product.isFavorite == 1"
                    src="../assets/heart-fill.svg"
                  />
                  <img v-else src="../assets/heart.svg" />
                </b-link>
              </h5>

              <b-card-text>
                Price:
                <span class="text-danger">${{ product.price }}</span>
              </b-card-text>
              <router-link
                class="btn btn-outline-primary"
                :to="'/product/' + product.id"
                >View Details</router-link
              >
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
  <b-container v-else>
    <b-row>
      <b-col> Please Login first </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { products } from "../data/Product";
export default {
  name: "products",
  data() {
    return {
      products,
      favoriteProducts: [],
      already_login: false,
      brand: null,
      brandOptions: [
        { value: null, text: "Select Brand" },
        { value: "Nokia", text: "Nokia" },
        { value: "Samsung", text: "Samsung" },
        { value: "Motorola", text: "Motorola" },
        { value: "Redmi", text: "Redmi" },
      ],
      color: [],
      colorOptions: [
        { text: "Red", value: "red" },
        { text: "Black", value: "black" },
        { text: "Yellow", value: "yellow" },
      ],
    };
  },
  created() {
    var localIsLogin = JSON.parse(localStorage.getItem("is_login"));
    if (localIsLogin == null) localIsLogin = [];
    if (localIsLogin == true) {
      this.already_login = true;
    }
    this.allProducts = this.products;
  },
  mounted() {
    var localWishListProducts = JSON.parse(
      localStorage.getItem("wish-products")
    );
    console.log(localWishListProducts);
    if (localWishListProducts) {
      var favItemArray = localWishListProducts.map(function (a) {
        return a.id;
      });
      favItemArray.forEach((productId) => {
        this.products[productId - 1].isFavorite = 1;
      });
    }
    console.log(this.favItem);
  },
  computed: {
    computedProducts: function () {
      return this.products.filter((item) => {
        return (
          (this.brand === null ||
            this.brand.length === 0 ||
            item.brand.includes(this.brand)) &&
          (this.color.length === 0 || item.color.includes(this.color))
        );
      });
    },
  },
  methods: {
    addProductWishlist(productId) {
      var wishlistProductData = {
        id: productId,
      };
      var localWishListProducts = JSON.parse(
        localStorage.getItem("wish-products")
      );
      if (localWishListProducts == null) localWishListProducts = [];

      var allReadyInWishListIndex = localWishListProducts.findIndex(function (
        p
      ) {
        return p.id === parseInt(productId);
      });
      if (allReadyInWishListIndex !== -1) {
        this.products[productId - 1].isFavorite = 0;
        // remove from wishlist
        localWishListProducts.splice(allReadyInWishListIndex, 1);
        //console.log(localWishListProducts);
        localStorage.setItem(
          "wish-products",
          JSON.stringify(localWishListProducts)
        );
      } else {
        this.products[productId - 1].isFavorite = 1;
        // add it to wish list
        localStorage.setItem(
          "wish-products",
          JSON.stringify(wishlistProductData)
        );
        localWishListProducts.push(wishlistProductData);
        localStorage.setItem(
          "wish-products",
          JSON.stringify(localWishListProducts)
        );
      }
    },
  },
};
</script>

<style></style>
