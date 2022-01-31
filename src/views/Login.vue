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
    }
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

</style>
