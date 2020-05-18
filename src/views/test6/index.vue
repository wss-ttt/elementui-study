<template>
  <div class="wrapper">
    <v-a></v-a>

    <hr>
    <h2>我是父组件</h2>
    <button type="button" @click="change">改变</button>
  </div>
</template>

<script>
  import VA from './components/A'
  export default {
    components: {
      VA
    },
    props: {},
    data() {
      return {

      }
    },
    computed: {
      routeChange: {
        get() {
          return this.$store.state.common.routeChange
        },
        set(val) {
          this.$store.commit('common/updateRouteChange', val)
        }
      }
    },
    watch: {},
    created() {},
    mounted() {},
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      change() {
          console.log('在这个地方改变数据')
          this.routeChange = 1
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
