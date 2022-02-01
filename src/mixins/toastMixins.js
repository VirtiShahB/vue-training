var mixin = {
    methods:{
        showToast: function(msg=null, title=null, variant='success'){
            this.$bvToast.toast(msg, {
                title: title,
                variant: variant,
                solid: true,
              });
        }
    }
}
export default mixin