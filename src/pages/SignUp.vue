<template>
    <main class="form-signin">
        <div class="card">
               <div class="card-body">
                    <form>
                        <h2 class="h3 mb-3 fw-normal text-center">Please sign up</h2>
                        <div class="form-group">
                            <label>First Name</label>
                            <input type="text" v-model="firstName" class="form-control form-control-lg" placeholder="First name"/>
                        </div>
                        <div class="form-group">
                            <label>Last Name</label>
                            <input type="text" v-model="lastName" class="form-control form-control-lg" placeholder="Last name"/>
                        </div>
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" v-model="email" class="form-control form-control-lg" placeholder="Email address" />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" v-model="password" class="form-control form-control-lg" placeholder="Password"/>
                        </div>                        
                        <button type="submit" class="w-100 btn btn-lg btn-primary" v-on:click="submit">Sign up</button>
                        <p class="forgot-password text-right">
                          Already registered 
                          <router-link :to="{name: 'login'}" >sign in?</router-link>
                      </p>
                    </form>
                </div>
        </div>  
        <p class="mt-3 mb-3 text-muted text-center">© 2021–2022</p>
    </main>      
</template>

<script>
    export default {
        data() {
            return {
                firstName: "",
                lastName : "",
                email    : "",
                password : "",
                users: [],
            };
        },
        methods: {
            submit : function(){
                let user = {
                    firstName: this.firstName,
                    lastName : this.lastName,
                    email    : this.email,
                    password : this.password,
                    type     : "Direct"
                };
                if (localStorage.getItem("users")) {
                    this.users          = JSON.parse(localStorage.getItem("users"));
                    this.productDetails = this.users.find(users => users.email === this.email);
                    alert("Already registered");
                    this.$router.push("/login");
                }
                else{
                    this.users.push(user);
                    localStorage.setItem("users", JSON.stringify(this.users));
                    console.log(user);
                }          
            } 
        }
    }
</script>

<style scoped>
    body {
        display: flex;
        padding-top: 60px;
        padding-bottom: 60px;        
        align-items: center;
        background-color: #f6f6f6;
    }
    .form-signin {
        width: 100%;
        max-width: 450px;
        margin: auto;
    }
    label {
        font-weight: 600;
    }
</style>