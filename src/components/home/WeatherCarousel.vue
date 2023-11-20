<template>
  <div class="box">
  </div>
</template>
<script>
import { CONTACT_CONTENT } from "@/constants/constants";
export default {
  data() {
    return {
      items: CONTACT_CONTENT
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 550px;
  height: 275px;
  border: 1px solid #888888;
}
</style>