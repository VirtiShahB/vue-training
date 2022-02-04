export default {
  methods: {
    addToCart(qty, price, size, color, product) {

      /** Check if user is logged in or not */
      if (!this.$loggedIn) {
        this.$bvToast.toast("Please login to continue !", {
          title: "Login Required !",
          variant: "danger",
          toaster: "b-toaster-bottom-center",
          solid: true,
        });

        return false;
      }

      /** Fetch existing cart from storage */
      let cart = JSON.parse(localStorage.getItem("cartStorage"));
      cart = cart != null ? cart : [];

      /** Check if cart has already have this product */
      let index = cart.findIndex((c) => c.product == product);

      /** if has then remove it  */
      if (index !== -1) {
        cart.splice(index, 1);
      }

      /** Push the item in cart */
      cart.push({
        qty: qty,
        price: price,
        size: size,
        color: color,
        product: product,
        userid : this.$loggedUser.id
      });

      /** Push cart in localstorage */
      localStorage.setItem("cartStorage", JSON.stringify(cart));

      this.$bvToast.toast("Item is added to cart !", {
        title: "Added",
        variant: "success",
        toaster: "b-toaster-bottom-center",
        solid: true,
      });
    },
  },
};
