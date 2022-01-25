<template>
    <div>
        <b-container class="bv-example-row">
          <h1 class="text-left mb-5">Products Listing</h1>
          <b-row>
            <b-col cols="3" v-for="item of items" :key="item.id" class="mt-2" @click="viewProduct(item)">
              <img :src="require('@/assets/images/'+item.image)" alt="book image" class="img-fluid mb-2" v-bind="mainProps">
              <div class="">
                <p class="mb-0 book_title">{{item.title}}</p>
                <p class="book_author mb-0"><b-icon-chevron-right scale="0.7"></b-icon-chevron-right>{{item.author}}</p>
                <p class="red">{{'₹ '+item.price}}</p>
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
            mainProps:{ blank: true, width: 85, height: 85, class: 'm1' },
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
          viewProduct:function(items) {
            this.$router.push({
              name: "ProductDetail",
              params:{item:items},
            });
          }
        },
    }
</script>

<style scoped>


</style>