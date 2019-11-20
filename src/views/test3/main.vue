<template>
  <div class="wrapper">
    <router-link :to="{name:'index3'}">index3</router-link>
    <router-link :to="{name:'index4'}">index4</router-link>
    <hr />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {}
}
</script>
<style scoped>
</style>