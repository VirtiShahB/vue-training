export default {
  inheritAttrs: false,
  methods: {
    fireToastNotification(type, message) {
      switch (type) {
        case "default":
          this.$toast(message);
          break;
        case "success":
          this.$toast.success(message);
          break;
        case "info":
          this.$toast.info(message);
          break;
        case "warning":
          this.$toast.warning(message);
          break;
        case "danger":
          this.$toast.error(message);
          break;
        default:
      }
    },
  },
};
