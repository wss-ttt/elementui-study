<template>
  <div class="wrapper">
    <h2>我是子页面</h2>
    <box2 @search="search"></box2>
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
    return {
      startTime:'',
      endTime:''
    }
  },
  computed: {
  },
  components: {
    Box2
  },
  created() {},
  mounted() {},
  activated() {
    console.log('index4 activated')
  },
  deactivated() {
    console.log('index4 deactivated')
  },
  destroyed() {},
  watch: {},
  methods: {
    search(val){
      this.startTime = val.startTime
      this.endTime = val.endTime
    }
  }
}
</script>
<style scoped>
.content {
  background-color: aquamarine;
  margin-top: 15px;
  padding: 15px;
}
</style>