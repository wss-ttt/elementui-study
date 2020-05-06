<template>
  <div class="wrapper">
    <div class="box">
      <button type="button" @click="isVisible = true">显示</button>
      <div class="drawer" v-show="isVisible">
        <!-- <div class="mask" @click="isVisible = false"></div> -->
        <div class="mask" @click="hide"></div>
        <div class="content" :class="{'out':out}"></div>
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
      isVisible: false,
      out: false
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
  methods: {
    hide() {
      // 1.需要先执行动画
      // 2.然后在隐藏
      this.out = true
      setTimeout(()=>{
          this.isVisible = false
          this.out = false
      },1000)
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
  position: relative;
  margin: 100px auto;
  .drawer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
    }
    .content {
      position: absolute;
      width: 100%;
      height: 200px;
      background: #ccc;
      bottom: 0;
      //   animation: drawer-in 225ms cubic-bezier(0,0,.2,1) 0s;
      animation: drawer-in 1s 0s;
      &.out {
        animation: drawer-out 1s reverse 0s;
      }
    }
  }
}
@keyframes drawer-in {
  0% {
    transform: translate(0, 100%);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes drawer-out {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 100%);
  }
}
</style>