export default{
	methods: {
		addProductToWishlist(product){
	      var _this = this;
	      var wishlistProducts = localStorage.getItem('wishlist_products');

	      if(wishlistProducts != undefined || wishlistProducts != null){
	        wishlistProducts = JSON.parse(wishlistProducts);

	        var isProductExist = 0;

	        wishlistProducts.map(function(value, key) {
	          if(product.id == value.id){
	            isProductExist = 1;
	          }
	        });

	        if(isProductExist == 0){
	          wishlistProducts.push(product);
	        }
	      }else{
	        wishlistProducts = [];
	        wishlistProducts.push(product);
	      }

	      localStorage.setItem('wishlist_products', JSON.stringify(wishlistProducts));
	    }
	}
}