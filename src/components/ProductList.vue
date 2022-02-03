<template>
  <b-col md="3">
            
              <div class="card-wrapper">
               
                <div class="img-wrapper">
                  <img
                    class="img"
                    :src="product.image"
                    height="100%"
                    width="100%"
                    alt="img"
                  />
                </div>
                <div class="card-info-wrapper">
                  <router-link :to="{ name: 'ShowDetails', params: { id: product.id } }"
                    ><div class="card-name">{{ product.name }}</div></router-link
                  >
                  
                  <br>
                  <div class="price">$ {{ price }}.00</div>
                  
                  <br>
                  <div class="card-info"> {{ product.description | str_limit(8) }}</div>
                </div>
                <div class="footer">
                  <button type="button" class="btn add-to-card" @click="addToChart">
                    Add to Cart
                  </button>
                  <button type="button"
                    
                    class="add-to-favorites btn" @click="addToWhislist"
                   
                  ><b-icon-heart></b-icon-heart></button>
                   
                 
                 
                </div>

              </div>
  </b-col>
          
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
      if(localStorage.getItem('productsOnCart')){
          newProduct = JSON.parse(localStorage.getItem('productsOnCart'));
      }
      //cartProducts.push(JSON.stringify(newProduct));
      localStorage.setItem('productsOnCart',JSON.stringify(newProduct));
      console.log(localStorage.getItem('productsOnCart'));
      this.$emit("add-to-chart", newProduct);
      this.resetSelections();
    },  
    addToWhislist() {
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
      if(localStorage.getItem('productsOnCart')){
          newProduct = JSON.parse(localStorage.getItem('productsOnCart'));
      }
      //cartProducts.push(JSON.stringify(newProduct));
      localStorage.setItem('productsOnCart',JSON.stringify(newProduct));
      console.log(localStorage.getItem('productsOnCart'));
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

<style scoped>

</style>