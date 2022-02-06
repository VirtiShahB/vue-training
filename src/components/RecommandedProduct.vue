<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col> Recommanded Products </b-col>
    </b-row>
    <b-row>
      <b-col sm="3" class="mt-1" v-for="product in favItem" :key="product.id">
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
  name: "recommanded-product",
  data() {
    return {
      products,
      favItem: [],
      isFavItem: JSON.parse(localStorage.getItem("wish-products"))
        ? false
        : true,
    };
  },
  created() {
    var localWishListProducts = JSON.parse(
      localStorage.getItem("wish-products")
    );
    var favItemTag = [];
    if (localWishListProducts) {
      var favItemArray = localWishListProducts.map(function (a) {
        return a.id;
      });
      favItemArray.forEach((productId) => {
        var itemData = this.products.find((p) => p.id === parseInt(productId));
        if (favItemTag.includes(itemData.tag));
        favItemTag.push(itemData.tag);
      });
      var itemArrayData = [];
      favItemTag.forEach((productTag) => {
        itemArrayData = this.products.filter((p) => p.tag == productTag);
        itemArrayData.forEach((singleElement) => {
          this.favItem.push(singleElement);
        });
      });
    }
  },
};
</script>

<style></style>
