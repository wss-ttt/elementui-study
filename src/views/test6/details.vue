<template>
  <div class="wrapper">
    <h2>详情信息</h2>
    {{ $route.params }}
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {}
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
      routeHandle() {
        console.log('路由发生变化了')
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
