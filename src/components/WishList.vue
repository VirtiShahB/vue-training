<template>
  <div class="wrapper rounded bg-white">
    <div
      class="d-flex align-items-center justify-content-end px-sm-3 pt-3 px-1"
    >
      <div class="text-muted">Items per page (<b>6 items</b> )</div>
      <select name="num" id="num" class="px-2 py-1 ml-sm-2 ml-1">
        <option value="10">10</option>
      </select>
      <select name="sort" id="sort" class="px-1 py-1 ml-2">
        <option value="" selected hidden>Sort by</option>
        <option value="rating">Rating</option>
        <option value="popular">Popular</option>
        <option value="featured">Featured</option>
      </select>
      <div class="cart-div">
        <a href="javascript:void(0)"><i class="fa fa-heart" @click="GoToWishList"></i></a>
        <span class="cart-num" v-if="WishPro > 0">{{WishPro}}</span>
      </div>
      <div class="cart-div">
        <a href="javascript:void(0)"><i class="fa fa-shopping-cart"></i></a>
        <span class="cart-num" v-if="CartPro > 0">{{CartPro}}</span>
      </div>
    </div>
    <hr />
    <div class="row px-sm-2 px-0 pt-3" v-if="wishList.length > 0">
        <div v-for="products in productList" :key="products.PID" :id="products.PID">
             <div v-if="wishList.includes(products.PID)"
        class="
          col-md-4
          offset-md-0 offset-sm-2 offset-1
          col-sm-8 col-10
          offset-sm-2 offset-1
          mb-3
        " 
      > 
        <div class="card" style="width: 446%;">
             <div class="px-2 red text-uppercase">new</div>
          <span class="remove-wish" @click="removeProduct(products.PID)"><a href="javascript:void(0)"><i class="fa fa-times" aria-hidden="true"></i></a></span>
         
          <div class="d-flex justify-content-center" @click="ProductDetails(products.PID)">
            <img :src="products.PIMAGE" class="product" alt="" />
          </div>
          <b class="px-2">
            <p class="h4">{{ products.PNAME.substring(0, 8) + "..." }}</p>
          </b>
          <div
            class="
              d-flex
              align-items-center
              justify-content-start
              rating
              border-top border-bottom
              py-2
            "
          ></div>
          <div
            class="d-flex align-items-center justify-content-between py-2 px-3"
          >
            <div class="h4"><span>$</span>{{ products.PPRICE }}</div>
            <div class="wish-list">
              <i class="fas fa-heart"></i> 
            </div>
            <div>
              <button @click="AddTOCart(products.PID)" class="btn btn-dark text-uppercase">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div> 
    <div v-else><h3>Wish List is empty</h3><br></div>
    <button class="btn btn-dark text-uppercase" style="float:right;" @click="Back();"><i class="fa fa-arrow-left" aria-hidden="true"></i>  Back</button>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {
      CartPro:0,
      WishPro:0,
      cartProduct : [],
      wishList : JSON.parse(localStorage.getItem("wishProduct")) ? JSON.parse(localStorage.getItem("wishProduct")) : '0',
      productList : [],
    };
  },
  methods:{
    ProductDetails(id){
      this.$router.push({
        path: "/productDetails",
        query: {
          id: id,
        },
      });
    },
    AddTOCart(pid){
      this.CartPro += 1;
      this.cartProduct.push(pid); 
      localStorage.setItem('cartProduct', JSON.stringify(this.cartProduct));
    },
    GoToWishList(){
      this.$router.push("/goToWishList");
    },
    Back(){
        this.$router.push('/'); 
    },
    removeProduct(pid){
        var wish = JSON.parse(localStorage.getItem("wishProduct"));
        console.log(wish);
        var filtered = wish.filter(function(value){ 
            return value != pid;
        });
        localStorage.setItem('wishProduct', JSON.stringify(filtered));
        document.getElementById(pid).remove();
        this.WishPro = filtered.length;
    }
  },
  created: function(){
    this.WishPro = JSON.parse(localStorage.getItem("wishProduct")).length;
    this.CartPro = JSON.parse(localStorage.getItem("cartProduct")).length;
    this.productList = JSON.parse(localStorage.getItem("PROLIST"));
  }
};
</script>