<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="i in 5" :key="i">
        <div class="box" :class="'type' + i">
          好后学习 {{ i }}
        </div>
      </swiper-slide>
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
      height: 100%;
  }
  .swiper-container{
      width: 200px;
      height: 100px;
  }

  .type1 {
    background: #fb3;
  }

  .type2 {
    background: #1acd7e;
  }

  .type3 {
    background: #58a;
  }

  .type4 {
    background: tan;
  }

  .type5 {
    background: #fcc;
  }

</style>
