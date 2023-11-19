<template>
  <div class="page__wrap">
    <div class="page__section">
      <HomeCarousel></HomeCarousel>
    </div>
  </div>
</template>
<script>
import HomeCarousel from "@/components/carousels/HomeCarousel.vue"
export default {
  components: {
    HomeCarousel
  }
}
</script>
<style lang="scss" scoped>
.page__wrap {
  margin-top: 116px;
  width: 100%;
}
</style>