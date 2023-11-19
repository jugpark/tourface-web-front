<template>
  <div>
    <Header></Header>
    <router-view></router-view>
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

</style>