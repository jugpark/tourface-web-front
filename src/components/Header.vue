<template>
  <div class="header">
    <div class="gnb">
      <h2 class="logo">
        <i class="icon main-icon"></i>
        <a>TourFace & Biz</a>
      </h2>
      <ul class="nav">
        <template v-for="item in headerList">
          <li>
            <a>{{ item.name }}</a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerList: [
        {name: "회사소개", url: "intro"},
        {name: "사업영역", url: "area"},
        {name: "특장점", url: "merit"},
        {name: "행사지원", url: "resource"},
        {name: "오시는길", url: "way"}
      ]
    }
  },
  methods: {
    onLinkCLick() {

    }
  },
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  min-width: 1200px;
  background: rgba(255, 255, 255, 1);
  border-bottom: 1px solid #cccccc;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: background 0.3s;
  zoom: 1;
  .gnb {
    padding: 0 100px;
  }
  .logo {
    padding: 40px 0;
    cursor: pointer;
    float: left;
    display: flex;
    align-items: center;

    a {
      padding-left: 10px;
      font-size: 20px;
      font-weight: 700;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: -.22px;
      color: #111111;
    }
  }

  .nav {
    li {
      float: right;

      a {
        cursor: pointer;
        font-family: 'NotoSansM';
        font-size: 20px;
        color: #111111;
        text-align: center;
        width: 150px;
        display: inline-block;
        padding: 45.5px 0;
        text-decoration: none;
        font-weight: 600;
      }
    }
  }
}
</style>