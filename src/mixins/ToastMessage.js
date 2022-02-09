var toastMessage = {
    methods: {
        makeToastMessage(message, variant) {
            this.$bvToast.toast(message, {
                title: `${variant || "default"}`,
                variant: variant,
                solid: true,
                noHoverPause: true,
                appendToast: true,
                noAutoHide:true
            });
        }
    },
}

export default toastMessage;