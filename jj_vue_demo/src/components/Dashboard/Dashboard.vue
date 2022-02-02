<template>
  <div class="container">
    <div class="row mt-4">
      <nav class="navbar navbar-light bg-gradient p-3">
        <b-col>
          <b-form-input
            id="input-1"
            type="text"
            placeholder="Search"
            v-model="search"
            class="mr-2"
          ></b-form-input>
        </b-col>
        <b-col>
          <b-form-select
            class="position-absolute"
            v-model="selected"
            :options="options"
            style="margin-left: 360px; margin-top: -5px"
          ></b-form-select>
        </b-col>
        {{ selected }}
      </nav>
      <div
        class="col-md-4 mt-4"
        v-for="(product, index) in filteredProducts"
        :key="index"
      >
        <Product :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../Product.vue";

export default {
  data() {
    return {
      products: [
        {
          id: 0,
          name: "Shirt",
          description: "Van Heusen Men's Slim Business Casual Pants",
          price: 10,
          quantity: 0,
          img: require("@/assets/shirt.jpg"),
        },
        {
          id: 1,
          name: "TShirt",
          description: "Van Heusen Men's Slim Business Casual Pants",
          price: 30,
          quantity: 0,
          img: require("@/assets/tshirt.jpg"),
        },
        {
          id: 2,
          name: "Jeans",
          description: "Van Heusen Men's Slim Business Casual Pants",
          price: 30,
          quantity: 0,
          img: require("@/assets/pants.jpg"),
        },
      ],
      options: [
        { value: null, text: "Please select an option" },
        { value: 10, text: "Under $10" },
        { value: 20, text: "Between $10 - $20" },
        { value: 30, text: "Between $20 - $30" },
      ],
      search: "",
      selected: "",
    };
  },
  name: "Dashboard",
  components: {
    Product,
  },
  computed: {
    filteredProducts() {
      var filteredArray = [];
      if (this.selected != "" && this.search != "") {
        filteredArray = this.products.filter((product) => {
          return product.name.toLowerCase().match(this.search);
        });
        filteredArray = this.products.filter((product) => {
          if (product.price == this.selected) {
            console.log(this.selected);
            return product.price;
          }
        });
      } else if (this.search != "") {
        filteredArray = this.products.filter((product) => {
          return product.name.toLowerCase().match(this.search);
        });
      } else if (this.selected != "") {
        filteredArray = this.products.filter((product) => {
          if (product.price == this.selected) {
            return product.price;
          }
        });
      } else {
        filteredArray = this.products;
      }
      return filteredArray;
    },
  },
};
</script>
