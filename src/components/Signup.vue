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
          <b-card class="mt-3" style="text-aligh" header="Sign Up">
            <pre class="m-0"></pre>
            <b-form
              @submit="checkSignUpForm"
              method="post"
              id="frm-login"
              class="m-2"
            >
              <b-row>
                <b-col sm="12" class="my-2">
                  <b-form-group
                    id="lbl-first-name"
                    label="First Name:"
                    size="sm"
                  >
                    <b-form-input
                      size="sm"
                      id="first_name"
                      placeholder="Enter first name"
                      required
                      name="first_name"
                      v-model="form.first_name"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

                <b-row>
                <b-col sm="12" class="my-2">
                  <b-form-group
                    id="lbl-last-name"
                    label="Last Name:"
                    size="sm"
                  >
                    <b-form-input
                      size="sm"
                      
                      id="last-name"
                      placeholder="Enter last name"
                      required
                      name="last_name"
                      v-model="form.last_name"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

            <b-row>
                <b-col sm="12" class="my-2">
                  <b-form-group id="phone-number" label="Phone number:">
                    <b-form-input
                      id="phone_number"
                      placeholder="Enter Phone.No"
                      required
                      name="phone_number"
                      size="sm"
                      v-model="form.phone_number"
                      type="number"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
            </b-row>
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
                      name="email"
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
                  <b-form-group
                    id="lbl-confirm-password"
                    label="Confirm Password:"
                    size="sm"
                  >
                    <b-form-input
                      size="sm"
                      type="password"
                      id="confirm_password"
                      placeholder="Enter Confirm Password"
                      required
                      name="password"
                      v-model="form.confirm_password"
                    ></b-form-input>
                  </b-form-group>            
                </b-col>
              </b-row>

            <b-button type="submit" variant="primary">Sign Up</b-button>
             &nbsp;
            <b-button type="button" variant="primary" ><router-link to="/" >Login</router-link></b-button>
           
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
              first_name :null,
              last_name :null,
              email: null,
              password:null,
              confirm_password:null
            }
        }
    },
    methods:{
        checkSignUpForm(e){
            
            this.errors = [];
            if (!this.form.first_name) {
                this.errors.push("First name is required");
            }
            if (!this.form.last_name) {
                this.errors.push("Last name is required");
            }
            if (!this.form.phone_number) {
                this.errors.push("Phone number is required");
            }
            if (!this.form.email) {
                this.errors.push("Email id is required");                
            }
            if (!this.form.password) {
                this.errors.push("Password is required");
            }
            if (this.form.password && this.form.confirm_password && this.form.password!=this.form.confirm_password) {
                this.errors.push("Password and confirm password must be same");
            }
            if (this.errors.length > 0) {

                e.preventDefault();
            }else{
                e.preventDefault();
                alert("Sign up Successfully!");
                this.$router.push({ name: "Dashboard" });
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