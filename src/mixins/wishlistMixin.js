// import { reactive } from "vue";
export const wishlistMixin = {
    data() {
        return {
            productDetails: [],
            wishProduct: [],
            wishid: '',
            WishPro: 0,
        };
    },
    methods: {
        AddToWishList(pid) {
            this.wishid = pid;
            this.WishPro += 1;
            this.wishProduct.push(pid);
            localStorage.setItem("wishProduct", JSON.stringify(this.wishProduct));
            this.$store.commit("wishProduct", this.wishProduct);
            document.getElementById(pid).style.display = "block";
            document.getElementById('wish_' + pid).style.display = "none";
            this.$toasted.show("Item added in wishlist", {
                title: "Added !",
                variant: "success",
                toaster: "b-toaster-bottom-center",
                solid: true,
            });

        },
        RemoveToWishList(pid) {
            this.WishPro -= 1;
            this.wishProduct = JSON.parse(localStorage.getItem("wishProduct"))
            const index = this.wishProduct.indexOf(pid);
            if (index > -1) {
                this.wishProduct.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("wishProduct", JSON.stringify(this.wishProduct));
            this.$store.commit("wishProduct", this.wishProduct);
            document.getElementById(pid).style.display = "none";
            document.getElementById('wish_' + pid).style.display = "block";
            this.$toasted.show("Item remove in wishlist", {
                title: "Removed !",
                variant: "success",
                toaster: "b-toaster-bottom-center",
                solid: true,
            });
        }
    },
    created() {
        if (JSON.parse(localStorage.getItem("wishProduct"))) {
            this.wishProduct = JSON.parse(localStorage.getItem("wishProduct"));
            this.WishPro = JSON.parse(localStorage.getItem("wishProduct")).length;
        }
    }
};
