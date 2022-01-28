<template>
  <div>
    <Header></Header>
    <router-view :products="products"></router-view>
  </div>
</template>

<script>
 import Header from './components/Header.vue'
export default {
  name: 'App',
  data () {
    return {
      products: [
        {id: 0,name: 'Shirt', description: "Van Heusen Men's Slim Business Casual Pants", price: 30, quantity: 0, img:require("@/assets/shirt.jpg")},
        {id: 1,name: 'TShirt', description: "Van Heusen Men's Slim Business Casual Pants", price: 30, quantity: 0, img:require("@/assets/tshirt.jpg")},
        {id: 2,name: 'Jeans', description: "Van Heusen Men's Slim Business Casual Pants", price: 30, quantity: 0, img:require("@/assets/pants.jpg")}
      ]
    }
  },
  components: {
     Header
  }
}
</script>

