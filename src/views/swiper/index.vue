<template>
  <div class="wrapper">
    <swiper ref="mySwiper" v-if="list.length" :options="swiperOption" @mouseenter.native="on_enter"
      @mouseleave.native="on_leave" class="box">
      <swiper-slide v-for="i in list" :key="i" class="item">{{ i }}</swiper-slide>
    </swiper>
    <button type="button" @click="getData">异步请求(有数据)</button>
    <button type="button" @click="getData2">异步请求(没有数据)</button>
    <button type="button" @click="showSwiper">获取swiper实例</button>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        list: [],
        visible: true,
        swiperOption: {
          direction: 'vertical',
          slidesPerView: '5', // 容器中显示几个
          autoplay: true,
          loop: true
        }
      }
    },
    computed: {
      mySwiper() {
        return this.$refs['mySwiper'].$swiper
      }
    },
    watch: {},
    created() {},
    mounted() {
      // 请求数据
      this.getData()
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      on_enter() {
        // this.mySwiper.autoplay.stop()
        this.$refs['mySwiper'].$swiper.autoplay.stop()
      },
      on_leave() {
        // this.mySwiper.autoplay.start()
        this.$refs['mySwiper'].$swiper.autoplay.start()
      },
      getData() {
        setTimeout(() => {
          for (let i = 1; i <= 10; i++) {
            this.list.push(i)
          }
        }, 1000)
      },
      getData2() {
        setTimeout(() => {
          this.list = []
        }, 1000)
      },
      showSwiper() {
        console.log(this.mySwiper)
        console.log(this.$refs['mySwiper'])
        console.log(this.$refs['mySwiper'].$swiper)
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

    .item {
      font-size: 30px;
      text-align: center;
      color: #fff;
    }
  }

</style>
