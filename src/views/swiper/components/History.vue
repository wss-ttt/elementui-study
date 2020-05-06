<template>
  <el-drawer
    :visible.sync="drawer"
    :with-header="false"
    direction="btt"
    :modal-append-to-body="false"
    class="operation-history"
  >
    <!-- <div class="title">{{ title }}</div>
    <div class="operation-history-header row">
      <div v-for="(item, index) in headers" :key="index" class="col">{{ item }}</div>
    </div> -->
    <!-- <swiper
      ref="mySwiper"
      :options="swiperOptions"
      @mouseenter.native="on_enter"
      @mouseleave.native="on_leave"
    >
      <swiper-slide v-for="(item, index) in list" :key="index" class="operation-history-item row">
        <div class="col">{{ item.name}}</div>
        <div class="col">{{ item.age}}</div>
        <div class="col">{{ item.sex}}</div>
      </swiper-slide>
    </swiper> -->
  </el-drawer>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      drawer: false,
      title: '班级数据', // 弹窗标题
      list: [],
      headers: ['姓名', '年龄', '性别'], // 列表表头
      swiperOptions: {
        direction: 'vertical',
        slidesPerView: '5',
        slidesPerGroup: 1,
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: true
      } // swiper配置
    }
  },
  computed: {
    mySwiper() {
      return this.$refs.mySwiper.swiperInstance
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
    init() {
      this.drawer = true
      this.$nextTick(() => {
        for (let i = 1; i <= 10; i++) {
          this.list.push({
            name: 'aa' + i,
            age: i,
            sex: '男'
          })
        }
      })
    },
    // 进入时停止
    on_enter() {
      this.mySwiper.autoplay.stop()
    },
    // 移出时开始
    on_leave() {
      this.mySwiper.autoplay.start()
    }
  },
  filter: {}
}
</script>
<style lang="scss">
@mixin oneline {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.operation-history {
  width: 100%;
  height: 100%;
  &.el-drawer__wrapper {
    position: absolute;
  }
  & + .v-modal {
    position: absolute;
  }
  .el-drawer {
    background: #032352;
    height: 380px !important;
    padding: 15px;
    width: 100%;
    // 这里需要设置该样式 否则swiper-cotainer样式有问题
    .el-drawer__body {
      height: 100%;
    }
    &.btt{
        animation-duration: 1s!important;
    }
  }
  .title {
    width: 100%;
    font-weight: bold;
    height: 30px;
    color: #fff;
    @include center;
  }
  .row {
    display: flex;
    .col {
      flex: 1;
    }
  }
  .operation-history-header {
    height: 50px;
    color: #fff;
    background: #11a2f5;
    > div {
      @include center;
      @include oneline;
    }
  }
  .operation-history-item {
    color: #fff;
    text-align: center;
    > div {
      @include center;
      @include oneline;
      &.normal {
        color: #03c1ff;
      }
      &.warining {
        color: #f7bb2d;
      }
      &.abnormal {
        color: #ff2419;
      }
    }
    &:nth-child(odd) {
      background: #07489e;
    }
    &:nth-child(even) {
      background: #0271bf;
    }
  }
  .swiper-container {
    height: calc(100% - 30px - 50px);
    cursor: pointer;
    .swiper-slide {
      // 该高度是自动计算出来 不需要设置的
    }
  }
}
</style>
