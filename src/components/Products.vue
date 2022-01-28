<template>
  <div class="offset-md-3 col-md-6 mt-5 mb-5">
    <h2 class="text-bold mb-5">Products List</h2>

    <b-list-group
      class="text-left mb-2"
      v-for="product in products"
      :key="product.id"
    >
      <b-list-group-item class="bg-color flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="title">{{ product.title }}</h5>
          <router-link
            :to="{ name: 'product-details', params: { prod_id: product.id } }"
            class="btn btn-success"
            >View</router-link
          >
        </div>
        <div class="col-md-11 pl-0">
          <p class="mt-2 mb-2">
            {{ product.description }}
          </p>
        </div>
        <small>
          <b>Price: ${{ product.price }}</b>
        </small>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
var products_list = [
  {
    id: 1,
    title: "Sneakers Shoes",
    description:
      "Sneakers Shoes Description. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    price: "1800.00",
    image: require("../../public/assets/sneakers.jpg"),
  },
  {
    id: 2,
    title: "Sports Shoes",
    description:
      "Sports Shoes Description. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    price: "1500.00",
    image: require("../../public/assets/sports.jpg"),
  },
  {
    id: 3,
    title: "Party Wear Shoes",
    description:
      "Party Wear Shoes Description. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    price: "2200.00",
    image: require("../../public/assets/party.jpg"),
  },
];
localStorage.setItem("products_list", JSON.stringify(products_list));

export default {
  name: "Products",
  data() {
    return {
      products: JSON.parse(localStorage.getItem("products_list")),
    };
  },
};
</script>

<style scoped>
.bg-color {
  background: #eb7617c4;
  color: rgba(0, 0, 0, 0.712);
}
.title {
  font-weight: 700;
  font-size: 25px;
}
</style>
