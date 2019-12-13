<template>
  <div class="wrapper">
      <v-box2 data="乔峰"></v-box2>
      <v-box2 data="杨过"></v-box2>
      <v-box2 data="小龙女"></v-box2>
      <button @click="change">改变数据student</button>
      <button @click="change2">改变msg</button>
  </div>
</template>

<script>
import VBox2 from './components/box2'
export default {
  components: {
      VBox2
  },
  props: {},
  data() {
    return {
      student:{
        name:'乔峰',
        age:18
      },
      msg:'aa'
    }
  },
  methods: {
    change(){
      this.student = {
        name:'乔峰',
        age:18
      }
    },
    change2(){
      this.msg = 'aa'
    }
  },
  computed: {},
  watch: {
    student:{
      handler(newVal,oldVal){
        console.log('watch student')
        console.log(newVal === oldVal)
      },
      deep:true
    },
    msg:{
      handler(newVal,oldVal){
       console.log('watch msg') 
       console.log(newVal === oldVal)
      }
    }
  }
}
</script>
<style scoped>
</style>