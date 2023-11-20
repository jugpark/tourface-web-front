<template>
  <div class="content">
    <div class="carousel_section">
      <HomeCarousel></HomeCarousel>
    </div>
    <div class="contact">
      <ContactUs />
      <ContactUs />
    </div>
  </div>
</template>
<script>
import HomeCarousel from "@/components/carousels/HomeCarousel.vue"
import ContactUs from "@/components/home/ContactUs.vue"

export default {
  components: {
    HomeCarousel,
    ContactUs
  }
}
</script>
<style lang="scss" scoped>
.content {
  .carousel_section {
    height: 500px;
  }

  .contact {
    margin: 30px auto;
    display: flex;
    justify-content: space-around;
  }
}
</style>