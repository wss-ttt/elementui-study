<template>
    <div class="wrapper">
        <!-- 给原生的input添加回车事件 -->
        <input type="text"  @keyup.enter="test"/>
        <!-- 给el-input添加回车事件 el-input为组件 
            所以需要添加.native修饰符 即可 
        -->
        <el-input @keyup.enter.native="test"></el-input>
        <hr>
        <input type="text" @keyup.13="test"/>
    </div>
</template>

<script>
  export default {
    props:{},
    data(){
      return {
          
      }
    },
    computed:{},
    components:{},
    created(){},
    mounted(){},
    destroyed(){},
    watch:{},
    methods:{
        test(){
            console.log('test')
        }
    },
  }
</script>
<style scoped>
</style>