<template>
  <div class="container">
    <div class="row product-list">
      <div class="col-sm-12 product-label">
        <h2>Searched Products</h2>
      </div>

      <div class="col-sm-3" v-for="(item, index) in items" :key="index">
        <b-img
          thumbnail
          v-bind:src="'../../images/' + item.Image"
          alt="Earphone"
          fluid
          class="img-section"
        ></b-img>
        <div class="product-outline">
          <h1>{{ item.ProductName }}</h1>

          <p class="price">${{ item.Price }}</p>
          <p>{{ item.Description }}</p>
          <router-link :to="'/product/detail/' + item.Id">
            <p class="view-button">
              <b-button class="form-control">View</b-button>
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductSearch",
  props: {
    searchedItems: String,
  },
  data() {
    return {
      recommendedProduct: [],
      items: [],
    };
  },
  created() {
    if (this.$route.params.searchedItems) {
      this.items = JSON.parse(this.$route.params.searchedItems);
    }
  },
};
</script>
<style scoped>
.price {
  color: rgb(251 3 83);
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
.view-button {
  background-color: #747b74 !important;
}

.card button:hover {
  opacity: 0.7;
}
p.cart-btn {
  margin-top: 10px;
}
.cart-quantity {
  height: auto;
}
.cart-btn {
  background-color: #181f18 !important;
}
.product-list {
  margin-top: 10%;
  text-align: center;
}
.img-section {
  height: 35%;
  width: 100%;
}
.product-outline {
  border: 1px outset;
}
svg.bi-heart.b-icon.bi {
  cursor: pointer;
}
.fav_items {
  position: absolute;
  bottom: 0px;
  top: 5px;
  right: 15px;
  left: 215px;
}
</style>
