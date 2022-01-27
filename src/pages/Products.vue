<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item"><a href="category.html">Category</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Sub-category</li>
                </ol>
            </nav>
        </div>
        <router-link :to="'/checkout'">
      <i class="nc-icon nc-cart-simple"></i>
        <b> {{cart.length}} </b>
      </router-link>    
      </div>
  </div>
<div class="container mt-2">
    <div class="row">
        <div class="col">
            <div class="row mt-4">
                <div v-for="product of items" :key="product.id" class="col-12 col-md-6 col-lg-3">
                    <div class="card">
                        <img class="card-img-top" :src="product.imageUrl" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">
                              {{ product.name }}
                            </h4>
                            <p class="card-text">{{ product.About }}</p>
                            <div class="row">
                              <div class="col">
                                <button class="btn btn-success btn-block"  @click="removeFromCart(product.id)" v-if="isInCart(product.id)">Remove</button>
                                <button class="btn btn-success btn-block" @click="addToCart(product.id)" v-else>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
const items = Object.freeze([
  {
    id: 1,
    price:300,
    imageUrl: "img/product-1.jpeg",
    name: "Reebok",
    About: "Reebok ActiveFit 1.0 Smartwatch- 1.3 Full-Touch HD Display, SpO2 ",
  },
  {
    id: 2,
    price:100,
    imageUrl: "img/product-3.jpeg",
    name: "Samsung",
    About: "Samsung Galaxy Watch 3 45mm Bluetooth (Mystic Black),SM-",
  },
  {
    id: 3,
    price:345,
    imageUrl: "img/product-4.jpg",
    name: "Fastrack",
    About: "Tees Analog Black Dial Unisex-Adult Watch-38024PP25",
  },
]);

export default {
  name: "Store",
  data() {
    return {
      items,
      cart: [],
    };
  },
  methods: {
    isInCart(itemId) {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItem = this.cart.find(({ id }) => id === itemId);
      return Boolean(cartItem);
    },
    addToCart(itemId) {
      const item = this.items.find(({ id }) => id === itemId);
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      cartItems.push(item);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex(({ id }) => id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
  },
  beforeMount(){
    if (localStorage.getItem("cart")) {
        this.cart = JSON.parse(localStorage.getItem("cart"));
    }
  }
};
</script>
<style>
  img {
    width: 200px;
    height: 200px;
  }
</style>