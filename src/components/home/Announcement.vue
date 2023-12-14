<template>
  <div class="box">
    <h3 class="title">{{ "공지사항" }}</h3>
    <div class="ready">
      <span>{{ "준비 중" }}</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.box {
  width: calc(100% - 580px);
  margin-right: 30px;
  border: 1px solid #d1d1d1;
  .title {
    border-bottom: 1px solid #d1d1d1;
    padding: 30px;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 0;
  }
  .ready {
    background-color: #d1d1d1;
    opacity: 0.25;
    padding: 82px;
    span {
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>
