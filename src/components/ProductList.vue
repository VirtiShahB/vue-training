<template>
    <div class="container">
        <div class="row product-list">
            <div class="col-sm-4" v-for="(item, index) in items" :key="index">
            <b-img thumbnail v-bind:src="'../../images/'+ item.image" alt="Earphone" fluid class="img-section"></b-img>
                    <h1>{{ item.pro_name }}</h1>
                    <p class="price"> {{ item.price }} </p>
                    <p>{{ item.description }}</p>

                    <p class="cart-btn">
                        <b-button class="cart-btn">View</b-button>
                    </p>
            </div>
            <!-- <div class="col-sm-4">
            <b-img thumbnail src="" alt="Earphone" fluid></b-img>
                    <h1>{{ pro_name }}</h1>
                    <p class="price"> {{ price }} </p>
                    <p>{{ description }}</p>

                    <p class="cart-btn">
                        <b-button class="cart-btn" @click="addToCart(quantity)">View</b-button>
                    </p>
            </div>
            <div class="col-sm-4">
            <b-img thumbnail src="" alt="Earphone" fluid></b-img>
                    <h1>{{ pro_name }}</h1>
                    <p class="price"> {{ price }} </p>
                    <p>{{ description }}</p>

                    <p class="cart-btn">
                        <b-button class="cart-btn" @click="addToCart(quantity)">View</b-button>
                    </p>
            </div> -->
        </div>
</div>
</template>
<script>
export default {
    name:"ProductList",
    data() {
    return {
        items: [
            {
                id:1,
                pro_name : "Bolt headphone",
                price: '$25.99',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                image: 'earphone.jpeg',
            },
            {
                id:3,
                pro_name : "JBL headphone",
                price: '$25.99',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                image: 'jbl-headphone.jpeg',
            },
            {
                id:4,
                pro_name : "Sony headphone",
                price: '$25.99',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                image: 'sony-headphone.jpeg',
            }
        ]
    }
},
}
</script>
<style scoped>

.price {
  color: grey;
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
    margin-top: 20%;
    text-align: center;
}
.img-section{
height: 35%;
width: 100%;
}
</style>