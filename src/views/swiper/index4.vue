<template>
  <div class="wrapper">
    <div class="header">
      <div v-for="(item,index) in headers" :key="index">{{ item }}</div>
    </div>
    <div class="body">
      <div v-for="(item,index) in list" :key="index" class="item">
        <div>{{ item.name }}</div>
        <div>{{ item.age }}</div>
        <div>{{ item.sex }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      headers: ['姓名', '年龄', '性别'],
      list: [],
      swiperOption: {
        direction: 'vertical',
        slidesPerView: '5', //  显示区域显示几个
        autoplay: true,
        loop: false // 注意这个loop的作用及到底做了哪些事情
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.createData()
  },
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    createData() {
      for (let i = 1; i <= 10; i++) {
        let o = {
          name: '乔峰' + i,
          age: 10 + i,
          sex: '男'
        }
        this.list.push(o)
      }
    }
  },
  filter: {}
}
</script>
<style scoped lang="scss">
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  width: 400px;
  height: 400px;
  background: #fb3;
  margin: 50px auto;
  .header {
    height: 50px;
    display: flex;
    background: #11a2f5;
    color: #fff;
    font-size: 20px;
    > div {
      flex: 1;
      @include center;
    }
  }
  .body {
    height: calc(100% - 50px); // 显示10行
    color: #fff;
    font-size: 18px;
    > .item {
      height: calc(100% / 10);
      display: flex;
      > div {
        flex: 1;
        @include center;
      }
      &:nth-child(2n) {
        background: #1b4888;
      }
      &:nth-child(2n + 1) {
        background: #0780c5;
      }
    }
  }
}
</style>