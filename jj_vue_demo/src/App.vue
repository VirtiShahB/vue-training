<template>
  <div>
    <Header></Header>
    <Dashboard :products="products"></Dashboard>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard/Dashboard.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  data () {
    return {
      products: [
        {name: 'Shirt', description: "Van Heusen Men's Slim Business Casual Pants", price: 30},
        {name: 'TShirt', description: "Van Heusen Men's Slim Business Casual Pants", price: 30},
        {name: 'Jeans', description: "Van Heusen Men's Slim Business Casual Pants", price: 30}
      ]
    }
  },
  components: {
    Dashboard,
    Header
  }
}
</script>

