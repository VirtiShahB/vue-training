<template>
    <div class="container">
        <div class="row">
            <div class="mt-4" v-for="(product,index) in products" :key="index">
            <ProductDetail :p_name="product.name" :p_description="product.description" :p_price="product.price" :p_index="index" ></ProductDetail>
            </div>
            
        </div>
    </div>
</template>

<script>
import ProductDetail from './ProductDetail.vue'

export default {
    data () {
        return {
        }
    },
    props: ['products'],
    name: 'Dashboard',
    components: {
        ProductDetail
    }
}
</script>
