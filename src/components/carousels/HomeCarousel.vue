<template>
  <div class="carousel__wrap">
    <VueSlickCarousel v-bind="settings">
      <template v-for="item of details">
        <Panel :detail="item"/>
      </template>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import Panel from "@/components/carousels/Panel.vue";
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel,
    Panel
  },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000
      },
      details: [
        {
          title: "Tourface & Biz",
          subtitle: "The Best Global VIP Premium Service",
          description: "고객 중심시스템을 통해 <br> 새로운 기업 서비스를 경험해 보십시오. <br> 귀사의 성공적인 비즈니스를 위한 최고의 파트너가 되겠습니디.",
        },
        {
          title: "Tourface & Biz",
          subtitle: "The Best Global VIP Premium Service",
          description: "고객 중심시스템을 통해 <br> 새로운 기업 서비스를 경험해 보십시오. <br> 귀사의 성공적인 비즈니스를 위한 최고의 파트너가 되겠습니디.",
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.carousel__wrap {
  width: 100%;
}
</style>