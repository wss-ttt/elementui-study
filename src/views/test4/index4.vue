<template>
    <div class="wrapper">
        <h2>全局函数 全局变量</h2>

    </div>
</template>

<script>
import global from '../../../src/global'
const {name,say,startTime} = global
  export default {
    components:{},
    props:{},
    data(){
      return {
          
      }
    },
    created(){},
    mounted(){
        console.log(global)
    },
    activated(){},
    updated(){},
    destroyed(){},
    methods:{},
    computed:{},
    watch:{},
  }
</script>
<style scoped>
</style>