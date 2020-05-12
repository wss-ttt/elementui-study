<template>
  <div class="wrapper">
    <div class="box">
      <button type="button" @click="show">显示</button>
      <div class="mask" v-show="visible"></div>
      <v-d ref="d" v-show="visible" @on-aa="aa"></v-d>
    </div>

    <div class="box2">
      <button type="button" @click="show2">显示</button>
      <div class="mask" v-show="visible2"></div>
      <v-d ref="dd" v-show="visible2" @on-aa="bb"></v-d>
    </div>
  </div>
</template>

<script>
import VD from './components/D'
export default {
  components: {
    VD
  },
  props: {},
  data() {
    return {
      visible: false,
      visible2: false
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
    show() {
      this.visible = true
      this.$nextTick(() => {
        this.$refs['d'].init()
      })
    },
    show2() {
      this.visible2 = true
      this.$nextTick(() => {
        this.$refs['dd'].init()
      })
    },
    aa() {
      this.visible = false
    },
    bb() {
      this.visible2 = false
    }
  },
  filter: {}
}
</script>
<style lang="scss">
.box {
  width: 400px;
  height: 400px;
  background: #fb3;
  position: relative;
  float: left;
  margin-right: 100px;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
}
.box2 {
  width: 400px;
  height: 400px;
  background: #58a;
  position: relative;
  float: left;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
 