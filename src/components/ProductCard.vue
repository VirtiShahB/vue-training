<template>
  <b-card
    no-body
    class="overflow-hidden product-card pink-background"
    style="margin: 1rem"
    :class="product.color === 'pink' ? 'pink-background' : 'blue-background'"
  >
    <b-row no-gutters>
      <b-col md="6" class="d-flex align-items-center">
        <b-card-img :src="product.image" alt="Image" class="rounded-0 product-img"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <b-card-text :class="product.color === 'pink' ? 'pink-color' : 'blue-color'">{{
            product.category
          }}</b-card-text>
          <b-card-title title-tag="h4">{{ product.name }}</b-card-title>
          <b-card-title
            title-tag="h1"
            :class="product.color === 'pink' ? 'pink-color' : 'blue-color'"
            >${{ price }}</b-card-title
          >
          <b-card-text>
            {{ product.description }}
          </b-card-text>
         
          <b-form-rating
            id="rating-10"
            :value="product.rating"
            :stars="5"
            no-border
            readonly
            class="rating"
            :class="[
              product.color === 'pink' ? 'pink-background' : 'blue-background',
              product.color === 'pink' ? 'pink-color' : 'blue-color',
            ]"
          ></b-form-rating>
        </b-card-body>
        <b-button
          class="btn-add blue-button-color"        
          >ADD TO Cart</b-button
        >
        <div class="count-box">
          <b-form-select
            v-model="selectedCount"
            :options="countOptions"
            class="select-count"
          ></b-form-select>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedCount: 1, // Choosen piece.
      countOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Numbers of piece.
    };
  },
  computed: {
    // Calculate shoe' s price with product price, index of selectedSize at sizes array of product and selectedCount.
    price() {      
      return (this.product.price) * this.selectedCount;
    },
  },
 
};
</script>

<style>
.product-card {
  padding: 1rem;
  border: 1px solid #888888 !important;
  box-shadow: 0px 0px 5px #888888;
}

.product-img:hover {
  transform: scale(1.1);
}

.select-count {
  margin-left: 5px;
  border: none;
  outline: none;
  background: transparent;
}

.general {
  position: relative;
  gap: 5px;
}

.general label {
  background: transparent;
  color: black;
}

.general label input {
  visibility: hidden !important;
  position: absolute !important;
}
</style>
