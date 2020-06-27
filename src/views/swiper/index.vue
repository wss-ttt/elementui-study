<template>
  <div class="wrapper">
    <swiper ref="mySwiper" v-if="visible" :options="swiperOption" class="box">
      <swiper-slide class="item" style="background: red;">I'm Slide 1</swiper-slide>
      <swiper-slide class="item" style="background: green;">I'm Slide 2</swiper-slide>
      <swiper-slide class="item" style="background: yellow;">I'm Slide 3</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <button type="button" @click="visible = !visible">显示/隐藏</button>
    <button type="button" @click="show">显示</button>
    <button type="button" @click="stop">stop</button>
    <button type="button" @click="start">start</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      visible: true,
      swiperOption: {
        direction: 'vertical',
        autoplay: true,
        loop: true
      }
    }
  },
  computed: {
    mySwiper() {
      // return this.$refs['mySwiper'].$swiper
      return this.$refs['mySwiper'].swiperInstance
    }
  },
  watch: {},
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    show() {
      console.log(this.mySwiper)
    },
    stop() {
      const res = this.mySwiper.autoplay.stop()
      console.log(res)
    },
    start() {
      const res = this.mySwiper.autoplay.start()
      console.log(res)
    }
  },
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
 