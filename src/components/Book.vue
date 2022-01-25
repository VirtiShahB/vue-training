<template>
    <div>
        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              <img :src="require('@/assets/images/'+item.image)" alt="" class="img-fluid">
            </b-col>
            <b-col class="text-left">
              <h1>{{item.title}}</h1><hr>
              <p>{{item.desc}}</p>
              <span class="item_price">{{'₹ '+item.price}}</span>
              <div class="qty_wrap mt-2">
                <label for="qty" class="pr-5">Quantity: </label>
                <b-form-spinbutton id="qty" v-model="item.default_qty" min="1" max="50" class="qty" inline></b-form-spinbutton>
              </div><br>
              <b-button @click="addToCart(item)" variant="success">Add to cart</b-button>
            </b-col>
          </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Book",
        data(){
          return{
            cart:[],
            item: [],
          }
        },
        methods: {
          addToCart(item) {
              item.qty = document.getElementById('qty').value ;
              if (!localStorage.getItem("cart")) {
                localStorage.setItem("cart", JSON.stringify([]));
              }
              const cartItems = JSON.parse(localStorage.getItem("cart"));
              cartItems.push(item);
              localStorage.setItem("cart", JSON.stringify(cartItems));
              this.cart = JSON.parse(localStorage.getItem("cart"));
              this.$router.push('/cart')
          },
        },
        mounted() {
          this.item = this.$route.params.item;
          if (!this.item) {
            this.$router.push("/");
          }
        },
    }
</script>

<style scoped>

.b-form-spinbutton{
  height: 8% !important;
  padding: none !important;
}
</style>