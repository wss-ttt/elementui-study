<template>
  <div class="wrapper">
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
    computed: {
      isChange() {
        return this.$store.state.common.isChange
      }
    },
    watch: {
      $route: 'routeHandle',
      isChange: {
        handler(newVal, oldVal) {
          if (newVal) {
            console.log('isChange')
            this.init()
            this.$store.commit('common/updateIsChange', false)
          }
        }
      }
    },
    mounted() {
      // 第一次进来,需要执行
      console.log('mounted')
      this.init()
    },
    methods: {
      routeHandle(route) {
        console.log('routeHandle')
        this.init()
      },
      init() {
        console.log('init')
      }
    },
    filter: {}
  }

</script>
<style scoped>
</style>
