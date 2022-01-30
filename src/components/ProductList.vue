<template>
   <div class="container">
      <div class="row product-list">
         <h2>
            <p><strong>Products</strong></p>
         </h2>  
         <div class="col-sm-4" v-for="(item, index) in items" :key="index">
            <b-img thumbnail v-bind:src="'../../images/'+ item.Image" alt="Earphone" fluid class="img-section"></b-img>
            <div class="product-outline">
                <h1>{{ item.ProductName }}</h1>
                    <div v-if="item.Favorite == 0" class="h2 mb-0" @click="AddToFavorite(item,index)">
                        <b-icon icon="heart"></b-icon>
                    </div>
                    <div v-else class="h2 mb-0" @click="RemoveFromFavorite(item,index)">
                        <b-icon icon="heart-fill"></b-icon>
                    </div>

                <p class="price"> ${{ item.Price }} </p>
                <p>{{ item.Description }}</p>
                <router-link :to="'product/detail/'+ item.Id">
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
                    Id:1,
                    ProductName : "Bolt headphone",
                    Price: '25.99',
                    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    Image: 'earphone.jpeg',
                    Model: 'Bolt',
                    Color:'Black and white',
                    Favorite:0
                },
                {
                    Id:2,
                    ProductName : "JBL headphone",
                    Price: '40.99',
                    Description: "JBL headphone is great product of the printing and typesetting industry.",
                    Image: 'jbl-headphone.jpeg',
                    Model: 'JBL',
                    Color:'Grey and white',
                    Favorite:0
                },
                {
                    Id:3,
                    ProductName : "Sony headphone",
                    Price: '50.99',
                    Description: "This is just text of the printing and typesetting industry.",
                    Image: 'sony-headphone.jpeg',
                    Model: 'Sony',
                    Color:'Blue and black',
                    Favorite:0
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

            this.items[index].Favorite = 1;
            this.ArrWishList.push(item);

            const parsedObject = JSON.parse(localStorage.getItem("items"));
            parsedObject[index].Favorite = 1;
            const modifiedndstrigifiedForStorage = JSON.stringify(parsedObject);
            localStorage.setItem("items", modifiedndstrigifiedForStorage);

            localStorage.setItem('WishListitems',JSON.stringify(this.ArrWishList));
        },
        RemoveFromFavorite: function(item,index) {
            var WishedList = JSON.parse(localStorage.getItem('WishListitems'));
            this.items[index].Favorite = 0;

            WishedList.splice(index,1);
            localStorage.setItem('WishListitems',JSON.stringify(WishedList));

            const parsedObject = JSON.parse(localStorage.getItem("items"));
            parsedObject[index].Favorite = 0;
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