<template>
  <div class="wt-drawer" v-show="drawer">
    <div class="mask"></div>
    <div class="content">aaaa</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      drawer: false
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
<style scoped lang="scss">
.wt-drawer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
 