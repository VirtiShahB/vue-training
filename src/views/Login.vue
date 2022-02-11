<template>
  <div class="checkout">
    <div class="container">
      <div class="row">
        <div class="col-3">
        </div>

        <div class="col-6 text-left">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center">Login</h5>
              <div class="clearfix"></div><br />

              <form ref="loginForm" action="" method="POST" @submit="login">
                <div class="form-group row mt-3">
                  <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                  <div class="col-md-6">
                      <input id="email" type="text" class="form-control" name="email" v-model="formdata.email" required autocomplete="email">
                  </div>
                </div>

                <div class="form-group row mt-3">
                  <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                  <div class="col-md-6">
                      <input id="password" type="password" class="form-control" name="password" v-model="formdata.password" required autocomplete="password">
                  </div>
                </div>

                <div class="col-md-12 mt-4 text-center">
                  <button type="submit" class="btn btn-primary text-center">Login</button>
                </div>
              </form>
              <div class="clearfix"></div><br />

              <div class="row">
                <div class="col-auto offset-2">
                  <a @click="onGoogleSignIn" class="btn btn-block btn-danger">
                    <b-icon-google></b-icon-google>
                    Sign in with Google
                  </a>

                  <a
                    @click="logInWithFacebook"
                    class="ml-15 btn btn-block btn-primary"
                  >
                    <b-icon-facebook></b-icon-facebook>
                    Sign in with Facebook
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  props: {
    
  },
  data() {
    return {
      formdata: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    login(e){
      e.preventDefault() // it prevent from page reload

      var _this = this;
      var registerUsers = localStorage.getItem('register_users');

      if(registerUsers != undefined || registerUsers != null){
        registerUsers = JSON.parse(registerUsers);

        var regUser = [];

        registerUsers.map(function(value, key) {
          if(_this.formdata.email == value.email){
             regUser.push(value);   
          }
        });

        if(regUser.length > 0){
          if(this.formdata.password == regUser[0].password){
            this.$refs.loginForm.reset();

            alert('Success! User logged in.');
          }
          else{
            alert('Password do not match with user in our records.');
          }
        }
        else{
          alert("We does't find any user with this email in our records.");
        }
      }else{
        alert("We does't find any user with this email in our records.");
      }
    },
    async logInWithFacebook() {
      window.FB.login(
        (response) => {
          if (response.authResponse) {
            window.FB.api(
              "/me",
              { locale: "en_US", fields: "id,name, email" },
              (response) => {
                let users = JSON.parse(localStorage.getItem("register_users"));

                if (users != null && users.length > 0) {
                  let findUser = users.findIndex(
                    (user) => user.email == response.email
                  );

                  if (findUser == -1) {
                    alert('Error! No any user found with this email.');
                    return false;
                  } else {
                    var socialUser = users.find((user) => {
                      return user.email === response.email;
                    });
                    this.createLoginUser(socialUser);
                    this.errors.email = "";
                    this.$router.push({ name: "home" });
                  }
                } else {
                  alert('Error! No any user found with this email.');
                  return false;
                }

                // Login Code
              }
            );
          } else {
            alert('Error! User cancelled login or did not fully authorize.');
            return false;
          }
        },
        { scope: "email" }
      );
      return false;
    },
    onSignIn(user) {
      const profile = user.getBasicProfile();
    },
    async initFacebook() {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "729711241341340", //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          xfbml: true, // parse XFBML
          oauth: true,
        });
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    },
    onGoogleSignIn() {
      const gapi = window.gapi;

      gapi.load("auth2", () => {
        gapi.auth2.authorize(
          {
            client_id:
              "715709340166-ga646gel28qdsk8uqckt349jfl3h6qm1.apps.googleusercontent.com",
            scope: "email profile openid",
            response_type: "id_token permission",
            login_hint: "email",
            ux_mode: "popup",
            prompt: "select_account",
          },
          (response) => {
            if (response.error) {
              // An error happened!
              return "error";
            }
            this.getLoggedInUser();
          }
        );
      });
    },
    getLoggedInUser() {
      const gapi = window.gapi;

      gapi.load("auth2", () => {
        gapi.auth2.init().then(() => {
          var auth = gapi.auth2.getAuthInstance();
          // check login is true
          if (auth.isSignedIn.get() == true) {
            var user = auth.currentUser.get();
            // get user profile
            var profile = user.getBasicProfile();

            let users = JSON.parse(localStorage.getItem("register_users"));

            if (users != null && users.length > 0) {
              let findUser = users.findIndex(
                (user) => user.email == profile.getEmail()
              );

              if (findUser == -1) {
                alert('Error! No any user found with this email.');
                return false;
              }

              //Make user sign in
              var socialUser = users.find((user) => {
                return user.email === profile.getEmail();
              });
              
              this.$router.push({ name: "home" });
            } else {
              alert('Error! No any user found with this email.');
            }
          }
        });
      });
    },
    async mounted() {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-right{
  text-align: right !important;
}

.text-left{
  text-align: left !important;
}

.text-center{
  text-align: center !important;
}

.form-control {
    border-radius: 1px;
}

.ml-15 {
    margin-left: 15px;
}

</style>
