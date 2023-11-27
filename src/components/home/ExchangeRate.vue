<template>
  <div class="box">
    <i class="icon img-flag" :class="currency.img"/>
    <div class="info">
      <p class="currency">{{ currency.unit }}</p>
      <p class="amount">{{ currency.rate }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'currency'
  ]
}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 20px 30px;
  border: 1px solid #d1d1d1;
  display: flex;
  justify-content: center;
  align-items: center;

  .info {
    .currency {
      font-size: 14px;
      font-weight: 400;
      color: #333333;
    }

    .amount {
      font-size: 30px;
      font-weight: 600;
      color: #00b69f;
    }
  }
}
</style>