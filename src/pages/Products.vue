<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/admin/overview" to="/admin/overview">
            <img src="img/vue-logo.png" /><b>Store</b>
          </a>
        </li>
        <li>
          <router-link :to="'/checkout'">
            <i class="nc-icon nc-cart-simple"></i>
            <b> {{cart.length}} </b>
          </router-link>  
        </li>
      </ul>
    </nav>
    <div class="container mt-5">
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
      </div>
    </div>
    <div class="container mt-2">
      <div class="row">
        <div class="col">
          <div class="row mt-4">
            <div v-for="product of items" :key="product.id" class="col-12 col-md-6 col-lg-3">
              <div class="card">
                <router-link :to="{ name: 'product-details', params: { id: product.id} }">
                  <img class="card-img-top" :src="product.imageUrl" alt="Card image cap"/>
                </router-link>
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
const items = [
  {
    id: 1,
    price:570,
    imageUrl: "img/t-shirt-1.jpg",
    name: "Men White & Blue Striped Cotton T-shirt",
    About: "100% Original Products.Pay on delivery might be available.Easy 30 days returns and exchanges",
    productImages: [
      {
        imageUrl: "img/t-shirt-1.1.jpg",
      },
      {
        imageUrl: "img/t-shirt-1.2.jpg",
      }
    ],
    productChecks: [
      "100% cotton on the neckline",
      "certified and safe",
      "ash in color",
      "Smooth in quality",
    ]
  },
  {
    id: 2,
    price:775,
    imageUrl: "img/shirt-1.jpg",
    name: "Men Maroon & Olive Green Checked Sustainable Casual Shirt",
    About: "Maroon and olive green checked casual shirt, has a spread collar, long sleeves, button placket, curved hem, and 1 patch pocket",
    productImages: [
      {
        imageUrl: "img/product-2.jpeg",
      },
      {
        imageUrl: "img/product-3.jpeg",
      }
    ]
  },
  {
    id: 3,
    price:1439,
    imageUrl: "img/watch-1.jpg",
    name: "Men Black Analogue Watch MFB-PN-WTH-6292G",
    About: "Applicable on: Orders above Rs. 2499 (only on first purchase).Coupon Discount: Rs. 230 off (check cart for final savings)",
    productImages: [
      {
        imageUrl: "img/product-2.jpeg",
      },
      {
        imageUrl: "img/product-3.jpeg",
      }
    ]
  },
];

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
    if (!localStorage.getItem("items")) {
        localStorage.setItem("items", JSON.stringify(this.items));    
    }
  }
};
</script>
<style scoped>
  .card-img-top {
    width: 250px;
    height: 200px;
  }
  img {
    width: 50px;
    height: 20px;
  }
</style>