<template>
  <div class="product">
      <div class="container">
          <div class="col-lg-8 border p-3 main-section bg-white">
              <div class="row m-0">
                  <div class="col-lg-4 left-side-product-box pb-3">
                      <img :src="mainimage" class="border p-3">
                      <span class="sub-img" v-for="(variant,index) in variants" :key="index">
                          <img :src="variant.variantImage" class="border p-2" @mouseover="updateProduct(variant.variantImage)" @mouseleave="updatemainimage(mainimage)">
                      </span>
                  </div>
                  <div class="col-lg-8">
                      <div class="right-side-pro-detail border p-3 m-0">
                          <div class="row">
                              <div class="col-lg-12">
                                  <span>Who What Wear</span>
                                  <p class="m-0 p-0">{{product}}</p>
                              </div>
                              <div class="col-lg-12">
                                  <p class="m-0 p-0 price-pro">${{price}}</p>
                                  <hr class="p-0 m-0">
                              </div>
                              <div class="col-lg-12 pt-2">
                                  <h5>Product Detail</h5>
                                  <span>{{description}}</span>
                                  <hr class="m-0 pt-2 mt-2">
                              </div>
                              <div class="col-lg-12">
                                  <p class="tag-section"><strong>Tag : </strong>
                                    <a href="javascript:void(0)"  v-for="tag in protags" :key="tag">{{tag}}</a>
                                  </p>
                                  
                              </div>
                              <div class="col-lg-12" style="display:inline-flex;">
                                  <h6>Quantity :</h6>
                                  <a href="javascript:void(0)" class="btn w-100 count" v-on:click="add">+</a>
                                  <span class="form-control text-center w-100">{{cart}}</span>
                                  <a href="javascript:void(0)" class="btn w-100 count" v-on:click="remove">-</a>
                              </div>
                              <div class="col-lg-12 mt-3">
                                  <div class="row">
                                      <div class="col-lg-6 pb-2">
                                          <a href="javascript:void(0)" @click="addToCart()" class="btn btn-danger w-100">Add To Cart</a>
                                      </div>
                                      <div class="col-lg-6">
                                          <a href="#" class="btn btn-success w-100">Shop Now</a>
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
<style>
.count{
    width: 10% !important;
    margin-left: 1%;
    margin-right: 1%;
    color: #fff;
    background-color: #908b8b;
    border-color: #908b8b;
}
h6{
    width: 18%;
}
.text-center{
    width:10% !important;
}
body {
    font-family: 'Roboto Condensed', sans-serif;
    background-color: #f5f5f5
}

.hedding {
    font-size: 20px;
    color: #ab8181;
}

.main-section {
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%, 5%);
}

.left-side-product-box img {
    width: 100%;
}

.left-side-product-box .sub-img img {
    margin-top: 5px;
    width: 83px;
    height: 100px;
    cursor:pointer;
}

.right-side-pro-detail span {
    font-size: 15px;
}

.right-side-pro-detail p {
    font-size: 25px;
    color: #a1a1a1;
}

.right-side-pro-detail .price-pro {
    color: #E45641;
}

.right-side-pro-detail .tag-section {
    font-size: 18px;
    color: #5D4C46;
}

.pro-box-section .pro-box img {
    width: 100%;
    height: 200px;
}

@media (min-width:360px) and (max-width:640px) {
    .pro-box-section .pro-box img {
        height: auto;
    }
}
</style>

<script>
export default {
  name: "ProductDetail",
  data(){
      return {
          product: "Women's Velvet Dress",
          price:30,
          description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris.",
          mainimage: './assets/images/pd-image1.jpg',
          cart: 1,
          variants:[
            {
                variantId: 1,
                variantImage: "./assets/images/pd-image2.jpg"
            },
            {
                variantId: 2,
                variantImage: "./assets/images/pd-image3.jpg"
            },
            {
                variantId: 3,
                variantImage: "./assets/images/pd-image4.jpg"
            }
        ],
        protags:['Woman,','Man'],
           
      }
  },
  methods : {
        add(){
            this.cart += 1
        },
        remove(){
            if(this.cart > 1){
                this.cart -= 1
            }
        },
        updateProduct(variantImage){
            this.mainimage = variantImage
        },
        updatemainimage(img){
            this.mainimage = img
        },
        addToCart(){
            this.$router.push('/addtocart'); 
        }
    }
};
</script>


