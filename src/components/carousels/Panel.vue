<template>
  <div class="panel">
    <div class="content">
      <h3 class="title">{{ detail.title }}</h3>
      <span class="sub-title">{{ detail.subtitle }}</span>
      <p class="description" v-html="detail.description"></p>
    </div>
  </div>
</template>
<script>
export default {
  props: [
      "detail"
  ]
}
</script>
<style lang="scss" scoped>
.panel {
  background-image: url("@/assets/airplane.jpg");
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 700px;

  .content {
    .title {

    }

    .sub-title {

    }

    .description {

    }
  }
}
</style>