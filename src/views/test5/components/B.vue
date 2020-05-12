<template>
  <div class="wrapper">
    我是a组件
    {{ name }}
  </div>
</template>

<script>
  import Bus from './bus.js'
  export default {
    components: {},
    props: {},
    data() {
      return {
          name: ''
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
        let self = this
        Bus.$on('on-change',function(data){
            console.log('这个执行了没有了')
            self.name = data
            self.test()
        })
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      test() {
        console.log('好好学习 天天向上')
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
