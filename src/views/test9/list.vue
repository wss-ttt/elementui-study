<template>
  <div class="wrapper">
    <ul>
      <li v-for="i in 4" :key="i" @click="toDetails(i)">用户{{i}}</li>
    </ul>
    <hr>
    <router-view></router-view>
    <div v-for="(item,index) in list" :key="index" :ref="item">1</div>
    <button type="button" @click="change">改变大小</button>
    <div class="box" ref="box" :class="{ 'big': changeBig }">box</div>
  </div>
</template>

<script>
import resizeEvent from 'element-resize-event'
export default {
  components: {},
  props: {},
  data() {
    return {
      changeBig: false,
      list: ['box', 'box', 'box']
    }
  },
  computed: {},
  watch: {
    // $route: 'routeHandle'
  },
  created() {
  },
  mounted() {
    resizeEvent(this.$refs['box'], () => {
      console.log('大小改变了')
    })
  },
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    toDetails(id) {
      this.$router.push({
        name: 'test9-details',
        params: {
          id: id
        }
      })
    },
    change() {
      // 改变dvi大小
      this.changeBig = !this.changeBig
    }
    /* routeHandle(to) {
      console.log(to)
    } */
  },
  filters: {}
}
</script>
<style scoped lang="scss">
.box {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  &.big {
    width: 200px;
    height: 200px;
    border: 1px solid green;
  }
}

</style>