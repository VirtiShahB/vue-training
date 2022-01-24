<template>
  <div class="home">
    <ProductDetail product="Women's Velvet Dress" price="30"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductDetail from "@/components/ProductDetail.vue";

export default {
  name: "Home",
  components: {
    ProductDetail,
  },
};
</script>
