<template>
  <body>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="img/vue-logo.png" /><b>Store</b>
          </a>
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
                <li
                  v-for="(image, index) in productImages"
                  :class="[activeClass == index ? 'thumbnail-active' : '']"
                  :key="index"
                >
                  <img
                    @click="currentThumnail(image.imageUrl, index)"
                    :src="image.imageUrl"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <h3 class="my-4">{{ productTitle }}</h3>
            <h3 class="my-3">Details</h3>
            <ul v-for="detail in productChecks">
              <li>{{ detail }}</li>
            </ul>
            <h4>$ {{ Price() }}</h4>
            <form>
              <div
                class="value-button"
                @click="removeToCart"
                id="decrease"
                onclick="decreaseValue()"
                value="Decrease Value"
              >
                -
              </div>
                <input type="number" id="number"  v-model="cart">
              <div
                class="value-button"
                @click="addToCart"
                id="increase"
                onclick="increaseValue()"
                value="Increase Value"
              >
                +
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
  height: 20px;
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
  width: 40px;
  height: 40px;
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
  name: "ProductDetails",
  data() {
    return {
      productTitle: "Round Neck Vue Logo T-Shirt",
      productPrice: 20,
      productChecks: [
        "100% cotton on the neckline",
        "certified and safe",
        "ash in color",
        "Smooth in quality",
      ],
      bannerImage: "img/product-2.jpeg",
      productImages: [
        {
          id: 3435,
          imageUrl: "img/product-2.jpeg",
        },
        {
          id: 3436,
          imageUrl: "img/product-3.jpeg",
        },
      ],
      cart: 1,
      stockAvailability: true,
      activeClass: 0,
    };
  },
  methods: {
    addToCart: function () {
      this.cart = this.cart + 1;
    },
    Price: function () {
      return this.cart *  this.productPrice;
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
};
</script>