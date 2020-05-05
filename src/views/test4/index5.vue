<template>
    <div class="index5">
       <button type="button" @click="visible=true">显示</button>
       <button type="button" @click="visible=false">隐藏</button>
       <div class="box" v-if="visible">
           <div class="move"></div>
       </div>
   </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
         visible: true 
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {},
    filter: {}
  }
</script>
<style scoped lang="scss">
.box{
    width: 500px;
    height: 500px;
    background: #fb3;
    position: relative;
    .move{
        width: 100px;
        height: 100px;
        background: brown;
        position: absolute;
        left: 0;
        animation: move linear 2s forwards;
    }
}
@keyframes move{
    to{
        left: 400px;
    }
}

</style>