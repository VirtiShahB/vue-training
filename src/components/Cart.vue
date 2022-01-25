<template>
  <div>
    <b-img
      thumbnail
      fluid
      :src="image"
      v-on:click="(event) => this.$emit('itemSelect', id)"
      :alt="image"
    ></b-img>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    id: Number,
    name: String,
    price: Number,
    currency: String,
    image: String,
  },
  components: {}
};
</script>
