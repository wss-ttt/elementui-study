<template>
  <div class="wrapper">
    <div class="box">
      <swiper :options="swiperOption">
        <swiper-slide v-for="i in 5" :key="i">
          好后学习 {{ i }}
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        swiperOption: {
          autoplay: true
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
    width: 200px;
    height: 100px;
    background: #fb3;
    margin: 50px auto;
  }
  .swiper-container {
      height:100%;
  }

</style>
