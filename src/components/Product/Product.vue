<template>
    <router-link :to="{name:'ProductDetail',params:{id: product.id}}" class="text-decoraton-none text-dark">
        <b-card :img-src="product.image" img-alt="Card image" img-top>
        <b-card-text >
          {{product.title}}
          <p class="text-muted mt-2 mb-0">Price</p>
          <h4>${{product.price}}</h4>
        </b-card-text>
      </b-card>
    </router-link>
</template>
<script>
export default {
    props:{
        product:Object
    }
}
</script>