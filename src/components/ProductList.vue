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
                  <div class="price">$ {{ price }}.00</div>
                  <br>
                  <router-link :to="{ name: 'ShowDetails', params: { id: product.id } }"
                    ><div class="card-name">{{ product.name }}</div></router-link
                  >
                  
                  <br>
                  <div class="card-info"> {{ product.description }}</div>
                </div>
                <div class="footer">
                  <button type="button" class="btn add-to-card" @click="addToChart">
                    Add to Cart
                  </button>
                  <div
                    
                    class="add-to-favorites"
                   
                  >
                   Add to Whislist
                  </div>
                 
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
    // Given first valeus to selectCount and selectedSize.
    resetSelections() {
      this.selectedCount = 1;
      this.selectedSize = this.product.sizes[0].value;
    },
   },
 
};
</script>

<style scoped>
.cards-main {
  width: 100%;
  height: 100%;
  min-height: 1000px;
  margin-bottom: 20px;
  border-radius: 6px;

  grid-gap: 1px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  overflow: auto;
  padding: 40px;
  background: #f8f8f8;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.card-main-title {
  margin-bottom: 5px;
}

.prod-card-wrapper {
  height: fit-content;
  max-width: 280px;
  min-height: 240px;
  max-height: 520px;
  margin: 5px;
  border: 1px solid #b8b8b8;
  background: white;
  border-radius: 6px;
  box-shadow: 0 0 8px rgba(5, 20, 191, 0.2);
}
.card-wrapper {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid #ebe5e5;
}

.img-wrapper {
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
}

.card-info-wrapper {
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 16px;
  width: 100%;
  min-height: 60px;
}

.card-header {
  margin-bottom: 6px;
}

.price {
  font-weight: bold;
}

.card-info {
  color: #545454;
  overflow: hidden;
}

.btn {
  background: #005bff;
  color: white;
  border: 0;
  border-radius: 6px;
  height: 38px;
  width: 50%;
  font-weight: bold;
  font-size: 1em;
}

.btn:hover {
  background: #0c57d7;
  cursor: pointer;
}

.btn:active {
  background: #063587;
}

.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.add-to-favorites {
  color: #ff005e;
  cursor: pointer;
  width: fit-content;
  max-width: 50%;
}

.add-to-favorites:hover {
  color: #bb0042;
}

.add-to-favorites:active {
  color: #7c002c;
}
</style>