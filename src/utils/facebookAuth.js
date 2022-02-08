export const initFbsdk = () => {
  return new Promise(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "297994675658028",
        cookie: false,
        xfbml: true,
        version: "v12.0",
      });

      window.FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
};

export const facebookLogin = {
  login: async () => {
    return new Promise((resolve) => {
      window.FB.login(
        (response) => {
          if (response && response.authResponse) {
            resolve(this.getUserDetails());
          }
        },
        { scope: "public_profile,email" }
      );
    });
  },
  getUserDetails: () => {
    return new Promise((resolve) => {
      window.FB.api(
        "/me",
        "GET",
        { fields: "id,name,first_name,last_name,picture,email" },
        (userInfo) => {
          let user = {};
          user.facebook_id = userInfo.id;
          user.email = userInfo.email;
          user.photo = userInfo.picture.data.url;
          user.first_name = userInfo.first_name;
          user.last_name = userInfo.last_name;
          resolve({ executed: 1, user });
        }
      );
    });
  },
  logout: () => {
    return new Promise(() => {
      window.FB.getLoginStatus(function (response) {
        // Called after the JS SDK has been initialized.
        if (response.status === "connected")
          window.FB.logout();
      });
    });
  },
  getLoginStatus: () => {},
};
