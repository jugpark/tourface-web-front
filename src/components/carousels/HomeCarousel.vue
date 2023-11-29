<template>
  <div class="carousel__wrap">
    <VueSlickCarousel v-bind="settings">
      <template v-for="(item, index) of details">
        <Panel :detail="item" :index="index"/>
      </template>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import Panel from "@/components/carousels/Panel.vue";
import {CAROUSEL} from "@/constants/constants"
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
      details: CAROUSEL
    }
  }
}
</script>
<style lang="scss" scoped>
.carousel__wrap {
  width: 100%;

  .slick-slider::v-deep {
    .slick-dots {
      bottom: 25px !important;

      li {
        margin: 0 10px !important;

        button {
          &::before {
            color: #fff;
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>