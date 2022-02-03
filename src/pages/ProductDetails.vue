<template>
  <body>
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
    <div id="app">
      <div class="container container-space">
        <div class="row">
          <div class="col-md-6">
            <img class="img-fluid" :src="bannerImage" alt="" />
            <div class="product-thumbnails">
              <ul>
                <li v-for="(image, index) in this.productDetails.productImages"
                  :class="[activeClass == index ? 'thumbnail-active' : '']"
                  :key="index">
                  <img@click="currentThumnail(image.imageUrl, index)"
                    :src="image.imageUrl" :alt="image.imageUrl" />
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <h3 class="my-4">{{ this.productDetails.About }}</h3>
            <h3 class="my-3">Details</h3>
            <ul v-for="detail in this.productDetails.productChecks" :key="detail.id">
              <li>{{ detail }}</li>
            </ul>
            <h4>Price : ${{this.productDetails.price}}</h4>
            <h4>Total : ${{totalPrice() }}</h4>
            <form>
              <div class="value-button" @click="removeToCart" id="decrease" 
                value="Decrease Value">-
              </div>
              <input type="text" id="number" v-model="cart.length" />
              <div class="value-button" @click="addToCart" id="increase" 
                value="Increase Value">+
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
form {
  width: 500px;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
}

.value-button {
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 46px;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.value-button:hover {
  cursor: pointer;
}

form #decrease {
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
}

form #increase {
  margin-left: -4px;
  border-radius: 0 8px 8px 0;
}

form #input-wrap {
  margin: 0px;
  padding: 0px;
}

input#number {
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 60px;
  height: 46px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
body {
  font-family: "Nunito", sans-serif;
  background-color: #eeeeee;
}
.container-space {
  margin-top: 2rem;
}
.product-thumbnails {
  display: flex;
  margin-top: 2rem;
}
.product-thumbnails > ul {
  display: flex;
  list-style: none;
  padding-left: 0;
}
.product-thumbnails > li {
  margin-right: 10px;
}
.product-thumbnails > ul > li > img {
  width: 100px;
  cursor: pointer;
}
.thumbnail-active {
  border: 2px solid #000;
}
.nav-link > img {
  width: 40px;
  border-radius: 8px;
  margin-right: 10px;
}
.btn-custom-color {
  border: 2px solid #4fc08d;
  color: #4fc08d;
}
.btn-custom-color:hover {
  border: 2px solid #4fc08d;
  background-color: #4fc08d;
  color: #ffffff;
}
</style>

<script>
export default {
  products      :"",
  productDetails: "",
  bannerImage   : "",
  data() {
    return {
      cart: [],
      activeClass: 0,
    };
  },
  methods: {
    addToCart: function () {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      cartItems.push(this.productDetails);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    totalPrice: function () {
      return this.cart.length * this.productDetails.price;
    },
    removeToCart: function () {
      if (this.cart > 1) {
        this.cart = this.cart - 1;
      }
    },
    currentThumnail: function (image, index) {
      this.bannerImage = image;
      this.activeClass = index;
    },
  },
  beforeMount(){
    if (localStorage.getItem("items")) {
        this.products       = JSON.parse(localStorage.getItem("items"));
        this.productDetails = this.products.find(product => product.id == this.$route.params.id);
        this.bannerImage    = this.productDetails.imageUrl;
        this.cart           = JSON.parse(localStorage.getItem("cart"));
    }
  },
};
</script>