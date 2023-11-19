<template>
  <div class="page__wrap">
    <div class="page__section">
      <HomeCarousel></HomeCarousel>
      <div class="contact">
        <div class="box left">
          <h3 class="title"></h3>
          <div class="info">
            <p class="sub-title"></p>
            <p class="number"></p>
            <p class="time"></p>
            <p class="time-description"></p>
          </div>
        </div>
        <div class="box">
          <h3 class="title"></h3>
          <div class="info">
            <p class="sub-title"></p>
            <p class="number"></p>
            <p class="time"></p>
            <p class="time-description"></p>
          </div>
        </div>
      </div>
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
  .page__section {
    .contact {
      .box {
        .title {

        }
        .info {
          .sub-title {

          }
          .number {

          }
          .time {

          }
          .time-description {

          }
        }
      }
    }
  }
}
</style>