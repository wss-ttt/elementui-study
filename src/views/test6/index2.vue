<template>
  <div class="wrapper">
    我是index2页面
    <button type="button" @click="toUrl">路由跳转</button>
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
    computed: {},
    watch: {
      $route: 'routeHandle'
    },
    created() {},
    mounted() {},
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      toUrl() {
        this.$router.push({
          name: 'test6-index3'
        })
      },
      routeHandle() {
        console.log('路由发生变化了')
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
