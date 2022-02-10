<template>
    <main class="form-sign-in mt-5">
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
                <div id="google-signin-btn"></div>
                <router-view />
                <button class="button" @click="logInWithFacebook"> Login with Facebook</button>
            </div>
        </div>  
    </main>      
</template>

<script>
    export default {
        name:"facebookLogin",
        data() {
            return {
                email    : "",
                password : "",
                users    : [],
            }
        },
        methods: {
            // Facebook Login
            async logInWithFacebook() {
            await this.loadFacebookSDK(document, "script", "facebook-jssdk");
            await this.initFacebook();
            window.FB.login(function(response) {
                if (response.authResponse) {
                    let loginUser = {
                        firstName: response.authResponse.userId,
                        lastName : response.authResponse.userId,
                        email    : response.authResponse.userId,
                        password : '',
                        type     : 'Facebook'  
                    };
                    localStorage.setItem("activeUser", JSON.stringify(loginUser));
                    window.location.reload()
                } else {
                    alert("User cancelled login or did not fully authorize.");
                }
            });
            return false;
            },
            async initFacebook() {
            window.fbAsyncInit = function() {
                window.FB.init({
                appId: "1419887251759605", //You will need to change this
                cookie: true, // This is important, it's not enabled by default
                version: "v13.0"
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
            //Google Sing in
            onSignIn(user) {
                let loginUser = {
                    firstName: user.getBasicProfile().VX,
                    lastName : user.getBasicProfile().iW,
                    email    : user.getBasicProfile().tv,
                    password : '',
                    type     : 'Google'  
                };
                localStorage.setItem("activeUser", JSON.stringify(loginUser));
                this.$router.push("/admin/overview");
            },
            renderGoogleLoginButton() {
                gapi.signin2.render("google-signin-btn", {
                    onsuccess: this.onSignIn
                });
            },
            // Manually login
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
        },
        mounted() {
            window.addEventListener("google-loaded", this.renderGoogleLoginButton);
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
    .form-sign-in {
        width: 100%;
        max-width: 450px;
        margin: auto;
    }
    label {
        font-weight: 600;
    }
    .button{
        color: white;
        min-width: 149px;
        background-color: #0571e6;
        height: 2.5rem;
        font-weight: 400;
        font-size: 0.8rem;
        float: right;
        margin: -36px 0px 12px;
    }
</style>