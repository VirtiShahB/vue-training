<template>
  <div>
    <FrontHeader ></FrontHeader>
    <nav aria-label="breadcrumb" class="mt-3">
      <ol class="breadcrumb">
        <router-link :to="'/admin'" class="breadcrumb-item">Home</router-link>
        <router-link :to="'/Products'" class="breadcrumb-item">Products</router-link>
        <li class="breadcrumb-item active" aria-current="page">Product-Details</li>
      </ol>
    </nav>
    <div id="app">
      <div class="container container-space">
        <div class="row">
          <div class="col-md-6">
            <img class="img-fluid" :src="bannerImage" alt="image not found" />
            <div class="product-thumbnails">
              <ul>
                <li v-for="(image, index) in this.productDetails.productImages"
                  :class="[activeClass == index ? 'thumbnail-active' : '']"
                  :key="index">
                  <img@click="currentThumbnail(image.imageUrl, index)"
                    :src="image.imageUrl" :alt="image.imageUrl"  />
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <h3 class="my-4">{{ this.productDetails.title }}</h3>
            <h3 class="my-3">Details</h3>
             {{ this.productDetails.description  }}
            <h4>Price : ${{this.productDetails.price}}</h4>
            <form>
              <input type='number'  class="form-control" :min="1" :value="this.productDetails.quantity ? this.productDetails.quantity : 1" id="quantity" />
              <button type="submit" class="btn btn-success btn-block" @click="addToCart()">Add to cart</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-2">
      <div class="row">
          <div class="row mt-4">
            <div v-for="product of filterItems(products)" :key="product.id" class="col-12 col-md-6 col-lg-3">
              <div class="card">
                <router-link :to="{ name: 'product-details', params: { id: product.id} }" target= '_blank'>
                  <img class="card-img-top" :src="product.imageUrl" alt="Card image cap"/>
                </router-link>
                <div class="card-body">
                  <p class="text-danger">$ {{ product.price }}</p>
                  <h5 class="card-title">
                    {{ product.title }}
                  </h5>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import FrontHeader from 'src/pages/FrontHeader'
  import FrontFooter from 'src/pages/FrontFooter'
  export default {
    components: {
      'FrontHeader': FrontHeader,
      'FrontFooter': FrontFooter
    },
    products      : "",
    productDetails: "",
    bannerImage   : "",
    quantity      : 0,
    data() {
      return {
        cart        : [],
        activeClass : 0,
        wishList    : [],
        oldQuantity : 0
      };
    },
    methods: {
      filterItems: function(items) {
        var type=this.productDetails.type;
        return items.filter(function(item) {
          return item.type == type;
        })
      },
      addToCart: function () {
        if (!localStorage.getItem("cart")) {
          localStorage.setItem("cart", JSON.stringify([]));
        }
        const cartItems = JSON.parse(localStorage.getItem("cart"));
        const index     = cartItems.findIndex(({ id }) => id === this.productDetails.id);
        if (index > -1) {
          this.oldQuantity = cartItems[index].quantity;
          cartItems.splice(index, 1);
        }
        var quantity    = document.getElementById("quantity").value; 
        this.productDetails.quantity=parseInt(this.oldQuantity)+parseInt(quantity); 
        cartItems.push(this.productDetails);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        this.cart       = JSON.parse(localStorage.getItem("cart"));
        this.$toast.top('Product added successfully to wishlist');
      },
      currentThumbnail: function (image, index) {
        this.bannerImage = image;
        this.activeClass = index;
      },
    },
    created(){
      if (localStorage.getItem("items")) {  
          this.products       = JSON.parse(localStorage.getItem("items"));
          this.cart           = JSON.parse(localStorage.getItem("cart"));
          this.productDetails = this.products.find(product => product.id == this.$route.params.id);
          this.bannerImage    = this.productDetails.imageUrl;
      }
    },
  };
</script>
<style scoped>
  .card-img-top {
    width: 250px;
    height: 200px;
  }
  .nc-fav-remove {
    color: rgb(0, 131, 33);
  }
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
