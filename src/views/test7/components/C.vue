<template>
  <div class="wrapper">
    C
    <input type="text" v-model="name" />
    <hr>
    <router-link :to="{name: 'C1'}">C1</router-link>
    <router-link :to="{name: 'C2'}">C2</router-link>
    <hr>
    <h2>三级路由显示的区域</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'C',
  components: {},
  props: {},
  data() {
    return {
      name: ''
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
</style>
 