<template>
  <div class="wrapper">
    <select v-model="type">
      <option value="0">info</option>
      <option value="1">success</option>
      <option value="2">warning</option>
    </select>
    <el-button :type="type|statusFilter">好好学习</el-button>
    <div v-if="isShow">{{msg|hello}}</div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      type: 1,
      msg: '乔峰'
    }
  },
  mounted(){
  },
  filters: {
    statusFilter(status) {
      const arr = ['info', 'success', 'warning']
      return arr[status]
    }
  }
}
</script>
<style scoped>
</style>