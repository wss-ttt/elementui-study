<template>
  <div class="wrapper">
    <h2>我是A组件</h2>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {

      }
    },
    computed: {
      routeChange() {
        return this.$store.state.common.routeChange
      }
    },
    watch: {
       routeChange: {
           handler(newVal, oldVal) {
               console.log('数据改变了')
           }
       } 
    },
    created() {},
    mounted() {
        console.log('routeChange', this.routeChange)
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {},
    filter: {}
  }

</script>
<style scoped>
</style>
