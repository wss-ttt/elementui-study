<template>
  <div class="wrapper">
    <h2>我是父页面</h2>
    <div class="box2">
      <h2>我是搜索组件</h2>开始时间:
      <el-input v-model="startTime"></el-input>结束时间:
      <el-input v-model="endTime"></el-input>
      <el-button @click="search">搜索</el-button>
    </div>

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
    isChange:{
      get(){
        return this.$store.state.common.isChange
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
  methods: {
    search(){
      this.$store.commit('common/updateStartTime',this.startTime)
      this.$store.commit('common/updateEndTime',this.endTime)
      this.$store.commit('common/updateIsChange',!this.isChange)
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
.box2 {
  padding: 15px;
  background-color: #ccc;
}
</style>