<template>
  <div class="container mt-5 mb-5">
    <b-row>
      <b-col md="8">
        <h2 class="text-bold"><b>Recommended Products List</b></h2>
      </b-col>
      <b-col md="4">
        <b-form-input
          id="input-1"
          v-model.lazy="search"
          type="text"
          placeholder="Search Product By Name"
          required
        ></b-form-input>
      </b-col>
    </b-row>
    <hr />

    <div v-if="filteredProducts && filteredProducts.length > 0">
      <b-row class="mt-4">
        <b-col
          md="4"
          class="p-1 mb-2"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <b-card
            :img-src="product.image"
            :title="product.title"
            img-alt="Shoes"
            img-top
          >
            <b-card-text>
              {{ product.description }}
            </b-card-text>
            <template #footer>
              <router-link
                :to="{
                  name: 'product-details',
                  params: { prod_id: product.id },
                }"
                class="btn btn-orange"
                ><i class="fa fa-eye"> View</i></router-link
              >
              <small class="small-pt float-right"
                ><b>${{ product.price }}</b></small
              >
            </template>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <b-col md="12" class="text-center font-weight-bold mt-5"
        >No Porducts Found!
      </b-col>
    </div>
  </div>
</template>

<script>
import productsData from "../products.json";

export default {
  name: "Products",
  data() {
    return {
      products: "",
      search: "",
    };
  },
  computed: {
    filteredProducts() {
      var likeProduct = JSON.parse(localStorage.getItem("likeProduct"));

      if (likeProduct == null) likeProduct = [];

      var data = productsData.filter((o1) =>
        likeProduct.some((o2) => o1.tag === o2.tag)
      );

      if (this.search.length > 0) {
        data = data.filter((product) => {
          return (
            product.title.toLowerCase().match(this.search.toLowerCase()) ||
            product.description
              .toLowerCase()
              .match(this.search.toLowerCase()) ||
            product.price.match(this.search.toLowerCase())
          );
        });
      }
      return data;
    },
  },
};
</script>

<style scoped>
.card {
  margin: 0 5px;
}
.card-body,
.card-footer {
  padding: 15px;
}
.card-img-top {
  height: 250px;
}
.btn-orange {
  background: rgb(241, 111, 30);
  color: white;
  width: 50%;
  font-weight: 600;
  font-size: 18px;
  font-family: inherit;
}
.btn-orange:hover {
  border: 1.5px solid gray;
  background-color: hsl(24, 94%, 69%);
  color: rgba(0, 0, 0, 0.829);
}
.small-pt {
  padding-top: 10px;
  font-size: inherit;
}
</style>
