<template>
    <div>
        <b-container class="bv-example-row">
          <h1 class="text-left">Products Listing</h1>
          <b-row>
            <b-col cols="3" v-for="item of items" :key="item.id" class="p-0 mt-5 item_block">
              <router-link :to="{ name: 'ProductDetail', params: {id:item.id,item:item}}">
                <img :src="require('@/assets/images/'+item.image)" alt="book image" class="img-fluid mb-2" v-bind="mainProps">
              </router-link>
              <span class="wishlist_block">
                <b-icon v-if="IsWishlisted(item.id)" icon="heart"  @click="addWishlist(item,wishListItemId)" font-scale="1.5"  class="wishlist_icon"></b-icon>
                <b-icon v-else icon="heart-fill"  font-scale="1.5"  class="wishlist_icon"  @click="removeFromWishlist(item,wishListItemId)" variant="danger"></b-icon>
              </span>
              <div class="book_detail_block">
                <router-link :to="{ name: 'ProductDetail', params: {id:item.id,item:item}}">
                  <p class="mb-0 book_title">{{item.title}}</p>
                </router-link>
                <p class="book_author mb-0"><b-icon-chevron-right scale="0.7"></b-icon-chevron-right>{{item.author}}</p>
                <p class="red mt-2 mb-2">{{'₹ '+item.price}}</p>
              </div>
            </b-col>
          </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data(){
          return{
            wishList:[],
            wishListItemId:[],
            mainProps:{ blank: true,class: 'm1' },
            items: [
              {
                id:1,
                title: "400 Days",
                author:"Chetan Bhagat",
                desc: "12-year-old Siya has been missing nine months. It’s a cold case, but Keshav wants to help her mother, Alia, who refuses to give up. Welcome to 400 Days―a mystery and romance story like no other.",
                price: "400.00",
                image: '400_days.jpg',
                default_qty: 1
              },
              {
                id:2,
                title:"My Life in Full: Work, Family, and Our Future",
                author:"Indra K. Nooyi",
                desc:"For a dozen years as one of the world's most admired CEOs, Indra Nooyi redefined what it means to be an exceptional leader.",
                price: "467.00",
                image: 'my_life.jpg',
                default_qty: 1
              },
              {
                id:3,
                title:"The Psychology of Money",
                author:"Morgan Housel ",
                desc:"Timeless lessons on wealth, greed, and happiness doing well with money isn?t necessarily about what you know.",
                price: "240.00",
                image: 'psychology.jpg',
                default_qty: 1
              },
              {
                id:4,
                title:"Life's Amazing Secrets",
                author:"Gaur Gopal Das",
                desc:"Life's Amazing Secrets: How to Find Balance and Purpose in Your Life | Inspirational Zen book on motivation, self-development & healthy living",
                price: "214.00",
                image: 'life_amazing_secret.jpg',
                default_qty: 1
              },
              {
                id:5,
                title:"Rich Dad Poor Dad",
                author:"Robert T. Kiyosaki",
                desc:"Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
                price: "243.00",
                image: 'rich_dad_poor_dad.jpg',
                default_qty: 1
              }
            ]
          }
        },
        methods: {
          addWishlist(item,wishListItemId) {
            this.$store.commit('addWishlist',{item,wishListItemId})
          },
          removeFromWishlist(item,wishListItemId) {
            this.$store.commit('removeFromWishlist',{item,wishListItemId})
          },
          IsWishlisted(itemId){
            return !this.wishListItemId.includes(itemId);
          },
          getWishList() {
            this.$store.commit('getWishList');
            var wishListArray = this.$store.wishList;
            if(wishListArray.length > 0){
              for(var i = 0;i<wishListArray.length;i++){
                if(!wishListArray.includes(wishListArray[i].id)){
                  this.wishListItemId[i] = wishListArray[i].id;
                }
              }
            }
          },
        },
        beforeMount() {
          this.getWishList();
        },
    }
</script>

<style scoped>
.item_block{
  cursor:pointer;
  height: 100%;
  
  margin: 0 20px;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 16%);
}
.item_block img{
  overflow: hidden;
  height: 222px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.item_block .book_detail_block{
  height: 100px;
}
.wishlist_icon {
    position: absolute;
    right: 5px;
    top: 8px;
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: 0 1px;
    width: 28px;
    height: 28px;
    cursor: pointer;
}
.wishlist_block{
    width: 40px;
    height: 40px;
    position: absolute;
    right: 15px;
    background: #00000058;
    border-radius: 5px;
    top: 20px;
}
</style>