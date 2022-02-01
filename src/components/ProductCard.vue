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
          <b-card-title title-tag="h4">{{ product.name }}</b-card-title>
          <b-row>
            <b-col md="3">
              <b-form-rating
                  id="rating-10"
                  :value="product.rating"
                  :stars="5"
                  no-border
                  readonly
                  class="rating"
                  :class="[
                    product.color === 'yellow' ? 'pink-background' : 'blue-background',
                    product.color === 'yellow' ? 'yellow-color' : 'blue-color',
                  ]"
              ></b-form-rating>
            </b-col>
            <b-col md="9" style="font-weight: 600;">
              Write a review
            </b-col>
          </b-row>
          <hr>
          <b-card-title
            title-tag="h4"
            :class="product.color === 'pink' ? 'pink-color' : 'blue-color'"
          >$ {{ price }}.00</b-card-title>
          <b-card-text>
            {{ product.description }}
          </b-card-text>
          <hr>  
         
              <b-form-radio-group
                :options="product.sizes"
                class="general"
                v-model="selectedSize"
                buttons
                :button-variant="product.color === 'pink' ? 'secondary' : 'primary'"
              ></b-form-radio-group>
            
          <b-row style="margin-top:10px;">
            <b-col md="3" >           
              <b-form-spinbutton
                id="sb-inline"
                v-model="selectedCount"
                min="1"
                max="10"
                step="1"
                class="select-count"
              ></b-form-spinbutton>
            </b-col>
            <b-col md="9" >
              <b-button
                class="btn-add"
                :class="product.color === 'pink' ? 'pink-button-color' : 'blue-button-color'"
                @click="addToChart" >ADD TO Cart</b-button
              >
            </b-col>         
          </b-row>       
        </b-card-body>                              
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
      selectedSize: this.product.sizes[0].value, // Choosen size.
      selectedCount: 1, // Choosen piece.
      countOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Numbers of piece.
    };
  },
  computed: {
    // Calculate shoe' s price with product price, index of selectedSize at sizes array of product and selectedCount.
    price() {
      let indexOfSize = this.product.sizes
        .map((item) => item.value)
        .indexOf(this.selectedSize);
      if (indexOfSize === -1) {
        indexOfSize = 0;
      }
      return (this.product.price + indexOfSize * 10) * this.selectedCount;
    },
  },
   methods: {
    // Emit a new product or updated product.
    addToChart() {
      let indexOfSize = this.product.sizes
        .map((item) => item.value)
        .indexOf(this.selectedSize);
     
      let newProduct = {
        id: this.product.id,
        name: this.product.name,
        sizes: [
          {
            number: parseInt(this.selectedSize),
            piece: parseInt(this.selectedCount),
          },
        ],
        price: (this.product.price + indexOfSize * 10) * this.selectedCount,
        piece: this.selectedCount,
        image: this.product.image,
      };
      
      this.$emit("add-to-chart", newProduct);
      this.resetSelections();
    },
    // Given first valeus to selectCount and selectedSize.
    resetSelections() {
      this.selectedCount = 1;
      this.selectedSize = this.product.sizes[0].value;
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
  .card-title {
      margin-bottom: 0.5rem;
      font-weight: 600;
  }
  .card-text{
      margin-bottom: 0;
     
      font-size: 13px;
      color: #5a5858;
  }
  .btn-group, .btn-group-vertical {
      position: relative;
      display: inline-flex;
      vertical-align: middle;
      margin-top: 15px;
  }
  .b-form-spinbutton {
      text-align: center;
      overflow: hidden;
      background-image: none;
      padding: 5px 0px 5px 0px!important;
  }
</style>
