<template>
  <div class="content">
    <div class="carousel_section">
      <HomeCarousel></HomeCarousel>
    </div>
    <div class="info_section">
      <div class="contact">
        <WeatherCarousel />
        <ContactUs />
      </div>
      <div class="exchange">
        <template v-for="currency of currencys">
          <ExchangeRate :currency="currency" />
        </template>
      </div>
    </div>
    <div class="partner_section">
      <h2 class="title">{{ 'Global Partners' }}</h2>
      <div class="partner__wrap">
        <template v-for="partner of partners">
          <PartnerCard :partner="partner" />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import HomeCarousel from "@/components/carousels/HomeCarousel.vue"
import ContactUs from "@/components/home/ContactUs.vue"
import ExchangeRate from "@/components/home/ExchangeRate.vue";
import WeatherCarousel from "@/components/home/Announcement.vue";
import PartnerCard from "@/components/home/PartnerCard.vue";
import { getExchangeRate } from "@/api/ExchangeRate";
import { PARTNER_INFO } from "@/constants/constants";

export default {
  components: {
    HomeCarousel,
    ContactUs,
    WeatherCarousel,
    ExchangeRate,
    PartnerCard
  },
  data() {
    return {
      currencys: [],
      partners: PARTNER_INFO,
      curList: [
        { name: "미국 USD", value: "USD", img: "us" },
        { name: "유로 EUR", value: "EUR", img: "eu" },
        { name: "일본 JPY", value: "JPY(100)", img: "jp" },
        { name: "중국 CNY", value: "CNH", img: "cn" }
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
    }

    .exchange {
      margin-top: 90px;
      display: flex;
    }
  }

  .partner_section {
    background-color: #f1f1f1;
    padding: 100px 40px;

    .title {
      font-size: 70px;
      line-height: 70px;
      text-align: center;
      margin-bottom: 50px;
    }

    .partner__wrap {
      display: flex;
      justify-content: center;
    }
  }
}
</style>