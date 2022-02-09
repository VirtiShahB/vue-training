export const mixin = {
  methods: {
    validateState(name) {
      //Signup & signin form validation
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    removeFromWishlist(item, wishListItemId) {
      //Item removed from wishlist
      this.$store.commit("removeFromWishlist", { item, wishListItemId });
      this.wishList = this.$store.wishList;
    },
    getWishList() {
      //Get item from wishlist
      this.$store.commit("getWishList");
      this.wishList = this.$store.wishList;
      if (this.wishList.length > 0) {
        for (var i = 0; i < this.wishList.length; i++) {
          if (!this.wishList.includes(this.wishList[i].id)) {
            this.wishListItemId[i] = this.wishList[i].id;
          }
        }
      }
    },
    getCart() {
      //Get cart data
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    loginWithGoogle() {
      //Google login
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          var userInfo = {
            loginType: "google",
            google: {
              auth: GoogleUser.getAuthResponse(),
              user: {
                name: GoogleUser.getBasicProfile().getName(),
                email: GoogleUser.getBasicProfile().getEmail(),
                profileImage: GoogleUser.getBasicProfile().getImageUrl(),
              },
            },
          };
          const registeredUser = JSON.parse(localStorage.getItem("users"));

          this.savingError = false;
          if (registeredUser != null) {
            if (registeredUser.length > 0) {
              for (var i = 0; i < registeredUser.length; i++) {
                if (registeredUser[i].email === userInfo.google.user.email) {
                  this.savingError = true;
                }
              }
            }
          }
          if (!this.savingError) {
            registeredUser.push(userInfo.google.user);
            localStorage.setItem("users", JSON.stringify(registeredUser));
            JSON.parse(localStorage.getItem("users"));
          }
          localStorage.setItem("LoggedUser", userInfo.google.user);
          window.location.href = "/home";
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    loginWithFacebook() {
      //Facebook login
      window.FB.login((response) => {
        if (response && response.authResponse) {
          var userInfo = {
            loginType: "fb",
            fb: {
              auth: response.authResponse,
            },
          };
          window.FB.api(
            `/${response.authResponse.userID}`,
            (userResponse) => {
              if (userResponse) {
                var userInfo = {
                  loginType: "fb",
                  fb: {
                    auth: response.authResponse,
                    user: userResponse,
                  },
                };
                console.log(userInfo);
              }
            },
            this.params
          );
          const registeredUser = JSON.parse(localStorage.getItem("users"));

          this.savingError = false;
          if (registeredUser.length > 0) {
            for (var i = 0; i < registeredUser.length; i++) {
              if (registeredUser[i].email === userInfo.fb.auth.userID) {
                this.savingError = true;
              }
            }
          }
          if (!this.savingError) {
            registeredUser.push(userInfo.fb.auth);
            localStorage.setItem("users", JSON.stringify(registeredUser));
            JSON.parse(localStorage.getItem("users"));
          }
          localStorage.setItem("LoggedUser", userInfo.fb.auth);
          window.location.href = "/home";
        }
      }, this.params);
    },
  },
};
