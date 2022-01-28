<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col> All Products </b-col>
    </b-row>

    <b-row>
      <b-col sm="3" class="mt-1" v-for="product in products" :key="product.id">
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
    };
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
        this.products[productId-1].isFavorite = 1;
      });
    }
    console.log(this.favItem);
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
        console.log(localWishListProducts);
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
    IsProductInWishList(productId) {
      var localWishListProducts = JSON.parse(
        localStorage.getItem("wish-products")
      );
      if (localWishListProducts) {
        var ab = localWishListProducts.map(function (a) {
          return a.id;
        });
        console.log(productId, ab);
      }
      return true;
    },
  },
};
</script>

<style></style>
