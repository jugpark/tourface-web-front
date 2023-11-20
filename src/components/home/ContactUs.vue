<template>
  <div class="box">
    <h3 class="title">{{ items.tit }}</h3>
    <div class="info">
      <p class="sub-title">{{ items.sub }}</p>
      <p class="number">{{ items.num }}</p>
      <p class="time">{{ items.time }}</p>
      <p class="time-description">{{ items.tDescription }}</p>
    </div>
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
  border: 1px solid #888888;

  .title {
    border-bottom: 1px solid #d1d1d1;
    padding: 30px;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 0;
  }

  .info {
    padding: 30px;
    text-align: left;
    .sub-title {
      font-size: 14px;
      line-height: 1.65;
      color: #333333;
    }

    .number {
      position: relative;
      font-size: 25px;
      font-weight: 500;
      color: #00b69f;
      margin: 10px 0;
      &::after {
        position: absolute;
        display: inline-block;
        width: 155px;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: #00b69f;
        content: "";
      }
    }

    .time {
      font-size: 15px;
      font-weight: 600;
    }

    .time-description {
      margin-top: 10px;
      font-size: 15px;
      font-weight: 400;
    }
  }
}
</style>