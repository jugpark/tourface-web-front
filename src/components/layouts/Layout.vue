<template>
  <div>
    <Header></Header>
    <div class="page__wrap">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../headers/Header.vue";
import Footer from "../footers/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss" scoped>
.page__wrap {
  margin-top: 121px;
  width: 100%;
  min-height: calc(100vh - 217px);
  min-width: 1225px;
}
</style>