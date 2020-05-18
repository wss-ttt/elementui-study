<template>
  <div class="wrapper">
    我是index3页面
    <button type="button" @click="toB">到b</button>
    <button type="button" @click="toC">到c</button>
    <button type="button" @click="toD">到d</button>
    <hr>
    <router-view></router-view>
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
      routeHandle() {
        console.log('路由发生变化了')
      },
      toB() {
        this.$router.push({
          name: 'test6-index3-b'
        })
      },
      toC() {
        this.$router.push({
          name: 'test6-index3-c'
        })
      },
      toD() {
        this.$router.push({
          name: 'test6-index3-d'
        })
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
