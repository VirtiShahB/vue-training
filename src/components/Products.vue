<template>
  <div class="offset-md-1 col-md-10 mt-5 mb-5">
    <h2 class="text-bold"><b>Products List</b></h2>
    <hr />
    <b-card-group deck class="mt-4">
      <b-card
        v-for="product in products"
        :key="product.id"
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
            :to="{ name: 'product-details', params: { prod_id: product.id } }"
            class="btn btn-orange"
            ><i class="fa fa-eye"> View</i></router-link
          >
          <small class="small-pt float-right"
            ><b>${{ product.price }}</b></small
          >
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
var products_list = [
  {
    id: 1,
    title: "Sneakers Shoes",
    description:
      "Sneakers Shoes Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "1800.00",
    image: require("../../public/assets/sneakers.jpg"),
  },
  {
    id: 2,
    title: "Sports Shoes",
    description:
      "Sports Shoes Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "1500.00",
    image: require("../../public/assets/sports.jpg"),
  },
  {
    id: 3,
    title: "Party Wear Shoes",
    description:
      "Party Wear Shoes Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "2200.00",
    image: require("../../public/assets/party.jpg"),
  },
  {
    id: 4,
    title: "Loafer Shoes",
    description:
      "Loafer Shoes Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "1200.00",
    image: require("../../public/assets/loafers.jpg"),
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
.card {
  margin: 0 5px;
}
.card-img-top {
  height: 30%;
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
