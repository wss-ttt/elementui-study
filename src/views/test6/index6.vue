<template>
  <div class="wrapper">
      <v-f></v-f>
  </div>
</template>

<script>
  import VF from './components/F'
  export default {
    components: {
      VF
    },
    props: {},
    data() {
      return {

      }
    },
    computed: {},
    watch: {},
    created() {
      console.log('父组件中的created')
      // 1.父组件中模拟异步操作
      setTimeout(() => {
        console.log('父组件中模拟异步操作')
      }, 0)
    },
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
