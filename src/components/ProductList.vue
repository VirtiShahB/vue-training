<template>
   <div class="container">
      <div class="row product-list">
         <h2>
            <p><strong>Products</strong></p>
         </h2>  
         <div class="col-sm-4" v-for="(item, index) in items" :key="index">
            <b-img thumbnail v-bind:src="'../../images/'+ item.image" alt="Earphone" fluid class="img-section"></b-img>
            <div class="product-outline">
                <h1>{{ item.pro_name }}</h1>
                    <div v-if="item.favorite == 0" class="h2 mb-0" @click="AddToFavorite(item,index)">
                        <b-icon icon="heart"></b-icon>
                    </div>
                    <div v-else class="h2 mb-0" @click="RemoveFromFavorite(item,index)">
                        <b-icon icon="heart-fill"></b-icon>
                    </div>

                <p class="price"> ${{ item.price }} </p>
                <p>{{ item.description }}</p>
                <router-link :to="'product/detail/'+ item.id">
                <p class="view-button">
                    <b-button class="form-control">View</b-button>
                </p>
                </router-link>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
var items = [
                {
                    id:1,
                    pro_name : "Bolt headphone",
                    price: '25.99',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    image: 'earphone.jpeg',
                    model: 'Bolt',
                    color:'Black and white',
                    favorite:0
                },
                {
                    id:2,
                    pro_name : "JBL headphone",
                    price: '40.99',
                    description: "JBL headphone is great product of the printing and typesetting industry.",
                    image: 'jbl-headphone.jpeg',
                    model: 'JBL',
                    color:'Grey and white',
                    favorite:0
                },
                {
                    id:3,
                    pro_name : "Sony headphone",
                    price: '50.99',
                    description: "This is just text of the printing and typesetting industry.",
                    image: 'sony-headphone.jpeg',
                    model: 'Sony',
                    color:'Blue and black',
                    favorite:0
                }
            ];
    if( localStorage.getItem('items') === null ){
        localStorage.setItem("items", JSON.stringify(items));
    } else {
        items = JSON.parse(localStorage.getItem("items"));   
    }

export default {
    name:"ProductList",
    data() {
        return {
            items: items,
            ArrWishList: [],
        }
    },
    methods: {
        AddToFavorite: function (item,index){

            this.items[index].favorite = 1;
            this.ArrWishList.push(item);

            const parsedObject = JSON.parse(localStorage.getItem("items"));
            parsedObject[index].favorite = 1;
            const modifiedndstrigifiedForStorage = JSON.stringify(parsedObject);
            localStorage.setItem("items", modifiedndstrigifiedForStorage);

            localStorage.setItem('WishListitems',JSON.stringify(this.ArrWishList));
        },
        RemoveFromFavorite: function(item,index) {
            var WishedList = JSON.parse(localStorage.getItem('WishListitems'));
            this.items[index].favorite = 0;

            WishedList.splice(index,1);
            localStorage.setItem('WishListitems',JSON.stringify(WishedList));

            const parsedObject = JSON.parse(localStorage.getItem("items"));
            parsedObject[index].favorite = 0;
            const modifiedndstrigifiedForStorage = JSON.stringify(parsedObject);
            localStorage.setItem("items", modifiedndstrigifiedForStorage);
        }
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
svg.bi-heart.b-icon.bi {
    cursor: pointer;
}
</style>