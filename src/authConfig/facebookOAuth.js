
export const initFacebooksdk = () => {
  return new Promise(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1575886636101864",
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
