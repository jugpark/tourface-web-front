<template>
  <div class="panel" :class="indexParser">
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
  ],
  computed: {
    indexParser() {
      if (this.index === 1) {
        return "first"
      } else if (this.index === 2) {
        return "second"
      } else {
        return "third"
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.panel {
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  &.first {
    background-image: url("@/assets/carousel0.jpg");
  }
  &.second {
    background-image: url("@/assets/carousel1.jpg");
  }
  &.third {
    background-image: url("@/assets/carousel2.jpg");
  }

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