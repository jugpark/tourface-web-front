<template>
  <div class="header">
    <div class="gnb">
      <h2 class="logo">
        <i class="icon main-icon"></i>
      </h2>
      <ul class="nav">
        <template v-for="item in headerList">
          <li>
            <a @click="onRouterCLick(item.url)">{{ item.name }}</a>
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
        {name: "회사소개", url: "/"},
        // {name: "사업영역", url: "about"},
        // {name: "특장점", url: "merit"},
        // {name: "행사지원", url: "resource"},
        // {name: "오시는길", url: "way"}
      ]
    }
  },
  methods: {
    onRouterCLick(url) {
      this.$router.push({ path: url })
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
  .gnb {
    padding: 0 80px;
  }
  .logo {
    padding: 30px 0;
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
      padding: 0 30px;

      a {
        cursor: pointer;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 20px;
        color: #111111;
        text-align: center;
        display: inline-block;
        padding: 45.5px 0;
        text-decoration: none;
        font-weight: 600;
        position: relative;
        &:hover {
          color: #2c3e50;
          &::after {
            position: absolute;
            display: inline-block;
            width: 100%;
            height: 1px;
            bottom: 30px;
            left: 0;
            background-color: #2c3e50;
            content: "";
          }
        }
      }
    }
  }
}
</style>