<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        Favourite Products
      </b-col>
    </b-row>
    <b-row >
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
  name: "products",
  data() {
    return {
      products,
      favItem : [],
      isFavItem: JSON.parse(localStorage.getItem("wish-products")) ? false :true,
    };
  },
  created() {
      var localWishListProducts = JSON.parse(
        localStorage.getItem("wish-products")
      );
     
      if(localWishListProducts)
      {
        var favItemArray = localWishListProducts.map(function(a) {return a.id;});
        favItemArray.forEach((productId) => {
            var itemData = this.products.find(
              (p) => p.id === parseInt(productId)
            );
            this.favItem.push(itemData);

        });
      }

  },
};
</script>

<style></style>
