<template>
    
    <div class="card">
        <b-img thumbnail src="../../public/images/earphone.jpeg" alt="Earphone" fluid></b-img>
        <h1>{{ pro_name }}</h1>
        <p class="price"> {{ price }} </p>
        <p>{{ description }}</p>
        <b-input-group>
            <b-input-group-prepend>
                <b-btn variant="outline-info" @click="num--">-</b-btn>
            </b-input-group-prepend>
            <b-form-input type="number" min="0.00" v-model="num" class="cart-num"></b-form-input>
            <b-input-group-append>
                <b-btn variant="outline-secondary" @click="num++">+</b-btn>
            </b-input-group-append>
        </b-input-group>

        <p class="cart-btn">
            <b-button class="cart-btn"><b-icon icon="cart"></b-icon> Add to Cart</b-button>
        </p>
    </div>

</template>
<script>
export default {
    name:"Product",
    data() {
        return {
            pro_name : "Bolt earphone",
            price: '$25.99',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            num: 0
        }
    },
    watch:{
        num: function(newValue) {

            if( newValue <= -1 ) {
                this.num = 0;
            }
        }
    }
}
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  margin-left: 100px;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
p.cart-btn {
    margin-top: 10px;
}
.cart-num{
    height: auto;
}
.cart-btn{
    background-color: #179e17 !important;
}
</style>