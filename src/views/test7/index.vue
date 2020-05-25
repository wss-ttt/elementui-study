<template>
  <div class="wrapper">
    <router-link :to="{name: 'a'}">a</router-link>
    <router-link :to="{name: 'b'}">b</router-link>
    <router-link :to="{name: 'c'}">c</router-link>
    <hr />
    <keep-alive :include="cache">
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
      cache: ['A', 'B']
    }
  },
  computed: {},
  watch: {},
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
a {
  font-size: 30px;
}
</style>
 