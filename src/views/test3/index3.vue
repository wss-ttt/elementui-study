<template>
  <div class="wrapper">
    <h2>我是父页面</h2>
    <box2></box2>
    <div class="content">
      <h2>数据如下:</h2>
      开始时间:{{startTime}}
      <br />
      结束时间:{{endTime}}
      <br />开始发送请求...
    </div>
  </div>
</template>

<script>
import Box2 from './components/Box2'
export default {
  props: {},
  data() {
    return {}
  },
  computed: {
    startTime: {
      get() {
        return this.$store.state.common.startTime
      }
    },
    endTime: {
      get() {
        return this.$store.state.common.endTime
      }
    }
  },
  components: {
    Box2
  },
  created() {},
  mounted() {},
  activated() {
    console.log('index3 activated')
  },
  deactivated() {
    console.log('index3 deactivated')
  },
  destroyed() {},
  watch: {},
  methods: {}
}
</script>
<style scoped>
.content {
  background-color: aquamarine;
  margin-top: 15px;
  padding: 15px;
}
</style>