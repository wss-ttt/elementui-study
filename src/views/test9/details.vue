<template>
  <div class="wrapper">用户ID: {{ $route.params.id }}</div>
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
  /* beforeRouteUpdate (to, from ,next) {
    this.init()
    next()
  }, */
  created() {},
  mounted() {
    this.init()
  },
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    init() {
      console.log('init')
    },
    routeHandle() {
      this.init()
    }
  },
  filters: {}
}
</script>
<style scoped>
</style>