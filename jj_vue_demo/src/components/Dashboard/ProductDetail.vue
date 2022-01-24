<template>
  <div>
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                <h3>{{ p_name }}</h3>
                <hr>
                <h5>{{ p_description }}</h5>
                <h5>${{ p_price }}</h5>
                <b-col sm="2">
                <b-input type="number" min="0" :id="'qty_'+p_index" v-model="p_quantity" ></b-input>
                <b-button variant="outline-primary" class="mt-3 mr-md-5" style="margin-right: 10px" v-on:click="incQty()" >+</b-button>
                <b-button variant="outline-primary" class="mt-3 mr-3" v-on:click="decQty()">-</b-button>
                </b-col>
                <b-button variant="outline-primary" class="mt-3 mr-3" style="margin-right: 10px">Add to cart</b-button>
                <b-button variant="outline-danger" class="mt-3 mr-3">Remove from cart</b-button>
            </b-card-text>
        </b-card>            
  </div>
</template>

<script>
export default {
    props: ['p_name','p_description','p_price','p_index'],
    data (){
        return { 
            p_quantity: 1
        }
    },
    methods: {
        incQty: function(){
            this.p_quantity += 1;
        },
        decQty: function(){
            if(this.p_quantity > 0){
                this.p_quantity -= 1;
            }
            
        },
        updateCart: function(){
            
        }
    },
}
</script>