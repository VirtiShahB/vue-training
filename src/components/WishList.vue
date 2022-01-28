<template>
    <div class="container">
      <div class="row product-list">
         <h2>
            <p><strong>Wishlist Products</strong></p>
         </h2>
         <div class="col-sm-4" v-for="(item, index) in items" :key="index">
            <b-img thumbnail v-bind:src="'../../images/'+ item.image" alt="Earphone" fluid class="img-section"></b-img>
            <div class="product-outline">
                <h1>{{ item.pro_name }}</h1>

                <p class="price"> ${{ item.price }} </p>
                <p>{{ item.description }}</p>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
    name:"WishList",
    data() {
        return {
            items:[],
        }
    },
    created: function() {
        var WishListItems = localStorage.getItem('WishListitems');
        this.items = JSON.parse(WishListItems);
    },
}
</script>
<style scoped>
    .price {
  color: rgb(251 3 83);
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
.view-button{
    background-color: #747b74 !important;
}

.card button:hover {
  opacity: 0.7;
}
p.cart-btn {
    margin-top: 10px;
}
.cart-quantity{
    height: auto;
}
.cart-btn{
    background-color: #181f18 !important;
}
.product-list {
    margin-top: 10%;
    text-align: center;
}
.img-section{
    height: 35%;
    width: 100%;
}
.product-outline {
    border: 1px outset;
}
</style>