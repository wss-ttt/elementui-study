<template>
  <el-drawer
    :visible.sync="drawer"
    :with-header="false"
    direction="btt"
    :modal-append-to-body="false"
    class="operation-history"
    :modal="false"
    :before-close="beforeClose"
  ></el-drawer>
</template>

<script>
// import Bus from './bus.js'
export default {
  components: {},
  props: {},
  data() {
    return {
      drawer: false
    }
  },
  computed: {
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
    },
    beforeClose(done) {
      console.log('关闭')
      this.$emit('on-aa')
      done()
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
    height: 180px !important;
    padding: 15px;
    width: 100%;
    // 这里需要设置该样式 否则swiper-cotainer样式有问题
    .el-drawer__body {
      height: 100%;
    }
    &.btt {
      animation-duration: 1s !important;
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
