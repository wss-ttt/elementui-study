<template>
  <div class="wrapper">
    我是父组件
    <br>
    <router-link :to="{name: 'D'}">去D页面</router-link>
    <hr>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
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
    watch: {},
    created() {
      console.log('index created')
    },
    mounted() {
      console.log('index mounted')
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
