var toastMessage = {
    methods: {
        makeToastMessage(message, variant) {
            this.$bvToast.toast(message, {
                title: `${variant || "default"}`,
                variant: variant,
                solid: true,
                autoHideDelay: 2000,
                noHoverPause: true,
                appendToast: true,
            });
        }
    },
}

export default toastMessage;