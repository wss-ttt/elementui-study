<template>
  <div class="wrapper">姓名:{{name}}</div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      name: '乔峰'
    }
  },
  created(){
      this.name = '小龙女'
  },
  mounted() {
  },
  watch: {
    name: {
      handler(newVal, oldVal) {
        console.log('name 发生了改变')
      }
    }
  }
}
</script>
<style scoped>
</style>