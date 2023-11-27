<template>
  <div class="content">
    <div class="carousel_section">
      <HomeCarousel></HomeCarousel>
    </div>
    <div class="info_section">
      <div class="contact">
        <WeatherCarousel/>
        <ContactUs/>
      </div>
      <div class="exchange">
        <template v-for="currency of currencys">
          <ExchangeRate :currency="currency"/>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import HomeCarousel from "@/components/carousels/HomeCarousel.vue"
import ContactUs from "@/components/home/ContactUs.vue"
import ExchangeRate from "@/components/home/ExchangeRate.vue";
import WeatherCarousel from "@/components/home/WeatherCarousel.vue";
import {getExchangeRate} from "@/api/ExchangeRate";

export default {
  components: {
    HomeCarousel,
    ContactUs,
    WeatherCarousel,
    ExchangeRate
  },
  data() {
    return {
      currencys: [],
      curList: [
        {name: "미국 USD", value: "USD", img: "us"},
        {name: "유로 EUR", value: "EUR", img: "eu"},
        {name: "일본 JPY", value: "JPY(100)", img: "jp"},
        {name: "중국 CNY", value: "CNH", img: "cn"}
      ]
    }
  },
  methods: {
    async setExchangeRate() {
      const result = await getExchangeRate();
      this.pickCurrency(result)
    },
    pickCurrency(result) {
      let arr = []
      for (let i = 0; i < this.curList.length; i++) {
        for (let j = 0; j < result.length; j++) {
          if (this.curList[i]['value'] === result[j]['cur_unit']) {
            arr.push({
              unit: this.curList[i]['name'],
              rate: result[j]['deal_bas_r'],
              img: this.curList[i]['img']
            })
          }
        }
      }
      this.currencys = arr
    },
  },
  created() {
    this.setExchangeRate();
  }
}
</script>
<style lang="scss" scoped>
.content {
  height: 100%;

  .carousel_section {
    height: 500px;
  }

  .info_section {
    margin: 50px 0;
    padding: 0 40px;

    .contact {
      display: flex;
      justify-content: space-between;
    }

    .exchange {
      margin-top: 90px;
      display: flex;
    }
  }
}
</style>