<template>
  <div class="wrapper">
    <router-link :to="{name: 'AA'}">A</router-link>
    <router-link :to="{name: 'BB'}">B</router-link>
    <router-link :to="{name: 'CC'}">C</router-link>
    <hr>
    <h2>子路由显示的区域</h2>
    当前路由信息: {{ $route.meta }}
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> -->


    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
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
      $route(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    },
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
<style scoped>
</style>
