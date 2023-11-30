<template>
  <div class="panel" :style="{ backgroundImage: `url('/src/assets/carousel${index}.jpg')`}">
    <div class="content">
      <h3 class="title" v-html="detail.title"></h3>
      <span class="sub-title" v-html="detail.subtitle"></span>
      <p class="description" v-html="detail.description"></p>
    </div>
  </div>
</template>
<script>
export default {
  props: [
      "detail",
      "index"
  ]
}
</script>
<style lang="scss" scoped>
.panel {
  position: relative;
  background-image: url("@/assets/airplane.jpg");
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;

  .content {
    position: absolute;
    text-align: left;
    top: 30%;
    left: 15%;
    .title {
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 60px;
      line-height: 60px;
      color: #ffffff;
      margin-bottom: 50px;
    }

    .sub-title {
      font-family: 'Noto Sans KR', sans-serif;;
      font-size: 25px;
      line-height: 25px;
      font-weight: 700;
      color: #ffffff;
    }

    .description {
      font-family: 'Noto Sans KR', sans-serif;;
      font-size: 17px;
      line-height: 25px;
      color: #ffffff;
      margin-top: 20px;
    }
  }
}
</style>