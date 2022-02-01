<template>
  <div class="">
    <br/>
    <!-- <h1>Welcome to E-commerce Application</h1> -->
    <ItemList />
  </div>
</template>

<script>
import ItemList from "./ItemList.vue";

export default {
  name: "Dashboard",
  components: {
    ItemList,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
