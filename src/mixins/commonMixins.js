var mixinData = {
	methods:{
		signOut() {
			localStorage.removeItem("is_login");
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
        }
    }
}
export default mixinData