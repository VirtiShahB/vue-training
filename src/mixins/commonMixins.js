var mixinData = {
	methods:{
		signOut() {
			localStorage.removeItem("is_login");
			localStorage.removeItem("loginUser");
			this.$router.push({ name: "Login" });
		}
	},
	watch:{
        $route (){
			var localIsLogin = JSON.parse(localStorage.getItem("is_login"));
			if (localIsLogin == true) {
				this.already_login = true;
			}else{
				this.already_login = false;
			}
			this.userAccount = JSON.parse(localStorage.getItem("loginUser"));
        }
    }
}
export default mixinData