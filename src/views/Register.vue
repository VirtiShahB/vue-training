<template>
  <div class="checkout">
  <div class="container">
    <div class="row">
    <div class="col-3">
    </div>

	  <div class="col-6 text-left">
	  	<div class="card">
		    <div class="card-body">
		      <h5 class="card-title text-center">Register</h5>
		      <div class="clearfix"></div><br />

          <form ref="registerForm" action="" method="POST" @submit="register">
            <div class="form-group row">
              <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

              <div class="col-md-6">
                  <input id="name" type="text" class="form-control" name="name" v-model="formdata.name" required autocomplete="name" autofocus>
              </div>
            </div>

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

            <div class="form-group row mt-3">
              <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

              <div class="col-md-6">
                  <input id="password-confirm" type="password" class="form-control" name="confirm_password" v-model="formdata.confirm_password" required autocomplete="new-password">
              </div>
            </div>

            <div class="col-md-12 mt-4 text-center">
              <button type="submit" class="btn btn-primary text-center">Register</button>
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
        name: '',
        email: '',
        password: '',
        confirm_password: ''
      }
    };
  },
  methods: {
    register(e){
      e.preventDefault() // it prevent from page reload
    
      if(this.formdata.password != this.formdata.confirm_password){
        alert('Password and confirmation password do not match.');
      }else{
        var _this = this;
        var registerUsers = localStorage.getItem('register_users');

        if(registerUsers != undefined || registerUsers != null){
          registerUsers = JSON.parse(registerUsers);

          var isUserExist = 0;

          registerUsers.map(function(value, key) {
            if(_this.formdata.email == value.email){
              isUserExist = 1;
            }
          });

          if(isUserExist == 0){
            registerUsers.push(this.formdata);
          }
          else{
            alert('This email already exist with our records.');
            return false;
          }
        }else{
          registerUsers = [];
          registerUsers.push(this.formdata);
        }

        this.$refs.registerForm.reset();
        localStorage.setItem('register_users', JSON.stringify(registerUsers));
        alert('Succes! User registered.');
      }
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

</style>
