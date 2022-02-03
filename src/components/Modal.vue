<template>
  <div>
    <button v-on:click="clicked('you just clicked on button 2')">
      Button 2
    </button>
  </div>
</template>;
<script>
import clickMixin from "@/mixins/clickMixin";
export default {
  name: "Modal",
  mixins: [clickMixin]
};
</script>