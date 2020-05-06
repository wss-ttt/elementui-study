<template>
  <div class="wrapper">
    <div class="box">
      <button type="button" @click="show">显示</button>
      <v-history v-if="isVisible" ref="history"></v-history>
    </div>
  </div>
</template>

<script>
import VHistory from './components/History'
export default {
  components: {
    VHistory
  },
  props: {},
  data() {
    return {
      isVisible: false
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
  methods: {
    show() {
      this.isVisible = true
      this.$nextTick(() => {
        this.$refs['history'].init()
      })
    }
  },
  filter: {}
}
</script>
<style scoped lang="scss">
.box {
  width: 500px;
  height: 500px;
  background: #fb3;
  margin: 100px auto;
  position: relative;
}
</style>