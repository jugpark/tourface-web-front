<template>
  <div class="footer">
    <div class="top">
      <div class="area_link">
        <ul>
          <li v-for="item of items">{{ item }}</li>
        </ul>
      </div>
      <div class="area_info"></div>
    </div>
<!--    <div class="bottom"></div>-->
  </div>
</template>
<script>
import { FOOTER_CONTENT } from "@/constants/constants";

export default {
  data() {
    return {
      items: FOOTER_CONTENT
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  min-width: 1225px;
  background: #000;
  font-size: 15px;
  color: #333333;
  //position: absolute;
  //bottom: 0;
  text-align: left;

  .top {
    padding: 40px;

    .area_link {
      ul {
        li {
          display: inline-block;
          font-size: 14px;
          color: #888;
          letter-spacing: -.8px;
          line-height: 20px;
          white-space: nowrap;
          &::after {
            display: inline-block;
            width: 1px;
            height: 12px;
            margin: 4px 8px 0 6px;
            background-color: #222;
            vertical-align: top;
            content: "";
          }
        }
      }
    }
  }

  .bottom {
    padding: 10px;
  }
}
</style>