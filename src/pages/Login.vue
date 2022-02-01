<template>
    <main class="form-signin mt-5">
        <div class="card">
            <div class="card-body">
                <form>
                    <h2 class="h3 mb-3 fw-normal text-center">Please sign in</h2>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" v-model="email" class="form-control form-control-lg" placeholder="Email address" />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" v-model="password" class="form-control form-control-lg" placeholder="Password"/>
                    </div>
                    <div class="checkbox mb-3">
                        <label><input type="checkbox" value="remember-me"> Remember me</label>
                    </div>
                    <button type="submit" class="w-100 btn btn-lg btn-primary" v-on:click="submit">Login</button>
                </form>
                <p class="forgot-password text-right">Don't have an account yet?
                    <router-link :to="{name: 'sing-up'}">Sign Up</router-link>
                </p>
            </div>
        </div>  
    </main>      
</template>

<script>
    export default {
        data() {
            return {
                email:"",
                password:"",
            }
        },
        methods: {
            submit : function(){
                let credentials = {
                    email    : this.email,
                    password : this.password,
                };
                let lsUsers = JSON.parse(localStorage.users);
                let userIndex = lsUsers.findIndex(
                    (user) => user.email === credentials.email
                );
                if (userIndex > -1) {
                    let passwordIndex = lsUsers.findIndex(
                        (user) => user.password === credentials.password);
                    if (passwordIndex > -1) {
                        let activeUser = lsUsers.find(
                        (user) => user.email === credentials.email);
                        localStorage.setItem("activeUser", JSON.stringify(activeUser));
                        this.$router.push("/admin/overview");
                    }
                    else {
                        alert("Password does not match!")
                    }
                }
                else {
                    alert("Username does not exist!");
                }
            }
        }
    }
</script>

<style scoped>
    .card {
        margin: 0 auto; /* Added */
        float: right; /* Added */
        margin-bottom: 10px; /* Added */
    }
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