<template>
  <div>
    <b-card
      :title="product.name"
      :img-src="product.img"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text> ${{ product.price }} </b-card-text>
      <b-button @click="shareData()" variant="primary">View Details</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartProducts: this.$parent.cartProducts,
    };
  },
  props: ["product"],
  name: "Dashboard",
  methods: {
    shareData() {
      this.$router.push({
        name: "productDetail",
        params: { data: this.product },
      });
    },
  },
};
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 300px;
}
</style>
