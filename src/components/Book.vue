<template>
    <div>
        <b-container class="bv-example-row">
          <b-row v-for="item of items" :key="item.id">
            <b-col>
              <img :src="require('@/assets/images/'+item.image)" alt="" class="img-fluid">
            </b-col>
            <b-col class="text-start">
              <h1>{{item.title}}</h1><hr>
              <p>{{item.desc}}</p>
              <span class="item_price">{{'₹ '+item.price}}</span>
              <div class="qty_wrap mt-2">
                <label for="qty" class="pr-5">Quantity: </label>
                <b-form-spinbutton id="qty" v-model="item.default_qty" min="1" max="50" class="qty" inline></b-form-spinbutton>
              </div><br>
              <b-button @click="addToCart(item.id)" variant="success">Add to cart</b-button>
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
            items: [
              {
                id:1,
                title: "400 Days",
                desc: "12-year-old Siya has been missing nine months. It’s a cold case, but Keshav wants to help her mother, Alia, who refuses to give up. Welcome to 400 Days―a mystery and romance story like no other.",
                price: "400.00",
                image: '400_days.jpg',
                default_qty: 1
              },
            ]
          }
        },
        methods: {
          addToCart(itemId) {
              const item = this.items.find(({ id }) => id === itemId);
              item.qty = document.getElementById('qty').value ;
              if (!localStorage.getItem("cart")) {
                localStorage.setItem("cart", JSON.stringify([]));
              }
              const cartItems = JSON.parse(localStorage.getItem("cart"));
              cartItems.push(item);
              localStorage.setItem("cart", JSON.stringify(cartItems));
              this.cart = JSON.parse(localStorage.getItem("cart"));
              this.$router.push('/cart')
          }
        }
    }
</script>

<style scoped>

.b-form-spinbutton{
  height: 8% !important;
  padding: none !important;
}
</style>