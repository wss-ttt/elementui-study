<template>
  <div class="wrapper">
    我是a组件
    <button type="button" @click="sendData">发送数据</button>
  </div>
</template>

<script>
  import Bus from './bus.js'
  export default {
    components: {},
    props: {},
    data() {
      return {

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
    methods: {
      sendData() {
        Bus.$emit('on-change', '张三')
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
