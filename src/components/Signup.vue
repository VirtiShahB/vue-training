<template>
  <div>
    <b-container class="bv-example-row w-50 mb-5">
      <h3 class="text-left">Sign up</h3><br>
      <div class="success" v-if="savingSuccessful"> 
        <b-alert show variant="primary">{{ this.successText }}</b-alert>
      </div>
      <div class="success" v-if="savingError"> 
        <b-alert show variant="danger"> {{ this.errorText }} </b-alert>
      </div>
      <b-form @submit.stop.prevent="onSubmit" class="checkour_form text-left">
        <b-row>
          <b-col>
            <b-form-group label="First Name" label-for="first_name" >
              <b-form-input id="first_name" name="first_name" :class="{ 'is-invalid': submitted && $v.form.first_name.$error }" v-model="form.first_name"></b-form-input>
              <div v-if="submitted && !$v.form.first_name.required" class="invalid-feedback">First Name is required</div>
            </b-form-group>
            <b-form-group label="Last Name" label-for="last_name" >
              <b-form-input id="last_name" v-model="form.last_name"  :class="{ 'is-invalid': submitted && $v.form.last_name.$error }"></b-form-input>
              <div v-if="submitted && !$v.form.last_name.required" class="invalid-feedback">Last Name is required</div>
            </b-form-group>
            <b-form-group label="Email" label-for="email" >
              <b-form-input id="email" v-model="form.email" type="email"  :class="{ 'is-invalid': submitted && $v.form.email.$error }"  ></b-form-input>
              <div v-if="submitted && $v.form.email.$error" class="invalid-feedback">
                  <span v-if="!$v.form.email.required">Email is required</span>
                  <span v-if="!$v.form.email.email">Email is invalid</span>
              </div>
            </b-form-group>
            <b-form-group label="Password" label-for="password" >
              <b-form-input id="password" v-model="form.password" type="password" :class="{ 'is-invalid': submitted && $v.form.password.$error }"></b-form-input>
              <div v-if="submitted && $v.form.password.$error" class="invalid-feedback">
                <span v-if="!$v.form.password.required">Password is required</span>
                <span v-if="!$v.form.password.minLength">Password must be at least 6 characters</span>
              </div>
            </b-form-group>
            <b-form-group label="Confirm Password" label-for="confirm-password" >
              <b-form-input id="confirm-password" v-model="form.confirm_password" type="password" :class="{ 'is-invalid': submitted && $v.form.confirm_password.$error }"></b-form-input>
              <div v-if="submitted && $v.form.confirm_password.$error" class="invalid-feedback">
                <span v-if="!$v.form.confirm_password.required">Confirm Password is required</span>
                <span v-else-if="!$v.form.confirm_password.sameAsPassword">Passwords must match</span>
              </div>
            </b-form-group>
            <b-button type="submit" variant="primary" class="mr-2">Sign up</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
            <p class="btn d-inline">Already a member? <router-link  to="/signin"> Sign in </router-link></p>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required,email,minLength ,sameAs } from "vuelidate/lib/validators";

   export default {
    mixins: [validationMixin],
    data() {
      return {
        submitted: false,
        savingSuccessful: false,
        savingError: false,
        errorText:'',
        successText:'Your account has been created successfully!',
        users:[],
        form: {
          first_name:'',
          last_name:'',
          email: '',
          password:'',
          confirm_password:''
        },
      }
    },
    validations: {
      form: {
        first_name: { required },
        last_name: { required },
        email: { required, email },
        password: { required, minLength: minLength(8) },
        confirm_password: { required, sameAsPassword: sameAs('password') }
      }
    },
    methods: {
      validateState(name) {
        const { $dirty, $error } = this.$v.form[name];
        return $dirty ? !$error : null;
      },
      onSubmit() {
        this.submitted = true;
        this.$v.$touch();
        if (this.$v.$invalid) {
            return;
        }
        if (!localStorage.getItem("users")) {
          localStorage.setItem("users", JSON.stringify([]));
        }
        
        const registeredUser = JSON.parse(localStorage.getItem("users"));

        if(registeredUser.length > 0){
          for(var i = 0 ;i<registeredUser.length;i++){
            if((registeredUser[i].email === this.form.email) ){
              this.savingError = true;
            }
          }
        }
        if(this.savingError){
          this.errorText = 'Email is already registered';
        }else{
          registeredUser.push(this.form);
          localStorage.setItem("users", JSON.stringify(registeredUser));
          JSON.parse(localStorage.getItem("users"));
          this.savingSuccessful = true;
          this.$router.push('/signin')
        }
      },
       onReset(event) {
        event.preventDefault()
        this.form.first_name = this.form.last_name = this.form.email = this.form.phone = this.form.password = this.form.confirm_password = ''
      }
    },
    
  }
</script>

<style scoped>

</style>