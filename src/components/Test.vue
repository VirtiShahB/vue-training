<template>
 <div>
    <button v-on:click="clicked('you just clicked on button 1')">
      Button 1
    </button>
  </div>
</template>
<script>
import clickMixin from "@/mixins/clickMixin";
export default {
  name: "Test",
  mixins: [clickMixin]
};
</script>

