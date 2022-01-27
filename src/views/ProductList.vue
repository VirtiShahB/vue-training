<template>
  <div class="checkout">
    <div class="container wrapper">
      <div class="row">
        <div class="col-md-3 text-left">
          <h5>Product List</h5>
        </div>
      </div>

      <div class="row">
        <div v-for="(product, productKey) in products" :key="productKey">
          <div class="col-md-3">
            <div class="card">
              <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title"><a href="product.html" title="View Product">{{ product.product_name }}</a></h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="row">
                  <div class="col">
                      <p class="btn btn-danger btn-block">99.00 $</p>
                  </div>
                  <div class="col">
                      <a href="#" class="btn btn-success btn-block">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    
  },
  data() {
    return {
      products: [
        {
          'id': 1,
          'product_name': 'Tomato',
          'image': 'https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356__340.jpg'
        }
      ]
    }
  },
  mounted() {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        //this.products = res.data;

        console.log(res);


        
      })
      .catch(err => {
        console.log(err);
      })
  },
  methods: {
    //
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .text-left{
   text-align: left !important;
 }
</style>
