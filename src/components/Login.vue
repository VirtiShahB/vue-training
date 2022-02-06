<template>
  <div>
    <b-container class="bv-example-row mt-3">
      <b-row >
          <b-col sm="3">
          </b-col>

          <b-col sm="6">
              <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </p>
          <b-card class="mt-3" style="text-aligh" header="Login">
            <pre class="m-0"></pre>
            <b-row>
              <b-col>
                Note : login with "nirav.bacancy@gmail.com" and "123456"
              </b-col>
            </b-row>  
            <b-form
              @submit.prevent="checkLoginForm"
              method="post"
              id="frm-login"
              class="m-2"
            >
              <b-row>
                <b-col sm="12" class="my-2">
                  <b-form-group
                    id="lbl-email"
                    label="Email:"
                    size="sm"
                  >
                    <b-form-input
                      size="sm"
                      type="email"
                      id="email"
                      placeholder="Enter email"
                      required
                      name="first_name"
                      v-model="form.email"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12" class="my-2">
                  <b-form-group
                    id="lbl-password"
                    label="Password:"
                    size="sm"
                  >
                    <b-form-input
                      size="sm"
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                      required
                      name="password"
                      v-model="form.password"
                    ></b-form-input>
                  </b-form-group>            
                </b-col>
              </b-row>

              <b-row>
                <b-col sm="12" class="my-2">
                    <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                        <b-form-checkbox-group
                        v-model="form.remember"
                        id="checkboxes-4"
                        :aria-describedby="ariaDescribedby"
                        >
                        <b-form-checkbox value="me">Remember me</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group>
                </b-col>
              </b-row>            
            <b-button type="submit" variant="primary">Login</b-button>
            &nbsp;
            <b-button type="button" variant="primary" ><router-link to="/signup" >Sign Up</router-link></b-button>
            
            </b-form>
          </b-card>
          </b-col>
          
      </b-row>
    </b-container>
  </div>  
</template>
<script>
export default {
    name:"Login",
    data() {
        return {
            errors: [],
            form: {
              email: null,
              password:null
            }
        }
    },
    methods:{
        checkLoginForm(e){
          
            this.errors = [];
            if (!this.form.email) {
                this.errors.push("Email id is required");                
            }
            if (!this.form.password) {
                this.errors.push("Password is required");
            }
            if (this.errors.length > 0) {
                e.preventDefault();
            }
            if(this.form.email == 'nirav.bacancy@gmail.com' && this.form.password=='123456') {
                localStorage.setItem(
                  "is_login",
                  JSON.stringify(true)
                );
                alert("Login success successfully!")
                this.$router.push({ name: "Dashboard" });
            }else{
              alert("Invalid user name password");
            }
        } 
    }
}
</script>
<style scoped>
a{ 
color:white;
text-decoration: none;
}
a:link    {color:white;}
a:visited {color:white;}
a:hover   {color:white;}
a:active  {color:white;}

</style>