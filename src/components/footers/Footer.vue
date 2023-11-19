<template>
  <div class="footer">
    <div class="top">
      <div class="area_link">
        <ul>
          <li>(주)투어페이스앤비즈</li>
          <li>김숙진/신미선</li>
          <li>서울시 강남구 선릉로433 세방빌딩 11층 1103호 </li>
          <li>전화번호 : 02-6677-3300</li>
          <li>이메일 : tour@tfnb.co.kr </li>
          <li>기타 : FAX : 02-6203-7474</li>
        </ul>
      </div>
      <div class="area_info"></div>
    </div>
<!--    <div class="bottom"></div>-->
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  background: #000;
  font-size: 15px;
  color: #333333;
  position: absolute;
  bottom: 0;
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