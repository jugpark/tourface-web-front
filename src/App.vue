<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from "@/components/layouts/Layout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Layout }
})

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
