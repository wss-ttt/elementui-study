<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="box">
      <swiper-slide class="item" style="background: red;">I'm Slide 1</swiper-slide>
      <swiper-slide class="item" style="background: green;">I'm Slide 2</swiper-slide>
      <swiper-slide class="item" style="background: yellow;">I'm Slide 3</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        autoplay: true,
        loop: true
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {},
  filter: {}
}
</script>
<style scoped lang="scss">
.box {
  width: 400px;
  height: 400px;
  background: #fb3;
  .item{
      font-size: 30px;
      text-align: center;
      color: #fff;
  }
}
</style>
 