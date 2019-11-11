<template>
  <div class="wrapper">
    <div v-for="item in items" :key="item">{{item}}</div>
    <button @click="changeItem1">修改1</button>
    <button @click="changeItem2">修改2</button>
    <button @click="changeLength">将数组的长度为0</button>
    <button @click="changeLength2">将数组的长度为02</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ['乔峰', '杨过', '小龙女']
    }
  },
  updated() {
    console.log('数据更新', this.items[0])
  },
  mounted() {
  },
  methods: {
    changeItem1() {
      this.items[0] = '张三'
      console.log(111, this.items[0])
    },
    changeItem2() {
      this.$set(this.items, 0, '张三')
      console.log(222, this.items[0])
    },
    changeLength(){
      // 将数组长度修改为0 
      this.items.length = 0   // 不会触发updated钩子函数  视图会更新
      console.log('this.items',this.items)  
    },
    changeLength2(){
      // 将数组长度修改为0 
      this.items.splice(0)  // 会触发updated钩子函数 视图会更新
      console.log('this.items',this.items) 
    }
  }
}
</script>
<style scoped>
.wrapper{
  width: 400px;
  border:1px solid #ccc;
  padding:15px;
  border-radius:4px;
}
</style>