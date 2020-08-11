<template>
  <div class="wrapper">
    <ul>
      <li v-for="i in 4" :key="i" @click="toDetails(i)">用户{{i}}</li>
    </ul>
    <hr>
    <router-view></router-view>
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
    // $route: 'routeHandle'
  },
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    toDetails(id) {
      this.$router.push({
        name: 'test9-details',
        params: {
          id: id
        }
      })
    },
    /* routeHandle(to) {
      console.log(to)
    } */
  },
  filters: {}
}
</script>
<style scoped>
</style>