<template>
  <div class="wrapper">
    <div class="box">
      <button @click="isVisible = true">显示</button>
      <div class="mask" id="mask" v-show="isVisible" @click="hide($event)">
        <div class="content">好好学习</div>
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
        isVisible: false
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
      hide(event) {
          let target = event.target 
          // 这里需要判断点击的是mask还是mask中的其他元素(例如:content)
          if(target.id === 'mask'){
              this.isVisible = false
          }
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
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    .content{
        position: absolute;
        height: 200px;
        width: 100%;
        background: #ccc;
        bottom: 0;
        animation: drawer-in 1s 0s;
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
</style>